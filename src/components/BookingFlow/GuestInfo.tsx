import React, { useState, ChangeEvent, FormEvent, useContext } from "react";
import BookingOverview from "./bookingOverview";
import ContinueContainer from "./FooterBookingFlow/ContinueContainer";
import BookingContext from "@/hooks/useContext/BookingContext";

type GuestInfoType = {
  id: string;
  setDrawerComponent: (drawerComponent: string) => void;
};



const GuestInfo: React.FC<GuestInfoType> = (props: GuestInfoType) => {
  const { id, setDrawerComponent } = props;

  // // All of my own functions
  // function handleNameChange(event: ChangeEvent<HTMLInputElement>) {
  //   setName(event.target.value);
  // }

  // function handleEmailChange(event: ChangeEvent<HTMLInputElement>) {
  //   setEmail(event.target.value);
  // }

  // function handleTelefonChange(event: ChangeEvent<HTMLInputElement>) {
  //   setTelefon(event.target.value);
  // }
  const {guestInfo, setGuestsInfo} = useContext(BookingContext);
 
  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setGuestsInfo({
      ...guestInfo,
      [event.target.name]: event.target.value,
    });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("guestInfo", guestInfo);
    console.log("handle submit");
  
    setDrawerComponent("payment");
  
    
  
    /* const response = await postBusinessCard(formValues);
  
    if (response.ok) {
      console.log("everything went ok.");
      console.log(response);
      const body = await response.json();
      console.log(body);
      handleCancel();
    } */
  }

  console.log("This is what ??", guestInfo)

  return (
    <div key={id}>
      <div className="guestInfoWrapper">
        <div className="guestInfoContainer">
          <h1>Gæsteinformation</h1>
          <form id="guestForm" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Fulde navn" value={ guestInfo.name} onChange={handleInputChange} />
          <input type="email" name="email" placeholder="Email" value={ guestInfo.email} onChange={handleInputChange} />
          <input type="tel" name="telefon" placeholder="Telefon" value={  guestInfo.telefon} onChange={handleInputChange} />
          {/* <button onClick={handleCancel}>Cancel</button> */}
          {/* <input type="submit" value={"Forsæt"} /> */}
        </form>
        </div>
        <BookingOverview id={id} setDrawerComponent={setDrawerComponent} nextPage="payment" />
      </div>
    </div> 
  );
};

export default GuestInfo;
