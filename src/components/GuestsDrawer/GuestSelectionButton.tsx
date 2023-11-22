import React, { useState } from "react";

interface GuestSelectionButtonProps {
  guestType: string;
  ageGap: string;
}

const GuestSelectionButton: React.FC<GuestSelectionButtonProps> = ({ guestType, ageGap }) => {
  // All of the state
  const [amount, setAmount] = useState(0);

  //adding guests functions
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
    <div className="guestSelectionButtons">
      <div className="guestTypeWrapper">
        <div className="guestType">{guestType}</div>
        <span className="ageGap">{ageGap}</span>
      </div>
      <div className="guestsButtons">
        <div className="plusMinusBtn">
          <button onClick={minus} disabled={amount === 0} className="minusBtn">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="2" fill="none" className="w-[16px]">
              <path fill="currentColor" fill-rule="evenodd" d="M15.556 1.667H.445V.333h15.11v1.334Z" clip-rule="evenodd"></path>
            </svg>
          </button>
          <p>{amount}</p>
          <button onClick={plus} disabled={amount === 10} className="plusBtn">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-5">
              <path stroke="currentColor" stroke-width="1.5" d="M12 3.5v17M3.5 12h17"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GuestSelectionButton;
