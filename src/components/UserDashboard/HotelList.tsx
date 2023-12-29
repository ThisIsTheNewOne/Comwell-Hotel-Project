import React, { useContext, useState } from "react";
import Drawer from "react-modern-drawer";
import { Hotel } from "@/types/Booking";
import BookingContext from "@/hooks/useContext/BookingContext";
import AddHotelDrawer from "@/components/UserDashboard/AddHotelDrawer";
import HotelArticle from "@/components/UserDashboard/HotelArticle";

interface Props {
  hotelList: Hotel[];
}

const HotelList: React.FC<Props> = (props: Props) => {
  const {hotelList} = props;
  const { selectedHotel, setSelectedHotel } = useContext(BookingContext);
  const [isOpenAddHotelDrawer, setIsOpenAddHotelDrawer] = useState(false);


  function handleHotelSelect(hotel: Hotel) {
    console.log("This is the selected hotel in the end", hotel, selectedHotel)
    if (selectedHotel?._id === hotel._id) {
      setSelectedHotel(null);
    } else {
      setSelectedHotel(hotel);
    }
  }

  function handleAddHotelDrawer() {
    console.log("edit hotel drawer", isOpenAddHotelDrawer);
    setIsOpenAddHotelDrawer(true);
  }

  return (
    <>
<div>
          <div className="col-span-full mt-5 md:mt-12">
            <div className="grid grid-cols-12 gap-x-4 gap-y-6 md:grid-cols-8 md:gap-y-8">
            {hotelList.map((hotel) => (
          <HotelArticle
            key={hotel.name}
            id={hotel._id}
            hotelName={hotel.name}
            city={hotel.city}
            address={hotel.address}
            image={hotel.image}       
          />
        ))}

            </div>
          </div>
          <div className="addRoom flex justify-center mt-10">
                <button onClick={handleAddHotelDrawer} className="items-center gap-x-1 rounded-full py-2 pl-5 pr-5 bg-theme text-white transition-opacity hover:opacity-[0.7]">
                    Add hotel
                </button>
            </div>
            <AddHotelDrawer
        setIsOpenAddHotelDrawer={setIsOpenAddHotelDrawer}
        isOpenAddHotelDrawer={isOpenAddHotelDrawer}
      />
        </div>

  </>
  );
};

export default HotelList;
