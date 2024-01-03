import {
  CalendarVariable,
  Hotel,
  Room,
  User,
  guestTypes,
  roomDetails,
  roomPackage,
} from "@/types/Booking";
import { createContext, useCallback, useEffect, useState } from "react";

type Guest = {
  label: string;
  amount: number;
};

const BookingContext = createContext({
  hotels: [] as Hotel[],
  checkIn: {} as CalendarVariable,
  setCheckIn: (checkIn: CalendarVariable) => {},
  checkOut: {} as CalendarVariable,
  setCheckOut: (checkOut: CalendarVariable) => {},
  roomList: [] as Room[],
  setRoomList: (roomList: Room[]) => {},
  guestList: [] as Guest[][],
  setGuestList: (newGuests: Guest[][]) => {},
  roomsNumber: 1,
  setRoomsNumber: (roomsNumber: number) => {},
  selectedHotel: null as Hotel | null,
  setSelectedHotel: (selectedHotel: Hotel | null) => {},
  totalGuests: 1,
  setTotalGuests: (totalGuests: number) => {},
  selectedRoom: null as null | Room,
  setSelectedRoom: (selectedRoom: null | Room) => {},
  isOpenBookingFlowDrawer: false,
  setIsOpenBookingFlowDrawer: (isOpenBookingFlowDrawer: boolean) => {},
  isOpenHotelListDrawer: false,
  setIsOpenHotelListDrawer: (isOpenHotelListDrawer: boolean) => {},
  isOpenGuestsDrawer: false,
  setIsOpenGuestsDrawer: (isOpenGuestsDrawer: boolean) => {},
  isOpenCalendarDrawer: false,
  setIsCalendarDrawer: (isOpenCalendarDrawer: boolean) => {},
  postBooking: () => {},
  selectedPackage: null as null | number,
  setSelectedPackage: (selectedPackage: null | number) => {},
  totalPrice: 0,
  setTotalPrice: (totalPrice: number) => {},
  selectedAddon: [] as roomPackage[], 
  setSelectedAddon: (selectedAddon: roomPackage[]) => {},
  guestInfo: { name: "", email: "", telefon: "" },
  setGuestsInfo: (guestInfo: { name: string; email: string; telefon: string }) => {},
  getRoomFeatures: () => {}
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

  const initialRoom = ["Adults", "Children", "Infants"].map((guestType) => ({
    label: guestType,
    amount: guestType === "Adults" ? 1 : 0,
  }));

  const [hotels, setHotels] = useState([] as Hotel[]);
  const [roomList, setRoomList] = useState([] as Room[]);
  const [guestList, setGuestList] = useState([initialRoom] as Guest[][]);
  const [roomsNumber, setRoomsNumber] = useState(1);
  const [selectedHotel, setSelectedHotel] = useState<Hotel | null>(null);
  const [totalGuests, setTotalGuests] = useState(1);
  const [selectedRoom, setSelectedRoom] = useState(null as null | Room);
  const [isOpenBookingFlowDrawer, setIsOpenBookingFlowDrawer] = useState(false);
  const [isOpenHotelListDrawer, setIsOpenHotelListDrawer] = useState(false);
  const [isOpenGuestsDrawer, setIsOpenGuestsDrawer] = useState(false);
  const [isOpenCalendarDrawer, setIsCalendarDrawer] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null as null | number);
  const [selectedAddon, setSelectedAddon] = useState([] as roomPackage[]);
  const [totalPrice, setTotalPrice] = useState(0);
  
  


  // All of the state
  // const [name, setName] = useState(currentUser?.fullname );
  // const [email, setEmail] = useState(currentUser?.userId);
  // const [telefon, setTelefon] = useState(currentUser?.phoneNr);  
  
  const [guestInfo, setGuestsInfo] = useState({ name:  "", email:  "", telefon: "" });


  // Get all hotels on render
  useEffect(() => {
    fetch("http://localhost:3006/" + "hotel")
      .then(async (res) => {
        const dataHotels: Hotel[] = await res.json();
        console.log("GET Hotels:", dataHotels);
        setHotels(dataHotels);
      })
      .catch((err) => console.log(err));
  }, []);

  // Get all rooms on selectHotel
  useEffect(() => {
    if (selectedHotel) {
      fetch("http://localhost:3006/" + "room/hotel/" + selectedHotel._id)
        .then(async (res) => {
          const dataRooms: Room[] = await res.json();
          console.log("GET Rooms:", dataRooms);
          setRoomList(dataRooms);
        })
        .catch((err) => console.log(err));
    }
  }, [selectedHotel]);

  const postBooking = useCallback(async () => {
    try {
      const response = await fetch("http://localhost:3006/" + "booking/", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          startDate: checkIn.date[0],
          endDate: checkOut.date[0],
          // Needs to be updated with user info
          userId: "guest",
          roomId: selectedRoom?._id,
        }),
      });

      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  }, [checkIn, checkOut, selectedRoom]);

  const getRoomFeatures = async () => {
    try {
      const response = await fetch("http://localhost:3006/" + "room-features/" + "all-room-features", {
        method: "GET", 
        headers: {
          "Content-Type": "application/json",
        }
      });

      const result = await response.json();
      console.log("Is this okay ??", result);
      return result
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <BookingContext.Provider
      value={{
        hotels,
        checkIn,
        setCheckIn,
        guestList, 
        setGuestList,
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
        isOpenBookingFlowDrawer,
        setIsOpenBookingFlowDrawer,
        isOpenHotelListDrawer,
        setIsOpenHotelListDrawer,
        isOpenGuestsDrawer,
        setIsOpenGuestsDrawer,
        isOpenCalendarDrawer,
        setIsCalendarDrawer,
        postBooking,
        selectedPackage, 
        setSelectedPackage,
        selectedAddon, 
        setSelectedAddon,
        totalPrice,
        setTotalPrice,
        guestInfo, 
        setGuestsInfo,
        getRoomFeatures
      }}
    >
      {props.children}
    </BookingContext.Provider>
  );
};

export default BookingContext;
