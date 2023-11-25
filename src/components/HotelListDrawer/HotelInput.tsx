import React, { useState } from "react";

interface HotelInputProps {
  hotelName: string;
  city: string;
  isSelected: boolean;
  onClick: () => void;
}

const HotelInput: React.FC<HotelInputProps> = (props: HotelInputProps) => {
  const { hotelName, city, isSelected, onClick } = props;

  return (
    <>
      <li>
        <button
          className={`hotelButton ${isSelected ? "selected" : ""}`}
          onClick={onClick}
        >
          <div className="imageContainer">
            <img
              src="https://raw.githubusercontent.com/ThisIsTheNewOne/Comwell-Hotel-Project/master/public/images/hotels/borupgaard/borupgaard.webp"
              alt="borupgaard"
            />
          </div>
          <div className="hotelInfo">
            <div className="hotelName">{hotelName}</div>
            <div className="hotelCity font-medium">{city}</div>
          </div>
          <div className="selector">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 16"
              className="w-[16px]"
            >
              <rect></rect>
              <path
                fill="white"
                fillRule="evenodd"
                d="M6.668 10.6 3.134 7.067l-.733.666 3.533 3.534.734.733 7.067-7.067L13 4.2l-6.333 6.4Z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </button>
      </li>
    </>
  );
};

export default HotelInput;
