import React, { useState } from "react";
import HotelListDrawer from "../HotelListDrawer/HotelListDrawer";
import GuestsDrawer from "../GuestsDrawer/GuestsDrawer";

const BookingWidget: React.FC = () => {
  // All of the state
  const [isOpenHotelListDrawer, setIsOpenHotelListDrawer] = useState(false);
  const [isOpenGuestsDrawer, setIsOpenGuestsDrawer] = useState(false);

  return (
    <nav className="flex flex-col gap-[10px]">
      <HotelListDrawer setIsOpenHotelListDrawer={setIsOpenHotelListDrawer} isOpenHotelListDrawer={isOpenHotelListDrawer} />
      <GuestsDrawer setIsOpenGuestsDrawer={setIsOpenGuestsDrawer} isOpenGuestsDrawer={isOpenGuestsDrawer} />
    </nav>
  );
};

export default BookingWidget;
