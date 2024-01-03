import React, { useState } from "react";
import Drawer from "react-modern-drawer";
import SecondDrawer from "./SecondDrawer";
import Navigation from "./Navigation";

const Header: React.FC = () => {
  // All of the state
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSecondDrawer, setIsOpenSecondDrawer] = useState(false);
  const [showLoginContainer, setShowLoginContainer] = useState(false);

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

  function handleLogoClick() {
    window.location.replace("./")
  }

  return (
   <header className={`grid-edge fixed top-0 flex h-[84px] w-full items-center justify-center transition delay-75 duration-200 ${showLoginContainer ? 'bg-white text-black' : 'bg-transparent text-white'} pl-14 pr-6 z-50`}>
  <div className="grid-comwell w-full">
    <div className="col-span-full flex items-center justify-between">
      <button onClick={handleLogoClick} className="w-32">
        <img src={`./icons/Comwell-logo.svg`} alt="logo" />
      </button>
    
      <div>
        <Navigation showLoginContainer={showLoginContainer} setShowLoginContainer={setShowLoginContainer} />
      </div>
    </div>
  </div>
</header>
  );
};

export default Header;
