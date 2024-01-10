import BookingContext from "@/hooks/useContext/BookingContext";
import React, { useState, ChangeEvent, FormEvent, useContext, useEffect } from "react";
import Drawer from "react-modern-drawer";
import ReactSelect from 'react-select';
import { components } from 'react-select';
import Image from 'next/image';

interface Props {
  isOpenAddRoomDrawer: boolean;
  setIsOpenAddRoomDrawer: (isOpenAddRoomDrawer: boolean) => void;
  hotelId: string
}

interface Features {
  _id: string,
  img: string,
  name: string,
  __v: number
}

const AddRoomDrawer: React.FC<Props> = (props: Props) => {
  const { isOpenAddRoomDrawer, setIsOpenAddRoomDrawer, hotelId } = props;
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [adultGuests, setAdultGuests] = useState("");
  const [childGuests, setChildGuests] = useState("");
  const [infantGuests, setInfantGuests] = useState("");
  const [price, setPrice] = useState("");
  const {getRoomFeatures} = useContext(BookingContext)
  const [showErrors, setShowErrors] = useState(false);
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const [selectedRoomFeatures, setSelectedRoomFeatures] = useState<{ img: string; name: string }[]>([]);
  const [options, setOptions] = useState([]  as Features[] );

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
    setIsOpenAddRoomDrawer(false);
  }


  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log("handle submit");
    setShowErrors(true);

    // Check if all required fields are filled
    if (!image || !name || !description || !adultGuests || !childGuests || !infantGuests || !price) {
      console.error("Please fill in all required fields.");
      return; 
    }

    const data = {
      hotelId: hotelId,  
      label: name,
      image,
      description,
      adultGuests,
      childGuests,
      infantGuests,
      price
    };

  
    console.log(data);

    let roomId = "";

    try {
        const response = await fetch(process.env.NEXT_PUBLIC_BACKEND + "room", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: 'Bearer ' + localStorage.getItem("token")
          },
          
          body: JSON.stringify(data),
        });
        console.log(response);

        if (response.ok) {
          console.log("Room created updated successfully", response);
          const responseData = await response.json();
          roomId = responseData._id;
          console.log("Room ID:", responseData, roomId);
          
        } else {
          console.error("Failed to create room");
        }
      } catch (error) {
        console.error("Error creating room:", error);
      }


  

     try {
      const response = await fetch("http://localhost:3006/" + "room/" + roomId + "/add-features", {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
         Authorization: 'Bearer ' + localStorage.getItem("token")
       },
       
       body: JSON.stringify(selectedRoomFeatures),
      });
      
      console.log(response);

      if(response.ok){
        location.reload();
      }

     } catch (error) {

      
     }
 
  
  }


  // const [featuresLoaded, setFeaturesLoaded] = useState(false);

 

  useEffect(() => {
    const fetchRoomFeatures = async () => {
      try {
        const features = await getRoomFeatures() as unknown as Features[];

        if (features && features.length > 0) {
          setOptions(features);
          // setFeaturesLoaded(true);
        }
      } catch (error) {
        console.error("Error fetching room features:", error);
        // handle error appropriately
      }
    };

    fetchRoomFeatures();
  }, []);

  // const handleSelectChange = (e: any) => {
  //   setSelectedValue(e.target.value);
  // };

  const Option = (props: any) => {
    return (
      <components.Option {...props}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={props.data.img} alt={props.data.label} style={{ marginRight: '10px' }} />
        {props.data.label}
      </div>
    </components.Option>
    );
  };

  const SingleValue = (props: any) => {
    return (
      <components.SingleValue {...props}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={props.data.img} alt={props.data.label} style={{ marginRight: '10px' }} />
          {props.data.label}
        </div>
      </components.SingleValue>
    );
  };
  
  const MultiValue = (props: any) => {
    return (
      <components.MultiValue {...props}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={props.data.img} alt={props.data.label} style={{ marginRight: '10px' }} />
          {props.data.label}
        </div>
      </components.MultiValue>
    );
  };

  const formattedOptions = options.map(option => ({
    value: option._id,
    label: option.name,
    img: option.img
  }));

  useEffect(()=> {
    console.log("This is what??", selectedRoomFeatures)
  },[selectedRoomFeatures])


  return (
    <nav>
      <Drawer
        className="hotelListDrawer font-semibold overflow-y-scroll"
        open={isOpenAddRoomDrawer}
        onClose={handleClose}
        direction="right"
        size={390}
      >
        <div className="header">
          <h1>Add a new room</h1>
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
        <form id="addRoomForm">
        <input type="text" name="image" placeholder="Image link" value={image} onChange={handleImageChange} required/>
        {showErrors && image === "" && <span className="errorMessage text-red-500 text-xs mb-3">This field is required</span>}
        <input type="text" name="name" placeholder="Name" value={name} onChange={handleNameChange} required/>
        {showErrors && name === "" && <span className="errorMessage text-red-500 text-xs mb-3">This field is required</span>}
        <input type="text" name="description" placeholder="Description" value={description} onChange={handleDescriptionChange} required/>
        {showErrors && description === "" && <span className="errorMessage text-red-500 text-xs mb-3">This field is required</span>}
        <input type="number" name="adultGuests" placeholder="Adult guests" value={adultGuests} onChange={handleAdultGuestsChange} required/>
        {showErrors && adultGuests === "" && <span className="errorMessage text-red-500 text-xs mb-3">This field is required</span>}
        <input type="number" name="childGuests" placeholder="Child guests" value={childGuests} onChange={handleChildGuestsChange} required/>
        {showErrors && childGuests === "" && <span className="errorMessage text-red-500 text-xs mb-3">This field is required</span>}
        <input type="number" name="infantGuests" placeholder="Infant guests" value={infantGuests} onChange={handleInfanftGuestsChange} required/>
        {showErrors && infantGuests === "" && <span className="errorMessage text-red-500 text-xs mb-3">This field is required</span>}
        <input type="text" name="price" placeholder="Price" value={price} onChange={handlePriceChange} required/>
        {showErrors && price === "" && <span className="errorMessage text-red-500 text-xs mb-3">This field is required</span>}
      
        
          <ReactSelect
          options={formattedOptions}
          getOptionLabel={(option) => option.label}
          components={{ Option, SingleValue, MultiValue }}
          isMulti
          closeMenuOnSelect={false}
          value={formattedOptions.filter((option: any) => selectedValues.includes(option.value))}
          onChange={(selectedOptions) => {
            if (selectedOptions) {
              setSelectedValues(selectedOptions.map((option: any) => option.value))
              setSelectedRoomFeatures(selectedOptions.map((option: any) => ({ img: option.img, name: option.label })));
            } else {
              setSelectedValues([]);
              setSelectedRoomFeatures([]);
            }
          }}
           />
        
          
          
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

export default AddRoomDrawer;
