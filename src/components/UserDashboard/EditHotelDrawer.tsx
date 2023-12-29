import React, { useState, ChangeEvent, FormEvent } from "react";
import Drawer from "react-modern-drawer";

interface Props {
  isOpenEditHotelDrawer: boolean;
  setIsOpenEditHotelDrawer: (isOpenEditHotelDrawer: boolean) => void;
  id: string;
  hotelName: string;
  hotelCity: string;
  hotelAddress: string;
  hotelImage: string;
}

const EditHotelDrawer: React.FC<Props> = (props: Props) => {
  const { isOpenEditHotelDrawer, setIsOpenEditHotelDrawer, id, hotelName, hotelCity, hotelAddress, hotelImage } = props;
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
    setIsOpenEditHotelDrawer(false);
  }

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log("handle submit");
    const data = {
      image: image ? image : hotelImage,
      name: name ? name : hotelName,
      city: city ? city : hotelCity,
      address: address ? address : hotelAddress,
    };

    console.log(data);

    try {
        // Make a PUT request to update the hotel details
        const response = await fetch("http://localhost:3006/" + "hotel/" + id, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
  
        if (response.ok) {
          console.log("Hotel details updated successfully");
          //location.reload();
        } else {
          console.error("Failed to update hotel details");
        }
      } catch (error) {
        console.error("Error updating hotel details:", error);
      }
  }


  return (
    <nav>
      <Drawer
        className="hotelListDrawer font-semibold h-full overflow-y-scroll"
        open={isOpenEditHotelDrawer}
        onClose={handleClose}
        direction="right"
        size={390}
      >
        <div className="header">
          <h1>Edit hotel</h1>
          <button className="closeButton" onClick={handleClose} data-_id={id}>
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
          <p>Image:</p>
          <div className="relative overflow-hidden z-0">
                  <div className="relative block h-44 w-56 overflow-hidden bg-gray-200 inset-0">
                    <picture>
                    <img src={hotelImage} className="transition-transform group-hover:scale-[1.05] ease-in duration-150 h-full w-full object-cover lazyautosizes lazyloaded" alt="imageHotel" width="38" height="24" data-sizes="auto" loading="lazy" decoding="async" sizes="269px"/>
                    </picture>
                  </div>
                </div>
          <p>Name: <span>{hotelName}</span></p>
          <p>City: <span>{hotelAddress}</span></p>
          <p>Address: <span>{hotelAddress}</span></p>
        <div className="editHotel font-semibold mt-6">
        <form id="editHotelForm">
          <input type="text" name="image" placeholder="Image link" value={image} onChange={handleImageChange} />
          <input type="text" name="name" placeholder="Name" value={name} onChange={handleNameChange} />
          <input type="text" name="city" placeholder="City" value={city} onChange={handleCityChange} />
          <input type="text" name="address" placeholder="Address" value={address} onChange={handleAddressChange} />
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
