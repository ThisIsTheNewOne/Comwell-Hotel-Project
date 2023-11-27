import React, { useContext, useState } from "react";
import Drawer from "react-modern-drawer";
import BookingInputSingle from "../BookingWidget/BookingInputSingle";
import GuestSelectionButton from "./GuestSelectionButton";
import BookingContext from "@/hooks/useContext/BookingContext";

interface Props {
  isOpenGuestsDrawer: boolean;
  setIsOpenGuestsDrawer: (isOpenGuestsDrawer: boolean) => void;
}

type GuestList = {
  label: string;
  amount: number;
}[]

const GuestsDrawer: React.FC<Props> = (props: Props) => {
  const { isOpenGuestsDrawer, setIsOpenGuestsDrawer } = props;
  const {
    roomList,
    setRoomList,
    roomsNumber,
    setRoomsNumber,
    totalGuests,
    setTotalGuests,
    guestList,
    setGuestList
  } = useContext(BookingContext);

  function handleClick() {
    console.log("Guests drawer open");
    setIsOpenGuestsDrawer(true);
  }

  function handleClose() {
    setIsOpenGuestsDrawer(false);
  }

  // const [amount, setAmount] = useState(0);

  //adding to cart functions
  // function minus() {
  //   if (amount <= 0) return;

  //   const newAmount = amount - 1;
  //   setAmount(newAmount);
  // }

  // function plus() {
  //   const newAmount = amount + 1;
  //   setAmount(newAmount);
  // }

  const displayRoomsInput = {
    label: "Værelser",
    placeholder: `${roomsNumber} Værelse, ${totalGuests} Person`,
  };

  const createNewRoom = () => {
    const newRoom = [
      { label: "Adults", amount: 1 },
      { label: "Children", amount: 0 },
      { label: "Infants", amount: 0 },
    ]

    setGuestList([...guestList, newRoom]);
    setRoomsNumber(roomsNumber + 1);
    setTotalGuests(totalGuests + 1);
  };

  const removeRoom = (index: number) => {
    if (index > -1) {
      setGuestList(guestList.filter((_, i)=> i!==index));
      setRoomsNumber(roomsNumber - 1);
      setTotalGuests(totalGuests - 1);
    }
  };
  const [disableSelectionButtons, setDisableSelectionButtons] = useState(false);

  const checkNumberGuestsInARoom = (selectedRoom: number) => {
    const totalGuestsInOneRoom = guestList.map((room, index) => {
      return {
        roomNumber: index,
        totalGuests: room.reduce((acc, guest) => {
          return acc + guest.amount;
        }, 0),
      };
    });

    const totalGuestsInOneRoomFiltered = totalGuestsInOneRoom.filter(
      (room, index) => index === selectedRoom
    );

    console.log(
      "This is the total guests in one room",
      totalGuestsInOneRoomFiltered[0]
    );
    if (totalGuestsInOneRoomFiltered[0].totalGuests > 3) {
      setDisableSelectionButtons(true);
    } else {
      setDisableSelectionButtons(false);
    }

    return totalGuestsInOneRoomFiltered;
  };

  return (
    <nav>
      {/* <h1 className="text-heading-lg block py-4">Choose rooms</h1>
      <button onClick={handleClick}>Select rooms</button> */}
      <BookingInputSingle
        bookingInputProps={displayRoomsInput}
        handleClick={handleClick}
      />
      <Drawer
        className="guestsDrawer"
        open={isOpenGuestsDrawer}
        onClose={handleClose}
        direction="right"
        size={390}
      >
        <div className="header">
          <h1>Gæster & Værelser</h1>
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
        <div className="guestsSelection">
          {guestList.map((room, roomIndex) => (
            <div key={roomIndex}>
              <h2>{roomIndex}</h2>
              <div onClick={() => removeRoom(roomIndex)}>Remove room</div>
              <div className="guestButtonsWrapper">
                {room.map((guest, guestIndex) => (
                  <GuestSelectionButton
                    key={guestIndex}
                    room={roomIndex}
                    guestType={guest.label}
                    ageGap={
                      guest.label === "Adults"
                        ? ""
                        : guest.label === "Children"
                          ? "3 - 11 år"
                          : "0 - 2 år"
                    }
                    amount={guest.amount}
                    setTotalGuests={setTotalGuests}
                    totalGuests={totalGuests}
                    checkNumberGuestsInARoom={checkNumberGuestsInARoom}
                    disableSelectionButtons={disableSelectionButtons}
                  />
                ))}
              </div>
            </div>
          ))}

          {/* <h2>VÆRELSE</h2>
          <div className="guestButtonsWrapper">
            <GuestSelectionButton guestType="Voksne" ageGap="" />
            <GuestSelectionButton guestType="Børn" ageGap="3 - 11 år" />
            <GuestSelectionButton guestType="Småbørn" ageGap="0 - 2 år" />
          </div> */}
        </div>
        <div>
          <button onClick={createNewRoom}>Select room </button>
        </div>
        <div className="drawerSelectButton">
          <button onClick={handleClose}>Vælg</button>
        </div>
      </Drawer>
    </nav>
  );
};

export default GuestsDrawer;
