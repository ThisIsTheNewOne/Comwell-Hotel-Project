import React, { useContext,useState } from "react";
import Drawer from "react-modern-drawer";
import BookingInputSingle from "../BookingWidget/BookingInputSingle";
import GuestSelectionButton from "./GuestSelectionButton";
import BookingContext from "@/hooks/useContext/BookingContext";

interface Props {
  isOpenGuestsDrawer: boolean;
  setIsOpenGuestsDrawer: (isOpenGuestsDrawer: boolean) => void;
}

const GuestsDrawer: React.FC<Props> = (props: Props) => {
  const { isOpenGuestsDrawer, setIsOpenGuestsDrawer } = props;
  const [totalGuests, setTotalGuests] = useState(1);

  const { roomList, setRoomList, roomsNumber, setRoomsNumber } = useContext(BookingContext);

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
    // Get the last room
    const lastRoom = roomList[roomList.length - 1];

    // Extract the room number from the label of the last room
    const lastRoomNumber = parseInt(lastRoom.label.split(" ")[1]);

    // Create a new room number by incrementing the last room number by 1
    const newRoomNumber = lastRoomNumber + 1;

    const newRoom = {
      label: `Room ${newRoomNumber}`,
      guests: [
        { label: "Adults", amount: 1 },
        { label: "Children", amount: 0 },
        { label: "Infants()", amount: 0 },
      ],
    };

    setRoomList([...roomList, newRoom]);
    setRoomsNumber(roomsNumber + 1)
    setTotalGuests(totalGuests + 1)
  };

  const removeRoom = (roomLabel: string) => {
    // Filter out the room to be removed
    const newRoomList = roomList.filter((room) => room.label !== roomLabel);

    // Renumber all rooms
    const renumberedRooms = newRoomList.map((room, index) => {
      return {
        ...room,
        label: `Room ${index + 1}`,
      };
    });

    // Update the room list
    setRoomList(renumberedRooms);
    setRoomsNumber(roomsNumber - 1)
    setTotalGuests(totalGuests - 1)
  };

 const [disableSelectionButtons, setDisableSelectionButtons] = useState(false)

  const checkNumberGuestsInARoom = (selectedRoom: string) => {
    const totalGuestsInOneRoom = roomList.map((room) => {
      return {
        roomNumber: room.label,
        totalGuests: room.guests.reduce((acc, guest) => {
          return acc + guest.amount;
        }, 0),
      };
    });

    const totalGuestsInOneRoomFiltered = totalGuestsInOneRoom.filter((room) => room.roomNumber === selectedRoom);

    console.log("This is the total guests in one room",totalGuestsInOneRoomFiltered[0])
    if(totalGuestsInOneRoomFiltered[0].totalGuests > 3) {
      setDisableSelectionButtons(true)
    } else {
      setDisableSelectionButtons(false)
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
          {roomList.map((room, index) => (
            <div key={index}>
              <h2>{room.label}</h2>
              <div onClick={() => removeRoom(room.label)}>Remove room</div>
              <div className="guestButtonsWrapper">
                {room.guests.map((guest, index) => (
                  <GuestSelectionButton
                    key={index}
                    room={room.label}
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
                    checkNumberGuestsInARoom= {checkNumberGuestsInARoom} 
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
