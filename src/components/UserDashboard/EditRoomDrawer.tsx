import React, { useState, ChangeEvent, FormEvent } from "react";
import Drawer from "react-modern-drawer";

interface Props {
  isOpenEditRoomDrawer: boolean;
  setIsOpenEditRoomDrawer: (isOpenEditRoomDrawer: boolean) => void;
}

const EditRoomDrawer: React.FC<Props> = (props: Props) => {
  const { isOpenEditRoomDrawer, setIsOpenEditRoomDrawer } = props;
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
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
      name,
      image,
      description,
      price
    };

    console.log(data);
  }


  return (
    <nav>
      <Drawer
        className="hotelListDrawer font-semibold"
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
          <p>Image: <span>link</span></p>
          <p>Name: <span>Room 1</span></p>
          <p>Description: <span>Spacious double room with a view</span></p>
          <p>Price: <span>150kr</span></p>
        <div className="editHotel font-semibold mt-6">
        <form id="editRoomForm">
          <input type="text" name="image" placeholder="Image link" value={image} onChange={handleImageChange} />
          <input type="text" name="name" placeholder="Name" value={name} onChange={handleNameChange} />
          <input type="text" name="description" placeholder="Description" value={description} onChange={handleDescriptionChange} />
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
