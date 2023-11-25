import React, { useState } from "react";
import Drawer from "react-modern-drawer";
import SelectRoom from "./SelectRoom";
import GuestInfo from "./GuestInfo";
import Payment from "./Payment";
import GoBackButton from "./HeaderBookingFlow/GobackButton";
import BookingDates from "./HeaderBookingFlow/BookingDates";
import BookingRooms from "./HeaderBookingFlow/BookingRooms";
import BookingHotel from "./HeaderBookingFlow/BookingHotel";

interface Props {
  isOpenBookingFlowDrawer: boolean;
  setIsOpenBookingFlowDrawer: (isOpenBookingFlowDrawer: boolean) => void;
}

const BookingFlow: React.FC<Props> = (props: Props) => {
  const { isOpenBookingFlowDrawer, setIsOpenBookingFlowDrawer } = props;
  const [drawerComponent, setDrawerComponent] = useState("selectedRoom");
  const [componentList] = useState(["selectedRoom", "guestInfo", "payment"]);

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
            <div className="price">
              <span>2.345</span>
              <span>kr.</span>
            </div>
            <div className="bedicon flex h-[36px] w-[36px] items-center justify-center rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
                className="w-[20px]"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M5.625 3.125A.625.625 0 0 0 5 3.75v4.375h1.875v-2.5c0-.69.56-1.25 1.25-1.25h3.75c.69 0 1.25.56 1.25 1.25v2.5H15V3.75a.625.625 0 0 0-.625-.625h-8.75Zm7.5 6.25H4.617l-.833 2.5h12.432l-.833-2.5h-2.258Zm-1.25-1.25v-2.5h-3.75v2.5h3.75Zm-8.125 5v2.5h12.5v-2.5H3.75Zm0 5v-1.25h12.5v1.25h1.25v-6.351l-1.25-3.75V3.75c0-1.036-.84-1.875-1.875-1.875h-8.75c-1.036 0-1.875.84-1.875 1.875v4.274l-1.25 3.75v6.351h1.25Z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        {drawerComponent === "selectedRoom" && (
          <SelectRoom
            id="selectedRoom"
            setDrawerComponent={setDrawerComponent}
          />
        )}
        {drawerComponent === "guestInfo" && (
          <GuestInfo id="guestInfo" setDrawerComponent={setDrawerComponent} />
        )}
        {drawerComponent === "payment" && <Payment />}
      </Drawer>
    </nav>
  );
};

export default BookingFlow;
