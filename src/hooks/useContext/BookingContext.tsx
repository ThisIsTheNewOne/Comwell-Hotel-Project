import { CalendarVariable, RoomList, guestTypes } from "@/types/Booking";
import { createContext, useEffect, useState } from "react";

const BookingContext = createContext({
  checkIn: {} as CalendarVariable,
  setCheckIn: (checkIn: CalendarVariable) => {},
  checkOut: {} as CalendarVariable,
  setCheckOut: (checkOut: CalendarVariable) => {},
  roomList: [] as RoomList[],
  setRoomList: (roomList: RoomList[]) => {},
  roomsNumber: 1,
  setRoomsNumber: (roomsNumber: number) => {},
  selectedHotel: null as string | null,
  setSelectedHotel: (selectedHotel: string | null) => {},
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

  const initialRoom = {
    label: "Room 1",
    guests: guestTypes.map((guestType) => ({
      label: guestType,
      amount: guestType === "Adults" ? 1 : 0,
    })),
  };

  const [roomList, setRoomList] = useState([initialRoom] as RoomList[]);
  const [roomsNumber, setRoomsNumber] = useState(1);
  const [selectedHotel, setSelectedHotel] = useState<string | null>(null);
  // console.log("THis is the data from the calendar", checkIn, checkOut);

  useEffect(() => {
    console.log("hahahaahah", roomList);
  }, [roomList]);

  return (
    <BookingContext.Provider
      value={{
        checkIn,
        setCheckIn,
        checkOut,
        setCheckOut,
        roomList,
        setRoomList,
        roomsNumber,
        setRoomsNumber,
        selectedHotel,
        setSelectedHotel,
      }}
    >
      {props.children}
    </BookingContext.Provider>
  );
};

export default BookingContext;
