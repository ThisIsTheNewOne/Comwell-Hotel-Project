import { useState } from "react";
import BookingWidget from "./BookingWidget";
import BookingCode from "./BookingCode";
import BookingInputSingle from "./BookingInputSingle";
import BookingInputDouble from "./BookingInputDouble";

const BookingWidgetContainer = () => {
  const [selectedBookingType, setSelectedBookingType] = useState("overnatning");
  const [isBookingCodeOpen, setIsBookingCodeOpen] = useState(false);

  const widgetButtons = [
    "Overnatning",
    "Møder & Konferencer",
    "Fest & Selskaber",
  ];

  const chooseBookingType = (value: string) => {
    setSelectedBookingType(value);
  };

  const bookingCodeInput = {
    label: "Bookingkode",
    placeholder: "",
  };

  return (
    <div className="flex h-full w-1/4 flex-col justify-start bg-white border-2 border-black rounded-[17px]">
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
          {/* <BookingWidget /> */}

          <BookingInputDouble />
          <BookingInputDouble />
          <BookingInputDouble />

          {!isBookingCodeOpen ? (
            <BookingCode
              setIsBookingCodeOpen={setIsBookingCodeOpen}
              isBookingCodeOpen={isBookingCodeOpen}
            />
          ) : (
            <BookingInputSingle bookingInputProps={bookingCodeInput} />
          )}
        </section>

        <div className="max-lg:mt-auto w-full py-[16px] ">
          <button className="bg-theme2 w-full text-white rounded-[30px] py-[16px] font-semibold text-[16px]">
            Søg
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingWidgetContainer;
