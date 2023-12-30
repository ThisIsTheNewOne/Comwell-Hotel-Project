import React, { useEffect, useRef, useState } from "react";
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
import Confirmation from "./Confirmation";
import ReservationAdded from "./ReservationAdded";
import DrawerModal from "../Modal/DrawerModal";


interface Props {
  isOpenBookingFlowDrawer: boolean;
  setIsOpenBookingFlowDrawer: (isOpenBookingFlowDrawer: boolean) => void;
}

const BookingFlow: React.FC<Props> = (props: Props) => {
  const { isOpenBookingFlowDrawer, setIsOpenBookingFlowDrawer } = props;
  const drawerRef = useRef<HTMLDivElement>(null);
  const [drawerComponent, setDrawerComponent] = useState("selectedRoom");
  const [isUnsavedChangesDialogOpen, setIsUnsavedChangesDialogOpen] = useState(false);

  const [componentList] = useState([
    "selectedRoom",
    "roomDetails",
    "addons",
    "guestInfo", 
    "payment",
    "reservationAdded",
    "confirmation",
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

  const openDialog = () => {
    setIsUnsavedChangesDialogOpen(true);
  }

  return (
    <nav>
     <DrawerModal 
       isUnsavedChangesDialogOpen={isUnsavedChangesDialogOpen} 
       setIsUnsavedChangesDialogOpen={setIsUnsavedChangesDialogOpen}
       setDrawerComponent={setDrawerComponent}
       setIsOpenBookingFlowDrawer={setIsOpenBookingFlowDrawer}
     />

      <div className="max-lg:mt-auto w-full py-[16px] " onClick={handleClick}>
        <button className="bg-theme2 w-full text-white rounded-[30px] py-[16px] font-semibold text-[16px]">
          Søg
        </button>
      </div>


      <div ref={drawerRef}>
        <Drawer
          className="bookingFlowDrawer font-semibold"
          open={isOpenBookingFlowDrawer}
          onClose={openDialog}
          direction="right"
          size={910}
        >
          {drawerComponent === "reservationAdded" ||
          drawerComponent === "confirmation" ? (
            <></>
          ) : (
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
          )}

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
            {drawerComponent === "addons" && (
              <BookingAddons
                id="addons"
                setDrawerComponent={setDrawerComponent}
              />
            )}
            {drawerComponent === "guestInfo" && (
              <GuestInfo
                id="guestInfo"
                setDrawerComponent={setDrawerComponent}
              />
            )}
            {drawerComponent === "payment" && (
              <Payment id="payment" setDrawerComponent={setDrawerComponent} />
            )}
            {drawerComponent === "reservationAdded" && (
              <ReservationAdded
                id="reservationAdded"
                setDrawerComponent={setDrawerComponent}
              />
            )}
            {drawerComponent === "confirmation" && (
              <Confirmation
                id="confirmation"
                setDrawerComponent={setDrawerComponent}
              />
            )}
          </>
        </Drawer>
      </div>
      
      {/* {isUnsavedChangesDialogOpen && (
        <dialog open className="">
          <p>Your changes will not be saved. Are you sure you want to close?</p>
          <button onClick={() => setIsUnsavedChangesDialogOpen(false)}> 
            Cancel
          </button>
          <button onClick={handleClose}>Close</button>
        </dialog>
      )} */}
    </nav>
  );
};

export default BookingFlow;
