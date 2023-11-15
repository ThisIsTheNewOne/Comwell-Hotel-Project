import React, { useState } from "react";
import Drawer from "react-modern-drawer";

interface Props {
  isOpenHotelListDrawer: boolean;
  setIsOpenHotelListDrawer: (isOpenHotelListDrawer: boolean) => void;
}

const HotelListDrawer: React.FC<Props> = (props: Props) => {
  const { isOpenHotelListDrawer, setIsOpenHotelListDrawer } = props;

  function handleClick() {
    console.log("Hotel list drawer open");
    setIsOpenHotelListDrawer(true);
  }

  function handleClose() {
    setIsOpenHotelListDrawer(false);
  }

  return (
    <nav>
      <h1 className="text-heading-lg block py-4">Choose hotel</h1>
      <button onClick={handleClick}>Select hotel</button>
      <Drawer className="hotelListDrawer" open={isOpenHotelListDrawer} onClose={handleClose} direction="right" size={390}>
        <div className="header">
          <h1>Hoteller</h1>
          <button className="closeButton">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" className="w-[16px] h-[16px]">
              <path stroke="currentColor" stroke-width="1.5" d="M2.62 13.38 12.99 3.01M13.38 13.38 3.01 3.01"></path>
            </svg>
          </button>
        </div>
      </Drawer>
    </nav>
  );
};

export default HotelListDrawer;
