import React, { useState, ChangeEvent, FormEvent } from "react";
import BookingOverview from "./bookingOverview";

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
            <input
              type="text"
              name="name"
              placeholder="Fulde navn"
              value={name}
              onChange={handleNameChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />
            <input
              type="tel"
              name="telefon"
              placeholder="Telefon"
              value={telefon}
              onChange={handleTelefonChange}
            />
            {/* <button onClick={handleCancel}>Cancel</button> */}
            {/* <input type="submit" value={"Forsæt"} /> */}
          </form>
        </div>
        <BookingOverview />
        <div className="fixed bottom-0 left-0 w-full transition-all duration-[400ms] z-[1]">
          <div className="bottom-bar relative border-t border-gray-200 bg-white p-4 lg:py-6 before:absolute before:top-[-41px] before:left-0 before:h-[40px] before:w-full before:pointer-events-none">
            <div className="flex justify-between items-center gap-x-4">
              <div className="relative max-lg:transition-opacity md:ml-auto opacity-100 max-md:w-full">
                <button
                  type="submit"
                  form="guestForm"
                  className="body w-full rounded-full font-semibold leading-none md:w-auto md:px-10 md:transition max-md:transition-opacity h-[52px] opacity-100 bg-theme text-white hover:lg:bg-theme-80"
                >
                  <span className="flex items-center gap-x-[7px] justify-center">
                    Fortsæt
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuestInfo;
