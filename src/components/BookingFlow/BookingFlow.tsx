import React, { useState } from "react";
import Drawer from "react-modern-drawer";

interface Props {
  isOpenBookingFlowDrawer: boolean;
  setIsOpenBookingFlowDrawer: (isOpenBookingFlowDrawer: boolean) => void;
}

const BookingFlow: React.FC<Props> = (props: Props) => {
  const { isOpenBookingFlowDrawer, setIsOpenBookingFlowDrawer } = props;

  function handleClick() {
    console.log("Booking flow drawer open");
    setIsOpenBookingFlowDrawer(true);
  }

  function handleClose() {
    setIsOpenBookingFlowDrawer(false);
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
        className="guestsDrawer"
        open={isOpenBookingFlowDrawer}
        onClose={handleClose}
        direction="right"
        size={910}
      >
        <div className="header">
          <button className="closeButton" onClick={handleClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 16"
              className="w-[16px] h-[16px]"
            >
              <path
                stroke="currentColor"
                stroke-width="1.5"
                d="M2.62 13.38 12.99 3.01M13.38 13.38 3.01 3.01"
              ></path>
            </svg>
          </button>
        </div>
        <div className="drawerSelectButton">
          <button onClick={handleClose}>Vælg</button>
        </div>
      </Drawer>
    </nav>
  );
};

export default BookingFlow;
