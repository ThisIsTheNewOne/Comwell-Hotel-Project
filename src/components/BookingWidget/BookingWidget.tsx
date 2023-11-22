import React, { useState } from "react";
import HotelListDrawer from "../HotelListDrawer/HotelListDrawer";
import GuestsDrawer from "../GuestsDrawer/GuestsDrawer";
import BookingFlow from "../BookingFlow/BookingFlow";

const BookingWidget: React.FC = () => {
  // All of the state
  const [isOpenHotelListDrawer, setIsOpenHotelListDrawer] = useState(false);
  const [isOpenGuestsDrawer, setIsOpenGuestsDrawer] = useState(false);
  const [isOpenBookingFlowDrawer, setIsOpenBookingFlowDrawer] = useState(false);

  return (
    <nav>
      <HotelListDrawer setIsOpenHotelListDrawer={setIsOpenHotelListDrawer} isOpenHotelListDrawer={isOpenHotelListDrawer} />
      <GuestsDrawer setIsOpenGuestsDrawer={setIsOpenGuestsDrawer} isOpenGuestsDrawer={isOpenGuestsDrawer} />
      <BookingFlow setIsOpenBookingFlowDrawer={setIsOpenBookingFlowDrawer} isOpenBookingFlowDrawer={isOpenBookingFlowDrawer} />
    </nav>
  );
};

export default BookingWidget;
