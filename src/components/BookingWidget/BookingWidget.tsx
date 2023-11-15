import React, { useState } from "react";
import HotelListDrawer from "../HotelListDrawer/HotelListDrawer";

const BookingWidget: React.FC = () => {
  // All of the state
  const [isOpenHotelListDrawer, setIsOpenHotelListDrawer] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    job: "",
    website: "",
  });

  function handleFormChange(event: { target: { value: string; name: string } }) {
    const { value, name } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  return (
    <nav>
      <HotelListDrawer setIsOpenHotelListDrawer={setIsOpenHotelListDrawer} isOpenHotelListDrawer={isOpenHotelListDrawer}></HotelListDrawer>
    </nav>
  );
};

export default BookingWidget;
