import BookingContext from "@/hooks/useContext/BookingContext";
import { RoomList } from "@/types/Booking";
import React, { useContext, useState } from "react";

interface GuestSelectionButtonProps {
  room: string;
  guestType: string;
  ageGap: string;
  amount: number;
  setTotalGuests: (totalGuests: number) => void;
  totalGuests: number;
  checkNumberGuestsInARoom: (type: string) => void;
  disableSelectionButtons: boolean;
}

interface Guest {
  guestType: string;
  amount: number;
}

type GuestType = {
  label: string;
  amount: number;
};

const GuestSelectionButton: React.FC<GuestSelectionButtonProps> = (
  props: GuestSelectionButtonProps
) => {
  const { room, guestType, ageGap, amount, setTotalGuests, totalGuests, checkNumberGuestsInARoom, disableSelectionButtons } =
    props;
  const { roomList, setRoomList } = useContext(BookingContext);

  const currentRoomNumber = parseInt(room.split(" ")[1]);
  // Find the room that we are currently in
  const currentRoom = roomList[currentRoomNumber - 1];

  //adding guests functions
  function minus() {
    if (amount <= 0) return;

    const newAmount = amount - 1;
    // Create a new guest object with the new amount
    const newGuest = {
      label: guestType,
      amount: newAmount,
    };

    const newRoomList = makeNewRoomList(newGuest);
    checkNumberGuests("minus");
    checkNumberGuestsInARoom(room)
    setRoomList(newRoomList);
    
  }

  function plus() {
    const newAmount = amount + 1;
    // Create a new guest object with the new amount
    const newGuest = {
      label: guestType,
      amount: newAmount,
    };

    const newRoomList = makeNewRoomList(newGuest);
    checkNumberGuests("plus");
    checkNumberGuestsInARoom(room)
    setRoomList(newRoomList);
  }

  const makeNewRoomList = (newGuest: GuestType): RoomList[] => {
    const newRoomList = roomList.map((room) => {
      if (room.label === currentRoom.label) {
        return {
          ...room,
          guests: room.guests.map((guest) => {
            if (guest.label === guestType) {
              return newGuest;
            } else {
              return guest;
            }
          }),
        };
      } else {
        return room;
      }
    });
    return newRoomList;
  };

  const checkNumberGuests = ( type: string) => {
    if (type === "minus") {
      setTotalGuests(totalGuests - 1);
    } else {
      setTotalGuests(totalGuests + 1);
    }
  };

  return (
    <div className="guestSelectionButtons">
      <div className="guestTypeWrapper">
        <div className="guestType">{guestType}</div>
        <span className="ageGap font-regular">{ageGap}</span>
      </div>
      <div className="guestsButtons">
        <div className="plusMinusBtn">
      <button onClick={minus} disabled={amount === 0} className="minusBtn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="2"
              fill="none"
              className="w-[16px]"
            >
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M15.556 1.667H.445V.333h15.11v1.334Z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <p>{amount}</p>
          <button onClick={plus} disabled={ disableSelectionButtons} className="plusBtn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="w-5"
            >
              <path
                stroke="currentColor"
                stroke-width="1.5"
                d="M12 3.5v17M3.5 12h17"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GuestSelectionButton;
