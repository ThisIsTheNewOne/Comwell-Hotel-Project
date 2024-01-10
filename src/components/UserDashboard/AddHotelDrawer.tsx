import { fynCities, jyllandCities, sjællandCities } from "@/data/hotelRegions";
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
  const [showErrors, setShowErrors] = useState(false);

  // All of my own functions
  function handleNameChange(event: ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  function handleCityChange(event: ChangeEvent<HTMLSelectElement>) {
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

  const allCities = [
    ...sjællandCities.map(({ city }) => city),
    ...fynCities.map(({ city }) => city),
    ...jyllandCities.map(({ city }) => city),
  ].sort(); 

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log("handle submit");

    setShowErrors(true);

    // Check if all required fields are filled
    if (!image || !name || !city || !address) {
      console.error("Please fill in all required fields.");
      return; 
    }

    const data = {
      image,
      name,
      city,
      address,
    };

    console.log(data);

    try {
      const response = await fetch(process.env.NEXT_PUBLIC_BACKEND + "hotel", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: 'Bearer ' + localStorage.getItem("token")
        },
        
        body: JSON.stringify(data),
      });
      console.log(response);

      if (response.ok) {
        console.log("Hotel added successfully");
        location.reload();
      } else {
        console.error("Failed to add hoteæl");
      }
    } catch (error) {
      console.error("Error adding hotel:", error);
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
            <input type="text" name="image" placeholder="Image link" value={image} onChange={handleImageChange} required/>
            {showErrors && image === "" && <span className="errorMessage text-red-500 text-xs mb-3">This field is required</span>}
            <input type="text" name="name" placeholder="Name" value={name} onChange={handleNameChange} required/>
            {showErrors && name === "" && <span className="errorMessage text-red-500 text-xs mb-3">This field is required</span>}
            <div className="select flex gap-4">
              <label htmlFor="city">City:</label>
              <select value={city} onChange={handleCityChange} required>
                <option value="">Select a city</option>
                {allCities.map((cityName, index) => (
                  <option key={index} value={cityName}>
                    {cityName}
                  </option>
                ))}
              </select>
            </div>
            {showErrors && city === "" && <span className="errorMessage text-red-500 text-xs mb-3">This field is required</span>}
            <input type="text" name="address" placeholder="Address" value={address} onChange={handleAddressChange} required/>
            {showErrors && address === "" && <span className="errorMessage text-red-500 text-xs mb-3">This field is required</span>}
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
