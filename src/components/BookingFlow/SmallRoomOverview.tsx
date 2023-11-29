import BookingContext from "@/hooks/useContext/BookingContext";
import React, { useContext } from "react";
import BookingFacilities from "./BookingFacilities";
import { Room } from "@/types/Booking";
import { usePriceFormatter } from "@/hooks/usePriceFormatter";
import LanguageContext from "@/hooks/useContext/LanguageContext";

interface SmallRoomOverviewProps {
  room: Room;
  roomSize: number;
  roomImage: string;
  roomName: string;
  roomDescription: string;
  price: number;
  setDrawerComponent: (drawerComponent: string) => void;
}

const SmallRoomOverview: React.FC<SmallRoomOverviewProps> = (
  props: SmallRoomOverviewProps
) => {
  const {
    room,
    roomImage,
    roomSize,
    roomDescription,
    roomName,
    price,
    setDrawerComponent,
  } = props;
  const { setSelectedRoom } = useContext(BookingContext);
  const [formatNumber] = usePriceFormatter();

  const selectNextComponent = () => {
    setDrawerComponent("roomDetails");
    setSelectedRoom(room);
  };

  const calculatedPriceFormatted = formatNumber(price);
  const { currency } = useContext(LanguageContext);

  return (
    <>
      <li className="roomListLink" onClick={selectNextComponent}>
        <button className="input room-selector relative flex w-full flex-col overflow-hidden !p-0 outline-black ring-black lg:flex-row lg:items-stretch">
          <div className="relative h-[200px] w-full lg:h-[242px]">
            <div className="module-richMedia relative block h-full w-full bg-gray-200">
              <img
                src={roomImage}
                alt="borupgaard"
                className="transition-transform group-hover:scale-[1.05] ease-in duration-150 h-full w-full object-cover lazyautosizes ls-is-cached lazyloaded"
              />
            </div>
            <div className="trumpet text-sm max-lg:right-2 absolute top-2 rounded-full bg-white px-2.5 py-1 lowercase lg:left-2 lg:top-2">
              <span>{roomSize}</span>
              <sup>2</sup>
            </div>
          </div>
          <div className="relative flex w-full flex-col px-4 pt-2 pb-4 text-left">
            <span className="text-2xl mb-4 pr-6">{roomName}</span>
            <span className="text-xs font-regular mb-4 max-h-[32px] ">
              <p>{roomDescription}</p>
            </span>
            <BookingFacilities />
            <div className="mt-[42px] flex items-end lg:mt-auto">
              <div className="roomPrice flex items-end gap-x-1">
                <span>{currency}</span>
                <span>{calculatedPriceFormatted}</span>
              </div>
            </div>
            {/* This creates a hydration problem between the server and client */}
            {/* <button className="absolute right-4 top-4 flex h-[24px] w-[24px] items-center justify-center overflow-hidden rounded-full transition border-gray border group-hover:border-black/[0.3]"></button> */}
          </div>
        </button>
      </li>
    </>
  );
};

export default SmallRoomOverview;
