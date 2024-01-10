import React, { useContext, useEffect, useState } from "react";
import RoomArticle from "./RoomArticle";
import AddRoomDrawer from "./AddRoomDrawer";
import { Room } from "@/types/Booking";

interface RoomListProps {
  hotelId: string;
}

const RoomList: React.FC<RoomListProps> = (props: RoomListProps) => {
  const { hotelId } = props;
  const [isOpenAddRoomDrawer, setIsOpenAddRoomDrawer] = useState(false);
  const [roomList, setRoomList] = useState([] as Room[]);

 useEffect(() => {
  if (hotelId) {
    fetch(process.env.NEXT_PUBLIC_BACKEND + "room/hotel/" + hotelId)
    .then(async (res) => {
      const dataRooms: Room[] = await res.json();
      console.log("GET Rooms:", dataRooms);
      setRoomList(dataRooms);
    })
    .catch((err) => console.log(err));
  }

 }, [hotelId])


    function handleAddRoomDrawer() {
        console.log("edit hotel drawer", isOpenAddRoomDrawer);
        setIsOpenAddRoomDrawer(true);
      }

  return (
    <>
    {roomList.map((room) => (
        <RoomArticle 
        hotelId={hotelId}
        roomAdultGuests={room.adultGuests}
        roomChildGuests={room.childGuests}
        roomInfantGuests={room.infantGuests}
        roomID={room._id}
        roomImage={room.image}
        roomName={room.label}
        roomDescription={room.description}
        roomPrice={room.price}
        />
    ))}        

  </>
  );
};

export default RoomList;
