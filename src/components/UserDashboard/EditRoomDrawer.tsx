import React, { useState, ChangeEvent, FormEvent } from "react";
import Drawer from "react-modern-drawer";

interface Props {
  isOpenEditRoomDrawer: boolean;
  setIsOpenEditRoomDrawer: (isOpenEditRoomDrawer: boolean) => void;
  hotelId: string;
  roomAdultGuests: number;
  roomChildGuests: number;
  roomInfantGuests: number;
  roomID: string;
  roomImage: string;
  roomName: string;
  roomDescription: string;
  roomPrice: number;
}

const EditRoomDrawer: React.FC<Props> = (props: Props) => {
  const { isOpenEditRoomDrawer, setIsOpenEditRoomDrawer, hotelId, roomAdultGuests, roomChildGuests, roomInfantGuests, roomID, roomImage, roomDescription, roomName, roomPrice } = props;
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [adultGuests, setAdultGuests] = useState("");
  const [childGuests, setChildGuests] = useState("");
  const [infantGuests, setInfantGuests] = useState("");
  const [price, setPrice] = useState("");

  // All of my own functions
  function handleNameChange(event: ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  function handleImageChange(event: ChangeEvent<HTMLInputElement>) {
    setImage(event.target.value);
  }

  function handleDescriptionChange(event: ChangeEvent<HTMLInputElement>) {
    setDescription(event.target.value);
  }

  function handleAdultGuestsChange(event: ChangeEvent<HTMLInputElement>) {
    setAdultGuests(event.target.value);
  }

  function handleChildGuestsChange(event: ChangeEvent<HTMLInputElement>) {
    setChildGuests(event.target.value);
  }

  function handleInfanftGuestsChange(event: ChangeEvent<HTMLInputElement>) {
    setInfantGuests(event.target.value);
  }

  function handlePriceChange(event: ChangeEvent<HTMLInputElement>) {
    setPrice(event.target.value);
  }

  function handleClose() {
    setIsOpenEditRoomDrawer(false);
  }

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log("handle submit");
    const data = {
      hotelId: hotelId,    
      name: name ? name : roomName,
      image: image ? image : roomImage,
      description: description ? description : roomDescription,
      adultGuests: adultGuests ? adultGuests : roomAdultGuests,
      childGuests: childGuests ? childGuests : roomChildGuests,
      infantGuests: infantGuests ? infantGuests : roomInfantGuests,
      price: price ? price : roomPrice
    };

    console.log(data);

    try {
        // Make a PUT request to update the room details
        const response = await fetch(process.env.NEXT_PUBLIC_BACKEND + "room/" + roomID, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: 'Bearer ' + localStorage.getItem("token")
          },
          body: JSON.stringify(data),
        });
  
        if (response.ok) {
          console.log("Room details updated successfully");
          location.reload();
        } else {
          console.error("Failed to update room details");
        }
      } catch (error) {
        console.error("Error updating room details:", error);
      }

  }


  return (
    <nav>
      <Drawer
        className="hotelListDrawer font-semibold overflow-y-scroll"
        open={isOpenEditRoomDrawer}
        onClose={handleClose}
        direction="right"
        size={390}
      >
        <div className="header">
          <h1>Edit room</h1>
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
          <p>Image: </p>
          <div className="relative overflow-hidden z-0">
                  <div className="relative block h-44 w-56 overflow-hidden bg-gray-200 inset-0">
                    <picture>
                    <img src={roomImage} className="transition-transform group-hover:scale-[1.05] ease-in duration-150 h-full w-full object-cover lazyautosizes lazyloaded" alt="imageHotel" width="38" height="24" data-sizes="auto" loading="lazy" decoding="async" sizes="269px"/>
                    </picture>
                  </div>
                </div>
          <p>Name: <span>{roomName}</span></p>
          <p>Description: <span>{roomDescription}</span></p>
          <p>Adult guests: {roomAdultGuests}</p>
      <p>Child guests: {roomChildGuests}</p>
      <p>Infant guests:{roomInfantGuests}</p>
          <p>Price: <span>{roomPrice}</span>kr</p>
        <div className="editHotel font-semibold mt-6">
        <form id="editRoomForm">
          <input type="text" name="image" placeholder="Image link" value={image} onChange={handleImageChange} />
          <input type="text" name="name" placeholder="Name" value={name} onChange={handleNameChange} />
          <input type="text" name="description" placeholder="Description" value={description} onChange={handleDescriptionChange} />
          <input type="number" name="adultGuests" placeholder="Adult guests" value={adultGuests} onChange={handleAdultGuestsChange} />
          <input type="number" name="childGuests" placeholder="Child guests" value={childGuests} onChange={handleChildGuestsChange} />
          <input type="number" name="infantGueests" placeholder="Infant guests" value={infantGuests} onChange={handleInfanftGuestsChange} />
          <input type="text" name="price" placeholder="Price" value={price} onChange={handlePriceChange} />
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

export default EditRoomDrawer;
