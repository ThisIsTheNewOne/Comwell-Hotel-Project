import React from "react";
import SmallRoomOverview from "./SmallRoomOverview";

type SelectedRoomType = {
  id: string;
  setDrawerComponent: (drawerComponent: string) => void;
};

const SelectRoom: React.FC<SelectedRoomType> = (props: SelectedRoomType) => {
  // All of the state
  const { id, setDrawerComponent } = props;

  const selectedHotelRoomsList = [
    {
      roomSize: "16 m",
      roomImage:
        "https://raw.githubusercontent.com/ThisIsTheNewOne/Comwell-Hotel-Project/master/public/images/hotels/borupgaard/standard-twin.webp",
      roomName: "Twin seng",
      roomDescription: " Vores standardværelser er indrettet i moderne, nordisk stil ogmed stort badeværelse.",
      price: 7.402,
    },
    {
      roomSize: "40 m",
      roomImage:
        "https://raw.githubusercontent.com/ThisIsTheNewOne/Comwell-Hotel-Project/master/public/images/hotels/borupgaard/suite.webp",
      roomName: "Suite",
      roomDescription: " Vores standardværelser er indrettet i moderne, nordisk stil ogmed stort badeværelse.",
      price: 13.439,
    },
    {
      roomSize: "16 m",
      roomImage:
        "https://raw.githubusercontent.com/ThisIsTheNewOne/Comwell-Hotel-Project/master/public/images/hotels/borupgaard/standard-twin.webp",
      roomName: "Twin seng",
      roomDescription: " Vores standardværelser er indrettet i moderne, nordisk stil ogmed stort badeværelse.",
      price: 7.402,
    },
  ];

  return (
    <div key={id}>
      <div className="selectRoomContainer">
        <h1>Vælg værelse</h1>
        <ul className="roomList flex flex-col gap-y-4 py-4">
          {/* <SmallRoomOverview roomSize="16 m" roomImage="https://raw.githubusercontent.com/ThisIsTheNewOne/Comwell-Hotel-Project/master/public/images/hotels/borupgaard/standard-twin.webp" roomName="Twin seng" price={7.402} /> */}
          {/* <SmallRoomOverview roomSize="40 m" roomImage="https://raw.githubusercontent.com/ThisIsTheNewOne/Comwell-Hotel-Project/master/public/images/hotels/borupgaard/suite.webp" roomName="Suite" price={13.439} /> */}
          {/* <SmallRoomOverview roomSize="16 m" roomImage="https://raw.githubusercontent.com/ThisIsTheNewOne/Comwell-Hotel-Project/master/public/images/hotels/borupgaard/standard-twin.webp" roomName="Twin seng" price={7.402} /> */}

          {selectedHotelRoomsList.map((room, index) => (
            <SmallRoomOverview
              key={index}
              roomSize={room.roomSize}
              roomImage={room.roomImage}
              roomName={room.roomName}
              roomDescription={room.roomDescription}
              price={room.price}
              setDrawerComponent={setDrawerComponent}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SelectRoom;
