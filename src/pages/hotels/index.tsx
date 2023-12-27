import React, { useContext, useState } from "react";
import BookingContext from "@/hooks/useContext/BookingContext";
import HotelList from "@/components/UserDashboard/HotelList";

const Hotels: React.FC = () => { 

  const {
    hotels
  } = useContext(BookingContext);



  return (
    <div className="userDashboard font-semibold">
      <h1>Hotels</h1>

      <div className="hotelList">
        <HotelList hotelList={hotels}/>
        </div>

    </div>
  );
}

export default Hotels;

