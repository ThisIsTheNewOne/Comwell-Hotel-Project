import React, { useContext, useEffect, useState } from "react";
import BookingContext from "@/hooks/useContext/BookingContext";
import HotelList from "@/components/UserDashboard/HotelList";
import { useCurrentUser } from "@/hooks/userStorage";
import { User } from "@/types/Booking";

const Hotels: React.FC = () => { 
const { hotels } = useContext(BookingContext);
const [user, setUser] = useState({} as User);


useEffect(() => {
  const storedUser = localStorage.getItem("currentUser");
  if (storedUser) {
    setUser(JSON.parse(storedUser));
  }
}, []);

const handleClick = () => {
  window.location.replace("./");
}


  if (!user || Object.keys(user).length === 0) {
    return (
      <div className="dashboard-overlay font-semibold">
        <div className="dialog-box">
          <h2>This page is unavailable</h2>
          <p>Please log in to access this page.</p>
          <button onClick={handleClick} className="body w-full rounded-full font-semibold leading-none md:w-auto md:px-10 md:transition max-md:transition-opacity h-[52px] opacity-100 bg-theme text-white hover:lg:bg-theme-80">
              <span className="flex items-center gap-x-[7px] justify-center">
                <span>Go back to home</span>
              </span>
            </button>
        </div>
      </div>
    );
  }



  return (
    <div className="userDashboard font-semibold">
      <h1>Hi, {user?.fullname}</h1>
      <p>Manage hotels and rooms here</p>
      <h2 className="mt-4 text-2xl">Hotels</h2>
        <HotelList hotelList={hotels}/>

    </div>
  );
}  

export default Hotels;

