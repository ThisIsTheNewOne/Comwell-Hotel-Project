import React, { useState } from "react";
import HotelListDrawer from "../HotelListDrawer/HotelListDrawer";
import GuestsDrawer from "../GuestsDrawer/GuestsDrawer";
import BookingFlow from "../BookingFlow/BookingFlow";
import BookingInputDouble from "./BookingInputDouble";
import BookingCode from "./BookingCode";
import BookingInputSingle from "./BookingInputSingle";

const BookingWidget: React.FC = () => {
  // All of the state
  const [isOpenHotelListDrawer, setIsOpenHotelListDrawer] = useState(false);
  const [isOpenGuestsDrawer, setIsOpenGuestsDrawer] = useState(false);
  const [isOpenBookingFlowDrawer, setIsOpenBookingFlowDrawer] = useState(false);
  const [isBookingCodeOpen, setIsBookingCodeOpen] = useState(false);

  const bookingCodeInput = {
    label: "Bookingkode",
    placeholder: "",
  };

  const calendarInput = [
    { label: "Check ind", placeholder: "19.nov.", type: "text" },
    { label: "Check ud", placeholder: "20.nov.", type: "text" },
  ];

  return (
    <nav className="flex flex-col gap-[10px]">
      <HotelListDrawer
        setIsOpenHotelListDrawer={setIsOpenHotelListDrawer}
        isOpenHotelListDrawer={isOpenHotelListDrawer}
      />
      <GuestsDrawer
        setIsOpenGuestsDrawer={setIsOpenGuestsDrawer}
        isOpenGuestsDrawer={isOpenGuestsDrawer}
      />
      <BookingInputDouble bookingInputProps={calendarInput} />
      {!isBookingCodeOpen ? (
        <BookingCode
          setIsBookingCodeOpen={setIsBookingCodeOpen}
          isBookingCodeOpen={isBookingCodeOpen}
        />
      ) : (
        <BookingInputSingle bookingInputProps={bookingCodeInput} />
      )}
      <BookingFlow
        setIsOpenBookingFlowDrawer={setIsOpenBookingFlowDrawer}
        isOpenBookingFlowDrawer={isOpenBookingFlowDrawer}
      />
    </nav>
  );
};

export default BookingWidget;
