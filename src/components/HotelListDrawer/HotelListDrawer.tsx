import React, { useState } from "react";
import Drawer from "react-modern-drawer";
import Filter from "./Filters";
import HotelInput from "./HotelInput";
import BookingInputSingle from "../BookingWidget/BookingInputSingle";

interface Props {
  isOpenHotelListDrawer: boolean;
  setIsOpenHotelListDrawer: (isOpenHotelListDrawer: boolean) => void;
}

const HotelListDrawer: React.FC<Props> = (props: Props) => {
  const { isOpenHotelListDrawer, setIsOpenHotelListDrawer } = props;
  const [selectedFilter, setSelectedFilter] = useState<string>("Alle");
  const [selectedHotel, setSelectedHotel] = useState<string | null>(null);

  function handleClick() {
    console.log("Hotel list drawer open");
    setIsOpenHotelListDrawer(true);
  }

  function handleClose() {
    setIsOpenHotelListDrawer(false);
  }

  function handleFilterChange(filter: string) {
    setSelectedFilter(filter);
    // Apply filtering logic here to filter the hotel list based on the selected filter
    // This could involve updating the state that holds the filtered hotels or fetching filtered data from an API
  }

  const hotelInput = {
    label: "Hotel",
    placeholder: "Vælg hotel",
  };

  function handleHotelSelect(hotelName: string) {
    if (selectedHotel === hotelName) {
      setSelectedHotel(null);
    } else {
      setSelectedHotel(hotelName);
    }
  }

  return (
    <nav>
      <BookingInputSingle bookingInputProps={hotelInput} handleClick={handleClick} />
      <Drawer className="hotelListDrawer font-semibold" open={isOpenHotelListDrawer} onClose={handleClose} direction="right" size={390}>
        <div className="header">
          <h1>Hoteller</h1>
          <button className="closeButton" onClick={handleClose}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" className="w-[16px] h-[16px]">
              <path stroke="currentColor" strokeWidth="1.5" d="M2.62 13.38 12.99 3.01M13.38 13.38 3.01 3.01"></path>
            </svg>
          </button>
        </div>
        <Filter selectedFilter={selectedFilter} handleFilterChange={handleFilterChange} />
        <div className="divider"></div>
        {/* Add your hotel list here based on the selectedFilter */}
        <div className="hotelList">
          <ul className="flex flex-col gap-y-2">
            <HotelInput hotelName="Borupgaard" city="Snekkersten" isSelected={selectedHotel === "Borupgaard"} onClick={() => handleHotelSelect("Borupgaard")} />
            <HotelInput hotelName="Borupgaard2" city="Snekkersten" isSelected={selectedHotel === "Borupgaard2"} onClick={() => handleHotelSelect("Borupgaard2")} />
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
