import React, { useContext, useState } from "react";
import Drawer from "react-modern-drawer";
import Filter from "./Filters";
import HotelInput from "./HotelInput";
import BookingInputSingle from "../BookingWidget/BookingInputSingle";
import { Hotel } from "@/types/Booking";
import BookingContext from "@/hooks/useContext/BookingContext";

interface Props {
  isOpenHotelListDrawer: boolean;
  setIsOpenHotelListDrawer: (isOpenHotelListDrawer: boolean) => void;
  hotelList: Hotel[];
}

const HotelListDrawer: React.FC<Props> = (props: Props) => {
  const { isOpenHotelListDrawer, setIsOpenHotelListDrawer, hotelList } = props;
  const [selectedFilter, setSelectedFilter] = useState<string>("Alle");
  const { selectedHotel, setSelectedHotel } = useContext(BookingContext);

  function handleClick() {
    console.log("Hotel list drawer open");
    setIsOpenHotelListDrawer(true);
  }

  function handleClose() {
    setIsOpenHotelListDrawer(false);
  }

  function handleFilterChange(filter: string) {
    setSelectedFilter(filter);
    console.log("This is the selected filter", filter);
    //  here i want to sort the hotelList based on the selected filter
    //  if the filter is "Alle" then show all hotels
    //  if the filter is "Sjælland" then show all hotels in sjælland
    //  if the filter is "Fyn" then show all hotels in fyn
    //  if the filter is "Jylland" then show all hotels in jylland

    const filteredHotelList = hotelList.filter((hotel) => {
      if (filter === "Alle") {
        return true;
      } else {
        return hotel.city === filter;
      }
    });
  }

  const hotelInput = {
    label: "Hotel",
    placeholder: `${selectedHotel !== null ? selectedHotel.name : "Vælg hotel"}`,
  };

  function handleHotelSelect(hotel: Hotel) {
    console.log("This is the selected hotel in the end", hotel, selectedHotel)
    if (selectedHotel?._id === hotel._id) {
      setSelectedHotel(null);
    } else {
      setSelectedHotel(hotel);
    }
  }

  return (
    <nav>
      <BookingInputSingle
        bookingInputProps={hotelInput}
        handleClick={handleClick}
      />
      <Drawer
        className="hotelListDrawer font-semibold"
        open={isOpenHotelListDrawer}
        onClose={handleClose}
        direction="right"
        size={390}
      >
        <div className="header">
          <h1>Hoteller</h1>
          <button className="closeButton" onClick={handleClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 16"
              className="w-[16px] h-[16px]"
            >
              <path
                stroke="currentColor"
                strokeWidth="1.5"
                d="M2.62 13.38 12.99 3.01M13.38 13.38 3.01 3.01"
              ></path>
            </svg>
          </button>
        </div>
        <Filter
          selectedFilter={selectedFilter}
          handleFilterChange={handleFilterChange}
        />
        <div className="divider"></div>
        {/* Add your hotel list here based on the selectedFilter */}
        <div className="hotelList">
          {/* <ul className="flex flex-col gap-y-2">
            <HotelInput hotelName="Borupgaard" city="Snekkersten" isSelected={selectedHotel === "Borupgaard"} onClick={() => handleHotelSelect("Borupgaard")} />
            <HotelInput hotelName="Borupgaard2" city="Snekkersten" isSelected={selectedHotel === "Borupgaard2"} onClick={() => handleHotelSelect("Borupgaard2")} />
          </ul> */}
          <ul className="flex flex-col gap-y-2">
            {hotelList
              .filter((hotel) => {
                if (selectedFilter === "Alle") {
                  return true;
                } else {
                  return hotel.city === selectedFilter;
                }
              })
              .map((hotel) => (
                <HotelInput
                  key={hotel.name}
                  hotelName={hotel.name}
                  city={hotel.city}
                  isSelected={selectedHotel?.name === hotel.name}
                  onClick={() => handleHotelSelect(hotel)}
                />
              ))}
          </ul>
        </div>
        <div className="drawerSelectButton">
          <button onClick={handleClose}>Vælg</button>
        </div>
      </Drawer>
    </nav>
  );
};

export default HotelListDrawer;
