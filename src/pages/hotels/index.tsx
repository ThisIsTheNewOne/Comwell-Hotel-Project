import React, { useContext, useState } from "react";
import BookingContext from "@/hooks/useContext/BookingContext";
import HotelList from "@/components/UserDashboard/HotelList";

const Hotels: React.FC = () => { 

  const {
    hotels
  } = useContext(BookingContext);



  return (
    <div className="userDashboard font-semibold">
      <h1>Hi, username</h1>
      <p>Manage hotels and rooms here</p>
      <h2 className="mt-4 text-2xl">Hotels</h2>
        <HotelList hotelList={hotels}/>

    </div>
  );
}

export default Hotels;

