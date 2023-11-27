import React, { useState } from "react";
import Drawer from "react-modern-drawer";
import SecondDrawer from "./SecondDrawer";
import Navigation from "./Navigation";

const Header: React.FC = () => {
  // All of the state
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSecondDrawer, setIsOpenSecondDrawer] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    job: "",
    website: "",
  });
  function handleClick() {
    console.log("Hello from create new button", isOpen);
    setIsOpen(true);
  }

  function handleClose() {
    setIsOpen(false);
  }

  function handleFormChange(event: { target: { value: string; name: string } }) {
    const { value, name } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  return (
    <header className="grid-edge fixed top-0 flex h-[84px] w-full items-center justify-center transition delay-75 duration-200 bg-transparent pl-14 pr-6 text-black">
      <div className="grid-comwell w-full">
        <div className="col-span-full grid grid-cols-2 items-center lg:grid-cols-3">
          <div className="w-max relative z-[1] flex">
            <h1 className="mr-4">Comwell hotels</h1>
            <button onClick={handleClick}>Open Drawer</button>
            <Drawer open={isOpen} onClose={handleClose} direction="right" size={550}>
              WOOOOOOOOW
              {/* <form>
          <input
            type="text"
            name="name"
            placeholder="name"
            value={formData.name}
            onChange={handleFormChange}
          />
          <input
            type="text"
            name="job"
            placeholder="job title"
            value={formData.job}
            onChange={handleFormChange}
          />
          <input
            type="text"
            name="website"
            placeholder="website"
            value={formData.website}
            onChange={handleFormChange}
          />
        </form> */}
              {/* This is a test to see if a second drawer would work on top of the first drawer */}
              <SecondDrawer setIsOpenSecondDrawer={setIsOpenSecondDrawer} isOpenSecondDrawer={isOpenSecondDrawer}></SecondDrawer>
            </Drawer>
          </div>

          <div>{/* Navigation Booking on scrolling */}</div>

          <div>
            <Navigation />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
