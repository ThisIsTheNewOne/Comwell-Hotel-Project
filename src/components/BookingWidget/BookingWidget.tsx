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
  // All of the state
  const [isOpenHotelListDrawer, setIsOpenHotelListDrawer] = useState(false);
  const [isOpenGuestsDrawer, setIsOpenGuestsDrawer] = useState(false);
  const [isOpenBookingFlowDrawer, setIsOpenBookingFlowDrawer] = useState(false);
  const [isBookingCodeOpen, setIsBookingCodeOpen] = useState(false);

 const {checkIn, checkOut} = useContext(BookingContext)

  const bookingCodeInput = {
    label: "Bookingkode",
    placeholder: "",
  };

  const [calendarInput] = useChangeDate({checkIn, checkOut})



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
