import { url } from "inspector";
import React, { useState, ChangeEvent, FormEvent } from "react";
import Drawer from "react-modern-drawer";

interface Props {
  isOpenAddHotelDrawer: boolean;
  setIsOpenAddHotelDrawer: (isOpenAddHotelDrawer: boolean) => void;
}

const AddHotelDrawer: React.FC<Props> = (props: Props) => {
  const { isOpenAddHotelDrawer, setIsOpenAddHotelDrawer } = props;
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [image, setImage] = useState("");
  const [address, setAddress] = useState("");

  // All of my own functions
  function handleNameChange(event: ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  function handleCityChange(event: ChangeEvent<HTMLInputElement>) {
    setCity(event.target.value);
  }

  function handleImageChange(event: ChangeEvent<HTMLInputElement>) {
    setImage(event.target.value);
  }

  function handleAddressChange(event: ChangeEvent<HTMLInputElement>) {
    setAddress(event.target.value);
  }

  function handleClose() {
    setIsOpenAddHotelDrawer(false);
  }

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log("handle submit");
    const data = {
        image,
        name,
        city,
        address,
      };

    console.log(data);

    try {
        const response = await fetch("http://localhost:3006/" + "hotel", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
        console.log(response);

        window.location.replace("./hotels");
    
       
      } catch (error) {
        console.log("error happened: ", error);
      }
  }


  return (
    <nav>
      <Drawer
        className="hotelListDrawer font-semibold"
        open={isOpenAddHotelDrawer}
        onClose={handleClose}
        direction="right"
        size={390}
      >
        <div className="header">
          <h1>Add a new hotel</h1>
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
        <div className="editHotel font-semibold mt-6">
        <form id="addHotelForm">
        <input type="text" name="image" placeholder="Image link" value={image} onChange={handleImageChange} />
          <input type="text" name="name" placeholder="Name" value={name} onChange={handleNameChange} />
          <input type="text" name="city" placeholder="City" value={city} onChange={handleCityChange} />
          <input type="text" name="address" placeholder="Address" value={address} onChange={handleAddressChange} />
        </form>
      </div>
      <div className="flex justify-center mt-6">
            <button onClick={handleSubmit} className="body w-full rounded-full font-semibold leading-none md:w-auto md:px-10 md:transition max-md:transition-opacity h-[52px] opacity-100 bg-theme text-white hover:lg:bg-theme-80">
              <span className="flex items-center gap-x-[7px] justify-center">
                <span>Add</span>
              </span>
            </button>
          </div>
      </Drawer>
    </nav>
  );
};

export default AddHotelDrawer;
