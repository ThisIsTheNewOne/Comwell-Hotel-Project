import { CalendarVariable } from "@/types/Booking";
import { createContext, useState } from "react";

const BookingContext = createContext({
  checkIn: {} as CalendarVariable,
  setCheckIn: (checkIn: CalendarVariable) => {},
  checkOut: {} as CalendarVariable,
  setCheckOut: (checkOut: CalendarVariable) => {},
});

interface BookingContextProviderProps {
  children: React.ReactNode;
}
export const BookingContextProvider: React.FC<BookingContextProviderProps> = (
  props: BookingContextProviderProps
) => {
  const [checkIn, setCheckIn] = useState({
    type: "checkIn",
    date: [],
  } as CalendarVariable);
  const [checkOut, setCheckOut] = useState({
    type: "checkOut",
    date: [],
  } as CalendarVariable);

  console.log("THis is the data from the calendar", checkIn, checkOut);

  return (
    <BookingContext.Provider
      value={{
        checkIn,
        setCheckIn,
        checkOut,
        setCheckOut,
      }}
    >
      {props.children}
    </BookingContext.Provider>
  );
};

export default BookingContext;
