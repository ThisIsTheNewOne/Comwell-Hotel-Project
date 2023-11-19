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


  return (
    <nav>
      <BookingInputSingle bookingInputProps={hotelInput} handleClick={handleClick} />
      <Drawer className="hotelListDrawer" open={isOpenHotelListDrawer} onClose={handleClose} direction="right" size={390}>
        <div className="header">
          <h1>Hoteller</h1>
          <button className="closeButton">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" className="w-[16px] h-[16px]">
              <path stroke="currentColor" stroke-width="1.5" d="M2.62 13.38 12.99 3.01M13.38 13.38 3.01 3.01"></path>
            </svg>
          </button>
        </div>
        <Filter selectedFilter={selectedFilter} handleFilterChange={handleFilterChange} />
        <div className="divider"></div>
        {/* Add your hotel list here based on the selectedFilter */}
        <div className="hotelList">
          <ul className="flex flex-col gap-y-2">
            <HotelInput />
            <HotelInput />
            <HotelInput />
            <HotelInput />
            <HotelInput />
            <HotelInput />
            <HotelInput />
            <HotelInput />
            <HotelInput />
            <HotelInput />
            <HotelInput />
            <HotelInput />
            <HotelInput />
          </ul>
        </div>
        <div className="selectButton">
          <button>Vælg</button>
        </div>
        {/* You'll need to implement logic to display hotels based on the selected filter */}
      </Drawer>
    </nav>
  );
};

export default HotelListDrawer;
