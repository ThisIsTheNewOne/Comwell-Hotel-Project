import BookingContext from "@/hooks/useContext/BookingContext";
import { roomPackage } from "@/types/Booking";
import React, { useContext, useEffect, useState } from "react";

type RoomPackagesType = {
  id: string;
  name: string;
  price: number;
  description: string;
  activePackage: string | null;
  setActivePackage: (activePackage: string | null) => void;
  addOn?: roomPackage;
};

const RoomPackages: React.FC<RoomPackagesType> = (props: RoomPackagesType) => {
  const {
    id,
    name,
    price,
    description,
    activePackage,
    setActivePackage,
    addOn,
  } = props;
  const {
    setSelectedPackage,
    selectedPackage,
    selectedAddon,
    setSelectedAddon,
    setTotalPrice,
  } = useContext(BookingContext);
  const [lastActivePackage, setLastActivePackage] = useState(
    null as string | null
  );

  const deselectPackage = () => {
    setSelectedPackage(selectedPackage);
    setActivePackage(null);
    setLastActivePackage(null);
  };

  const selectNewPackage = () => {
    if (id === "bookingAddon" && activePackage !== name) {
      if (addOn && selectedAddon.some(addon => addon.name === addOn.name)) {
        setSelectedAddon(selectedAddon.filter((addon) => addon.name !== addOn.name));
      } else if (addOn) {
        setSelectedAddon([...selectedAddon, addOn]);
      }
    } else {
      setActivePackage(name);
      setLastActivePackage(name);
    }
  };

  const calculateNewPrice = () => {
    let newPrice = selectedPackage;

    if (id === "bookingAddon") {
      const bookingAddonTotal = selectedAddon.reduce((total, addon) => total + addon.price, 0);
      newPrice = bookingAddonTotal;
      selectedPackage !== null && selectedPackage !== undefined && setTotalPrice(selectedPackage + bookingAddonTotal);
    } else {
      newPrice = price;
      setSelectedPackage(newPrice);
      setTotalPrice(newPrice);
    }
  };

  const selectPackage = () => {
    if (id === "bookingAddon" && activePackage === name) {
      deselectPackage();
    } else {
      selectNewPackage();
      calculateNewPrice();
    }
  };

  useEffect(() => {
    if(selectedPackage !== null) {
      calculateNewPrice();
    }
  }, [selectedAddon]); 

  return (
    <div
    className={`flex flex-col justify-between border ${
      activePackage === name || selectedAddon.some(addon => addon.name === name) ? "border-black" : "border-gray-300"
    } hover:border-black rounded-[6px] py-[15px] px-[15px] w-[48%] cursor-pointer`}
    onClick={() => selectPackage()}
  >
      <div className="flex">
        <div className="text-[20px] leading-[1.1] mb-[10px] mr-[30px]">
          {name}
        </div>
        <div>Sel</div>
      </div>

      <div>
        <div className="font-medium text-[13px] line-clamp-2 overflow-hidden ">
          {description}
        </div>
        <div className="mt-[10px]"> Read more about this package</div>
      </div>

      <div className="mt-3 text-[28px]">{price + " " + "kr."}</div>
    </div>
  );
};

export default RoomPackages;
