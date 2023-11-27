import React, { useContext, useState } from "react";
import HotelListDrawer from "../HotelListDrawer/HotelListDrawer";
import GuestsDrawer from "../GuestsDrawer/GuestsDrawer";
import BookingFlow from "../BookingFlow/BookingFlow";
import BookingInputDouble from "./BookingInputDouble";
import BookingCode from "./BookingCode";
import BookingInputSingle from "./BookingInputSingle";
import BookingContext from "@/hooks/useContext/BookingContext";
import { useChangeDate } from "@/hooks/useChangeDate";

const BookingWidget: React.FC = () => {
  // const [isOpenHotelListDrawer, setIsOpenHotelListDrawer] = useState(false);
  // const [isOpenGuestsDrawer, setIsOpenGuestsDrawer] = useState(false);
  // const [isOpenBookingFlowDrawer, setIsOpenBookingFlowDrawer] = useState(false);
  const [isBookingCodeOpen, setIsBookingCodeOpen] = useState(false);

  const {
    checkIn,
    checkOut,
    isOpenBookingFlowDrawer,
    setIsOpenBookingFlowDrawer,
    isOpenHotelListDrawer,
    setIsOpenHotelListDrawer,
    isOpenGuestsDrawer,
    setIsOpenGuestsDrawer,
    hotels
  } = useContext(BookingContext);

  const bookingCodeInput = {
    label: "Bookingkode",
    placeholder: "",
  };

  const [calendarInput] = useChangeDate({ checkIn, checkOut });
  const disableDates = [
    "2023-11-30",
    "2023-12-11",
    "2023-12-07",
    new Date(2025, 4, 9),
  ];


  return (
    <nav className="flex flex-col gap-[10px]">
      <HotelListDrawer
        setIsOpenHotelListDrawer={setIsOpenHotelListDrawer}
        isOpenHotelListDrawer={isOpenHotelListDrawer}
        hotelList={hotels}
      />
      <GuestsDrawer
        setIsOpenGuestsDrawer={setIsOpenGuestsDrawer}
        isOpenGuestsDrawer={isOpenGuestsDrawer}
      />
      <BookingInputDouble
        bookingInputProps={calendarInput}
        disableDates={disableDates}
      />
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
