import React, { useState } from "react";
import Drawer from "react-modern-drawer";
import SecondDrawer from "./SecondDrawer";

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
    <nav>
      <h1>Business Cards</h1>
      <button onClick={handleClick}>Create new</button>
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
    </nav>
  );
};

export default Header;
