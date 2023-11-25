import {
  CalendarVariable,
  RoomList,
  guestTypes,
  roomDetails,
} from "@/types/Booking";
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
  totalGuests: 1,
  setTotalGuests: (totalGuests: number) => {},
  selectedRoom: null as null | roomDetails,
  setSelectedRoom: (selectedRoom: null | roomDetails) => {},
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
  const [totalGuests, setTotalGuests] = useState(1);
  const [selectedRoom, setSelectedRoom] = useState(null as null | roomDetails);

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
        totalGuests,
        setTotalGuests,
        selectedRoom,
        setSelectedRoom,
      }}
    >
      {props.children}
    </BookingContext.Provider>
  );
};

export default BookingContext;
