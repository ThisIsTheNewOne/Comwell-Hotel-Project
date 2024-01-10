import { roomFeatures } from "@/types/Booking";
import React from "react";
import RoomFeaturesDefault from "./ComponentForFeatures";

type BookingFacilitiesType = {
  roomFeatures?: roomFeatures[];
};

const BookingFacilities: React.FC<BookingFacilitiesType> = (props: BookingFacilitiesType ) => {
  const { roomFeatures } = props;
 
  console.log("THis is the roomFeatures", roomFeatures)
  
  return (
    <div className="flex flex-col md:flex-row md:items-center lg:max-w-[100%]">
      {roomFeatures !== undefined  ?
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
        {roomFeatures.length === 0 ? 
        <RoomFeaturesDefault /> :
        <>
        {roomFeatures.map((feature, index) => (
          <div key={index} className="text-xs font-regular flex h-[22px] items-center gap-x-2 whitespace-nowrap border-r pr-3 last:border-r-0 md:last:border-r">
            <img src={feature.img} alt={feature.name} className="icon h-[20px] w-[20px]" />
            <span>{feature.name}</span>
          </div>
        ))}
        </>
        }
        
      </div>
      : 
      <RoomFeaturesDefault />
     }
      
      
    </div>
  );
};

export default BookingFacilities;
