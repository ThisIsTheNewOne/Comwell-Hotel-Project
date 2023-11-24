import React, { useState } from "react";
import Drawer from "react-modern-drawer";
import BookingInputSingle from "../BookingWidget/BookingInputSingle";
import GuestSelectionButton from "./GuestSelectionButton";

interface Props {
  isOpenGuestsDrawer: boolean;
  setIsOpenGuestsDrawer: (isOpenGuestsDrawer: boolean) => void;
}

const GuestsDrawer: React.FC<Props> = (props: Props) => {
  const { isOpenGuestsDrawer, setIsOpenGuestsDrawer } = props;

  function handleClick() {
    console.log("Guests drawer open");
    setIsOpenGuestsDrawer(true);
  }

  function handleClose() {
    setIsOpenGuestsDrawer(false);
  }

  const [amount, setAmount] = useState(0);

  //adding to cart functions
  function minus() {
    if (amount <= 0) return;

    const newAmount = amount - 1;
    setAmount(newAmount);
  }

  function plus() {
    const newAmount = amount + 1;
    setAmount(newAmount);
  }

  const roomsInput = {
    label: "Værelser",
    placeholder: "1 Værelse, 1 Person",
  };

  return (
    <nav>
      {/* <h1 className="text-heading-lg block py-4">Choose rooms</h1>
      <button onClick={handleClick}>Select rooms</button> */}
      <BookingInputSingle bookingInputProps={roomsInput} handleClick={handleClick} />
      <Drawer className="guestsDrawer font-semibold" open={isOpenGuestsDrawer} onClose={handleClose} direction="right" size={390}>
        <div className="header">
          <h1>Gæster & Værelser</h1>
          <button className="closeButton" onClick={handleClose}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" className="w-[16px] h-[16px]">
              <path stroke="currentColor" strokeWidth="1.5" d="M2.62 13.38 12.99 3.01M13.38 13.38 3.01 3.01"></path>
            </svg>
          </button>
        </div>
        <div className="guestsSelection">
          <h2>VÆRELSE</h2>
          <div className="guestButtonsWrapper">
            <GuestSelectionButton guestType="Voksne" ageGap="" />
            <GuestSelectionButton guestType="Børn" ageGap="3 - 11 år" />
            <GuestSelectionButton guestType="Småbørn" ageGap="0 - 2 år" />
          </div>
        </div>
        <div className="drawerSelectButton">
          <button onClick={handleClose}>Vælg</button>
        </div>
      </Drawer>
    </nav>
  );
};

export default GuestsDrawer;
