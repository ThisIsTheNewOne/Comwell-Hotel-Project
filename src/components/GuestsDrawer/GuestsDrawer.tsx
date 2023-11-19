import React, { useState } from "react";
import Drawer from "react-modern-drawer";

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

  return (
    <nav>
      <h1 className="text-heading-lg block py-4">Choose rooms</h1>
      <button onClick={handleClick}>Select rooms</button>
      <Drawer className="guestsDrawer" open={isOpenGuestsDrawer} onClose={handleClose} direction="right" size={390}>
        <div className="header">
          <h1>Gæster & Værelser</h1>
          <button className="closeButton">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" className="w-[16px] h-[16px]">
              <path stroke="currentColor" stroke-width="1.5" d="M2.62 13.38 12.99 3.01M13.38 13.38 3.01 3.01"></path>
            </svg>
          </button>
        </div>
        <div className="guestsSelection">
          <h2>VÆRELSE</h2>
          <div className="guestSelectionButtons">
            <div>Voksne</div>
            <div className="guestsButtons">
              <div className="plusMinusBtn">
                <button onClick={minus} disabled={amount === 0} className="minusBtn">
                  -
                </button>
                <p>{amount}</p>
                <button onClick={plus} className="plusBtn">
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </Drawer>
    </nav>
  );
};

export default GuestsDrawer;
