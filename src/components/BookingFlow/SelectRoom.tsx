import React, { useContext, useCallback } from "react";
import SmallRoomOverview from "./SmallRoomOverview";
import BookingContext from "@/hooks/useContext/BookingContext";
import { Room } from "@/types/Booking";

type SelectedRoomType = {
  id: string;
  setDrawerComponent: (drawerComponent: string) => void;
};

const SelectRoom: React.FC<SelectedRoomType> = (props: SelectedRoomType) => {
  // All of the state
  const { id, setDrawerComponent } = props;
  const {
    roomList,
    guestList
  } = useContext(BookingContext);

  // const selectedHotelRoomsList = [
  //   {
  //     roomSize: "16 m",
  //     roomImage:
  //       "https://raw.githubusercontent.com/ThisIsTheNewOne/Comwell-Hotel-Project/master/public/images/hotels/borupgaard/standard-twin.webp",
  //     roomName: "Twin seng",
  //     roomDescription: " Vores standardværelser er indrettet i moderne, nordisk stil ogmed stort badeværelse.",
  //     price: 7.402,
  //   },
  //   {
  //     roomSize: "40 m",
  //     roomImage:
  //       "https://raw.githubusercontent.com/ThisIsTheNewOne/Comwell-Hotel-Project/master/public/images/hotels/borupgaard/suite.webp",
  //     roomName: "Suite",
  //     roomDescription: " Vores standardværelser er indrettet i moderne, nordisk stil ogmed stort badeværelse.",
  //     price: 13.439,
  //   },
  //   {
  //     roomSize: "16 m",
  //     roomImage:
  //       "https://raw.githubusercontent.com/ThisIsTheNewOne/Comwell-Hotel-Project/master/public/images/hotels/borupgaard/standard-twin.webp",
  //     roomName: "Twin seng",
  //     roomDescription: " Vores standardværelser er indrettet i moderne, nordisk stil ogmed stort badeværelse.",
  //     price: 7.402,
  //   },
  // ];    
  const isRoomAMatch = useCallback((room: Room) => {
    const firstGuestList = guestList[0]
    return room.adultGuests >= ((firstGuestList.find(g => g.label === 'Adults'))?.amount ?? 0) ||
    room.childGuests >= ((firstGuestList.find(g => g.label === 'Children'))?.amount?? 0) ||
    room.childGuests >= ((firstGuestList.find(g => g.label === 'Infants'))?.amount ?? 0 )
  }, [guestList])

  return (
    <div key={id}>
      <div className="selectRoomContainer">
        <h1>Vælg værelse</h1>
        <ul className="roomList flex flex-col gap-y-4 py-4">
          {roomList.map((room, index) => {
            if(isRoomAMatch(room)){
            return (
            <SmallRoomOverview
              key={index}
              room={room}
              roomSize={room.adultGuests + room.childGuests + room.infantGuests}
              roomImage={room.image}
              roomName={room.label}
              roomDescription={room.description}
              price={room.price}
              setDrawerComponent={setDrawerComponent}
            />
          ) } else return null })}
        </ul>
      </div>
    </div>
  );
};

export default SelectRoom;
