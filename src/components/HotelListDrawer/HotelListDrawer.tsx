import React, { useContext, useEffect, useState } from "react";
import Drawer from "react-modern-drawer";
import Filter from "./Filters";
import HotelInput from "./HotelInput";
import BookingInputSingle from "../BookingWidget/BookingInputSingle";
import { Hotel } from "@/types/Booking";
import BookingContext from "@/hooks/useContext/BookingContext";
import setRegion from "@/data/hotelRegions";

interface Props {
  isOpenHotelListDrawer: boolean;
  setIsOpenHotelListDrawer: (isOpenHotelListDrawer: boolean) => void;
  hotelList: Hotel[];
}

const HotelListDrawer: React.FC<Props> = (props: Props) => {
  const { isOpenHotelListDrawer, setIsOpenHotelListDrawer, hotelList } = props;
  const [selectedFilter, setSelectedFilter] = useState<string>("Alle");
  const { selectedHotel, setSelectedHotel } = useContext(BookingContext);
  const [filteredHotelList, setFilteredHotelList] = useState<Hotel[]>([]);


  function handleClick() {
    console.log("Hotel list drawer open");
    setIsOpenHotelListDrawer(true);
  }

  function handleClose() {
    console.log("what is up with this in the end", isOpenHotelListDrawer)
    setIsOpenHotelListDrawer(false);
  }

  function handleFilterChange(filter: string) {
    setSelectedFilter(filter);
  
    const newFilteredHotelList = hotelList.filter((hotel) => {
      if (filter === "Alle") {
        return true;
      } else {
        const region = setRegion(hotel.city);
        console.log(hotel.city),
        console.log("region", region)
        return region === filter;
      }
    });

    setFilteredHotelList(newFilteredHotelList);
  
  }

  useEffect(() => {
    if (hotelList && hotelList.length > 0) {
      handleFilterChange(selectedFilter); 
    }
  }, [hotelList]); 
  

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
        <div className="hotelList">
        <ul className="flex flex-col gap-y-2">
            {filteredHotelList.map((hotel) => ( 
              <HotelInput
                key={hotel.name}
                hotelName={hotel.name}
                city={hotel.city}
                image={hotel.image}
                isSelected={selectedHotel?.name === hotel.name}
                onClick={() => handleHotelSelect(hotel)}
              />
            ))}
          </ul>
        </div>
       
        <div className="drawerSelectButton">
          {/* <div> Is this a good button in the end ?</div> */}
          <button onClick={() =>  handleClose()}>Vælg</button>
        </div>
      </Drawer>
    </nav>
  );
};

export default HotelListDrawer;
