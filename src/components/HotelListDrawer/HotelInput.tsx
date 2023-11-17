import React, { useState } from "react";

const HotelInput: React.FC = () => {
  // All of the state

  return (
    <>
      <li>
        <button className="hotelButton">
          <div className="imageContainer">
            <img src="https://raw.githubusercontent.com/ThisIsTheNewOne/Comwell-Hotel-Project/master/public/images/hotels/borupgaard/borupgaard.webp" alt="borupgaard" />
          </div>
          <div className="hotelInfo">
            <div className="hotelName">Borupgaard</div>
            <div className="hotelCity">Snekkersten</div>
          </div>
          <div className="selector">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" className="w-[16px]">
              <rect></rect>
              <path fill="white" fill-rule="evenodd" d="M6.668 10.6 3.134 7.067l-.733.666 3.533 3.534.734.733 7.067-7.067L13 4.2l-6.333 6.4Z" clip-rule="evenodd"></path>
            </svg>
          </div>
        </button>
      </li>
    </>
  );
};

export default HotelInput;
