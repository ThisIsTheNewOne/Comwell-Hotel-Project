import React, { useState, ChangeEvent, FormEvent } from "react";
import Drawer from "react-modern-drawer";

interface Props {
  isOpenEditHotelDrawer: boolean;
  setIsOpenEditHotelDrawer: (isOpenEditHotelDrawer: boolean) => void;
}

const EditHotelDrawer: React.FC<Props> = (props: Props) => {
  const { isOpenEditHotelDrawer, setIsOpenEditHotelDrawer } = props;
  const [name, setName] = useState("");
  const [city, setCity] = useState("");

  // All of my own functions
  function handleNameChange(event: ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }
  function handleCityChange(event: ChangeEvent<HTMLInputElement>) {
    setCity(event.target.value);
  }

  function handleClose() {
    setIsOpenEditHotelDrawer(false);
  }

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log("handle submit");
    const data = {
      name,
      city,
    };

    console.log(data);
  }


  return (
    <nav>
      <Drawer
        className="hotelListDrawer font-semibold"
        open={isOpenEditHotelDrawer}
        onClose={handleClose}
        direction="right"
        size={390}
      >
        <div className="header">
          <h1>Edit hotel</h1>
          <button className="closeButton" onClick={handleClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 16"
              className="w-[16px] h-[16px]"
            >
              <path
                stroke="currentColor"
                strokeWidth="1.5"
                d="M2.62 13.38 12.99 3.01M13.38 13.38 3.01 3.01"
              ></path>
            </svg>
          </button>
          </div>
          <h2 className="text-xl mt-2">Current info</h2>
          <p>Name: <span>Bygholm Park</span></p>
          <p>City: <span>Horsens</span></p>
        <div className="editHotel font-semibold mt-6">
        <form id="editHotelForm">
          <input type="text" name="name" placeholder="Name" value={name} onChange={handleNameChange} />
          <input type="text" name="city" placeholder="City" value={city} onChange={handleCityChange} />
        </form>
      </div>
      <div className="flex justify-center mt-6">
            <button onClick={handleSubmit} className="body w-full rounded-full font-semibold leading-none md:w-auto md:px-10 md:transition max-md:transition-opacity h-[52px] opacity-100 bg-theme text-white hover:lg:bg-theme-80">
              <span className="flex items-center gap-x-[7px] justify-center">
                <span>Edit</span>
              </span>
            </button>
          </div>
      </Drawer>
    </nav>
  );
};

export default EditHotelDrawer;
