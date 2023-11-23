import React from "react";
import SmallRoomOverview from "./SmallRoomOverview";

const SelectRoom: React.FC = () => {
  // All of the state

  return (
    <>
      <div className="selectRoomContainer">
        <h1>Vælg værelse</h1>
        <ul className="roomList flex flex-col gap-y-4 py-4">
          <SmallRoomOverview roomSize="16 m" roomImage="https://raw.githubusercontent.com/ThisIsTheNewOne/Comwell-Hotel-Project/master/public/images/hotels/borupgaard/standard-twin.webp" roomName="Twin seng" price={7.402} />
          <SmallRoomOverview roomSize="40 m" roomImage="https://raw.githubusercontent.com/ThisIsTheNewOne/Comwell-Hotel-Project/master/public/images/hotels/borupgaard/suite.webp" roomName="Suite" price={13.439} />
          <SmallRoomOverview roomSize="16 m" roomImage="https://raw.githubusercontent.com/ThisIsTheNewOne/Comwell-Hotel-Project/master/public/images/hotels/borupgaard/standard-twin.webp" roomName="Twin seng" price={7.402} />
        </ul>
      </div>
    </>
  );
};

export default SelectRoom;
