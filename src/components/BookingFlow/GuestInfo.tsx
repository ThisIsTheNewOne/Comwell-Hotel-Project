import React, { useState } from "react";

const GuestInfo: React.FC = () => {
  // All of the state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telefon, setTelefon] = useState("");

  // All of my own functions
  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handleTelefonChange(event) {
    setTelefon(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    console.log("handle submit");
    const data = {
      name,
      email,
      telefon,
    };

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
    <>
      <div className="guestInfoWrapper">
        <div className="guestInfoContainer">
          <h1>Gæsteinformation</h1>
          <form>
            <input type="text" name="name" placeholder="Fulde navn" value={name} onChange={handleNameChange} />
            <input type="email" name="email" placeholder="Email" value={email} onChange={handleEmailChange} />
            <input type="tel" name="telefon" placeholder="Telefon" value={telefon} onChange={handleTelefonChange} />
            {/* <button onClick={handleCancel}>Cancel</button> */}
            {/* <input type="submit" value={"Forsæt"} /> */}
          </form>
        </div>
        <div className="overviewContainer">
          <h1>Oversigt</h1>
          <div className="flex flex-col gap-y-4 mt-8">
            <div className="w-full flex justify-between items-center">
              <span className="label opacity-[0.65] uppercase text-xs">Værelse 1</span>
              <button type="button" className="underline text-theme text-sm font-[500]">
                Rediger
              </button>
            </div>
            <div className="grid grid-cols-[56px,auto] w-full gap-x-2">
              <div className="module-richMedia relative block w-full overflow-hidden bg-gray-200 !h-[42px] rounded-[5px]">
                <img
                  className="transition-transform group-hover:scale-[1.05] ease-in duration-150 h-full w-full object-cover lazyautosizes ls-is-cached lazyloaded"
                  src="https://raw.githubusercontent.com/ThisIsTheNewOne/Comwell-Hotel-Project/master/public/images/hotels/borupgaard/suite.webp"
                  alt="suite"
                />
              </div>
              <div className="flex justify-between">
                <div className="flex flex-col pr-4">
                  <span className="text-lg">Suite</span>
                  <span className="package-text opacity-[0.65]">Overnatning med morgenbuffet - Spar 12% - Kan ikke refunderes</span>
                </div>
                <div className="overflow-visible">
                  <div className="whitespace-nowrap price !heading-xs">
                    <span>15.273,00</span>
                    <span>kr.</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex w-full justify-between items-center">
                <span>Babyseng</span>
                <div className="whitespace-nowrap price !heading-mini">
                  <span>900</span>
                  <span>kr.</span>
                </div>
              </div>
            </div>
          </div>
          <footer className="bottom-0 before:absolute before:top-[-41px] before:left-0 before:h-[40px] before:w-full pb-8 mt-12">
            <div className="py-5 border-y border-gray-200 flex justify-between items-center w-full">
              <div className="flex justify-between items-center w-full">
                <span className="text-2xl">Total</span>
                <div className="whitespace-nowrap price text-2xl">
                  <span>16.173,00</span>
                  <span>kr.</span>
                </div>
              </div>
            </div>
          </footer>
        </div>
        <div className="fixed bottom-0 left-0 w-full transition-all duration-[400ms] z-[1]">
          <div className="bottom-bar relative border-t border-gray-200 bg-white p-4 lg:py-6 before:absolute before:top-[-41px] before:left-0 before:h-[40px] before:w-full before:pointer-events-none">
            <div className="flex justify-between items-center gap-x-4">
              <div className="relative max-lg:transition-opacity md:ml-auto opacity-100 max-md:w-full">
                <button onClick={handleSubmit} className="body w-full rounded-full font-semibold leading-none md:w-auto md:px-10 md:transition max-md:transition-opacity h-[52px] opacity-100 bg-theme text-white hover:lg:bg-theme-80">
                  <span className="flex items-center gap-x-[7px] justify-center">Fortsæt</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GuestInfo;
