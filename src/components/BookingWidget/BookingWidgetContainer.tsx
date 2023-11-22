import { useState } from "react";
import BookingWidget from "./BookingWidget";

const BookingWidgetContainer = () => {
  const [selectedBookingType, setSelectedBookingType] = useState("overnatning");


  const widgetButtons = [
    "Overnatning",
    "Møder & Konferencer",
    "Fest & Selskaber",
  ];

  const chooseBookingType = (value: string) => {
    setSelectedBookingType(value);
  };


  return (
    <div className=" bg-white border-2 border-black rounded-[17px] 3xl:col-span-4 2xl:col-span-5 xl:col-span-6 lg:col-span-7 lg:block hidden">
      <div className="m-4 mt-0 mr-8">
        <h1 className="text-heading-lg block py-4 font-semibold leading-none">
          Check ind på Comwell og kom ud i Danmark
        </h1>
        <section className="flex justify-between mx-2 :first-child ml-0">
          {widgetButtons.map((button, index) => (
            <button
              key={index}
              className={`font-semibold text-[12px] px-[23px] py-1 ${
                selectedBookingType === button.toLowerCase()
                  ? "bg-theme2 text-white rounded-[17px]"
                  : ""
              }`}
              value={button.toLowerCase()}
              onClick={(e) => chooseBookingType(e.currentTarget.value)}
            >
              {button}
            </button>
          ))}
        </section>

        <section className="flex flex-col gap-[10px] mt-[20px]">
          <BookingWidget />
        </section>

    
      </div>
    </div>
  );
};

export default BookingWidgetContainer;
