import React, { useState, ChangeEvent, FormEvent } from "react";
import BookingOverview from "./bookingOverview";
import ContinueContainer from "./FooterBookingFlow/ContinueContainer";

type GuestInfoType = {
  id: string;
  setDrawerComponent: (drawerComponent: string) => void;
};

const GuestInfo: React.FC<GuestInfoType> = (props: GuestInfoType) => {
  const { id, setDrawerComponent } = props;
  // All of the state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telefon, setTelefon] = useState("");

  // All of my own functions
  function handleNameChange(event: ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  function handleEmailChange(event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  function handleTelefonChange(event: ChangeEvent<HTMLInputElement>) {
    setTelefon(event.target.value);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("handle submit");
    const data = {
      name,
      email,
      telefon,
    };

    setDrawerComponent("payment");

    console.log(data);

    /* const response = await postBusinessCard(data);

    if (response.ok) {
      console.log("everything went ok.");
      console.log(response);
      const body = await response.json();
      console.log(body);
      handleCancel();
    } */
  }

  return (
    <div key={id}>
      <div className="guestInfoWrapper">
        <div className="guestInfoContainer">
          <h1>Gæsteinformation</h1>
          <form id="guestForm" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Fulde navn" value={name} onChange={handleNameChange} />
            <input type="email" name="email" placeholder="Email" value={email} onChange={handleEmailChange} />
            <input type="tel" name="telefon" placeholder="Telefon" value={telefon} onChange={handleTelefonChange} />
            {/* <button onClick={handleCancel}>Cancel</button> */}
            {/* <input type="submit" value={"Forsæt"} /> */}
          </form>
        </div>
        <BookingOverview />
        <ContinueContainer id={id} setDrawerComponent={setDrawerComponent} nextPage="payment" />
      </div>
    </div>
  );
};

export default GuestInfo;
