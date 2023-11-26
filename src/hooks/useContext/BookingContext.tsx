import {
  CalendarVariable,
  Hotel,
  Room,
  guestTypes,
  roomDetails,
} from "@/types/Booking";
import { createContext, useCallback, useEffect, useState } from "react";


type Guest = {
  label: string;
  amount: number;
};

const BookingContext = createContext({
  hotels: [] as Hotel[],
  guestList: [] as Guest[][],
  setGuestList: (newGuests: Guest[][])=> {},
  checkIn: {} as CalendarVariable,
  setCheckIn: (checkIn: CalendarVariable) => {},
  checkOut: {} as CalendarVariable,
  setCheckOut: (checkOut: CalendarVariable) => {},
  roomList: [] as Room[],
  roomsNumber: 1,
  setRoomsNumber: (roomsNumber: number) => {},
  selectedHotel: null as Hotel | null,
  setSelectedHotel: (selectedHotel: Hotel | null) => {},
  totalGuests: 1,
  setTotalGuests: (totalGuests: number) => {},
  selectedRoom: null as null | Room,
  setSelectedRoom: (selectedRoom: null | Room) => {},
  postBooking: () => {}
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


  const initialRoom = ['Adults', 'Children', 'Infants'].map((guestType) => ({
      label: guestType,
      amount: guestType === "Adults" ? 1 : 0,
    }))

  const [hotels, setHotels] = useState([] as Hotel[])
  const [roomList, setRoomList] = useState([] as Room[]);
  const [guestList, setGuestList] = useState([initialRoom] as Guest[][]);
  const [roomsNumber, setRoomsNumber] = useState(1);
  const [selectedHotel, setSelectedHotel] = useState<Hotel| null>(null);
  const [totalGuests, setTotalGuests] = useState(1);
  const [selectedRoom, setSelectedRoom] = useState(null as null | Room);

  // Get all hotels on render
  useEffect(() => {
    fetch('http://localhost:3006/' + 'hotel')
    .then(async (res) => {
      const dataHotels : Hotel[] = await res.json()
      console.log("GET Hotels:", dataHotels)
      setHotels(dataHotels)
    }).catch((err) => console.log(err))
  }, [])

  // Get all rooms on selectHotel
  useEffect(() => {
    if(selectedHotel){
      fetch('http://localhost:3006/' + 'room/hotel/' + selectedHotel._id)
      .then(async (res) => {
        const dataRooms : Room[] = await res.json()
        console.log("GET Rooms:", dataRooms)
        setRoomList(dataRooms)
      }).catch((err) => console.log(err))
    }
  }, [selectedHotel])

  const postBooking = useCallback(async () => {
    try {
      const response = await fetch("http://localhost:3006/" + 'booking/', {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "startDate": checkIn.date,
          "endDate": checkOut.date,
          // Needs to be updated with user info
          "userId": "guest",
          "roomId": selectedRoom?._id
        }),
      });
  
      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  }, [checkIn, checkOut, selectedRoom])

  return (
    <BookingContext.Provider
      value={{
        hotels,
        checkIn,
        guestList,
        setGuestList,
        setCheckIn,
        checkOut,
        setCheckOut,
        roomList,
        roomsNumber,
        setRoomsNumber,
        selectedHotel,
        setSelectedHotel,
        totalGuests,
        setTotalGuests,
        selectedRoom,
        setSelectedRoom,
        postBooking
      }}
    >
      {props.children}
    </BookingContext.Provider>
  );
};

export default BookingContext;
