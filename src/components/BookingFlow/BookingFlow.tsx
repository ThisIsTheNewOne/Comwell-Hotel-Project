import React, { useState } from "react";
import Drawer from "react-modern-drawer";
import SelectRoom from "./SelectRoom";
import GuestInfo from "./GuestInfo";
import Payment from "./Payment";

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
        <button className="bg-theme2 w-full text-white rounded-[30px] py-[16px] font-semibold text-[16px]">Søg</button>
      </div>
      <Drawer className="bookingFlowDrawer font-semibold" open={isOpenBookingFlowDrawer} onClose={handleClose} direction="right" size={910}>
        <div className="header">
          <div className="left">
            <button className="closeButton" onClick={handleClose}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" className="h-3 w-3">
                <path fill="currentColor" fillRule="evenodd" d="m7.524 9.61 5.835-5.835-.884-.884L5.81 9.557l6.638 7.523.937-.827L7.524 9.61Z" clipRule="evenodd"></path>
              </svg>
            </button>
            <div className="bookingSummary font-regular">
              <div className="summaryInfo whitespace-nowrap border-r pr-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="h-[16px] w-[16px]">
                  <path fill="#161616" d="M19.5 3h-3V1.5H15V3H9V1.5H7.5V3h-3C3.675 3 3 3.675 3 4.5v15c0 .825.675 1.5 1.5 1.5h15c.825 0 1.5-.675 1.5-1.5v-15c0-.825-.675-1.5-1.5-1.5Zm0 16.5h-15V9h15v10.5Zm0-12h-15v-3h3V6H9V4.5h6V6h1.5V4.5h3v3Z"></path>
                </svg>
                <span>8. dec - 11. dec</span>
              </div>
              <div className="summaryInfo whitespace-nowrap border-r pr-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="h-[16px] w-[16px]">
                  <path
                    fill="#161616"
                    d="M12.5 3a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5Zm0-1.5a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5ZM20 22.5h-1.5v-3.75A3.75 3.75 0 0 0 14.75 15h-4.5a3.75 3.75 0 0 0-3.75 3.75v3.75H5v-3.75a5.25 5.25 0 0 1 5.25-5.25h4.5A5.25 5.25 0 0 1 20 18.75v3.75Z"
                  ></path>
                  <path fill="#000" d="M19 21v1.5H6V21z"></path>
                </svg>
                <span>1 værelse, 1 person</span>
              </div>
              <div className="summaryInfo whitespace-nowrap border-r pr-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="h-[16px] w-[16px]">
                  <g fill="currentColor">
                    <path d="M12 13.5A3.75 3.75 0 1 1 12 6a3.75 3.75 0 0 1 0 7.5zm0-6a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5z"></path>
                    <path d="m12 22.5-6.327-7.462a26.911 26.911 0 0 1-.26-.338A8.167 8.167 0 0 1 3.75 9.75a8.25 8.25 0 1 1 16.5 0 8.163 8.163 0 0 1-1.661 4.948l-.001.002s-.225.296-.259.335zm-5.39-8.704s.174.231.214.281L12 20.181l5.183-6.113.209-.274A6.676 6.676 0 0 0 18.75 9.75a6.75 6.75 0 0 0-13.5 0 6.68 6.68 0 0 0 1.36 4.046z"></path>
                  </g>
                </svg>
                <span>Borupgaard</span>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="price">
              <span>2.345</span>
              <span>kr.</span>
            </div>
            <div className="bedicon flex h-[36px] w-[36px] items-center justify-center rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" className="w-[20px]">
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
        {/* <SelectRoom /> */}
        {/* <GuestInfo /> */}
        <Payment />
      </Drawer>
    </nav>
  );
};

export default BookingFlow;
