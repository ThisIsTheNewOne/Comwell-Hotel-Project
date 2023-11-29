import React, { useState } from "react";
import Drawer from "react-modern-drawer";
import SelectRoom from "./SelectRoom";
import GuestInfo from "./GuestInfo";
import Payment from "./Payment";
import BookingDates from "./HeaderBookingFlow/BookingDates";
import BookingRooms from "./HeaderBookingFlow/BookingRooms";
import BookingHotel from "./HeaderBookingFlow/BookingHotel";
import BookingPrice from "./HeaderBookingFlow/BookingPrice";
import GoBackButton from "./HeaderBookingFlow/GoBackButton";
import RoomDetails from "./RoomDetails";
import BookingAddons from "./BookingAddons";

interface Props {
  isOpenBookingFlowDrawer: boolean;
  setIsOpenBookingFlowDrawer: (isOpenBookingFlowDrawer: boolean) => void;
}

const BookingFlow: React.FC<Props> = (props: Props) => {
  const { isOpenBookingFlowDrawer, setIsOpenBookingFlowDrawer } = props;
  const [drawerComponent, setDrawerComponent] = useState("selectedRoom");
  const [componentList] = useState([
    "selectedRoom",
    "roomDetails",
    "addons",
    "guestInfo",
    "payment",
  ]);

  function handleClick() {
    console.log("Booking flow drawer open");
    setIsOpenBookingFlowDrawer(true);
  }

  function handleClose() {
    const currentIndex = componentList.indexOf(drawerComponent);

    if (currentIndex === 0) {
      setIsOpenBookingFlowDrawer(false);
    } else {
      setDrawerComponent(componentList[currentIndex - 1]);
    }
  }


  return (
    <nav>
      {/* <h1 className="text-heading-lg block py-4">Booking Flow</h1>
      <button onClick={handleClick}>Search</button> */}
      <div className="max-lg:mt-auto w-full py-[16px] " onClick={handleClick}>
        <button className="bg-theme2 w-full text-white rounded-[30px] py-[16px] font-semibold text-[16px]">
          Søg
        </button>
      </div>
      <Drawer
        className="bookingFlowDrawer font-semibold"
        open={isOpenBookingFlowDrawer}
        onClose={handleClose}
        direction="right"
        size={910}
      >
        <div className="header">
          <div className="left">
            <GoBackButton handleClose={handleClose} />
            <div className="bookingSummary font-regular">
              <BookingDates />
              <BookingRooms />
              <BookingHotel />
            </div>
          </div>
          <div className="right"> 
            <BookingPrice />
          </div>
        </div>

        <>
          {drawerComponent === "selectedRoom" && (
            <SelectRoom
              id="selectedRoom"
              setDrawerComponent={setDrawerComponent}
            />
          )}

          {drawerComponent === "roomDetails" && (
            <RoomDetails
              id="roomDetails"
              setDrawerComponent={setDrawerComponent}
            />
          )}

          {drawerComponent === "addons" && <BookingAddons id="addons"  setDrawerComponent={setDrawerComponent} />}

          {drawerComponent === "guestInfo" && (
            <GuestInfo id="guestInfo" setDrawerComponent={setDrawerComponent} />
          )}
          {drawerComponent === "payment" && <Payment />}
        </>
      </Drawer>
    </nav>
  );
};

export default BookingFlow;
