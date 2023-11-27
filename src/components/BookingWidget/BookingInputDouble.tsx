import { useContext, useState } from "react";
import Drawer from "react-modern-drawer";
import CalendarContainer from "../Calendar/CalendarContainer";
import BookingContext from "@/hooks/useContext/BookingContext";
import { CalendarInput } from "@/types/Booking";

interface Props {
  bookingInputProps: CalendarInput[];
  disableDates: (string | Date)[]
}




const BookingInputDouble = (props: Props) => {
  const { bookingInputProps, disableDates } = props;
  const {  setCheckIn,  setCheckOut, isOpenCalendarDrawer, setIsCalendarDrawer } = useContext(BookingContext);

  const doesDrawerExist = true;
  // const [isOpenCalendarDrawer, setIsCalendarDrawer] = useState(false);

  const openDrawer = () => {
    console.log("Hotel list drawer open");
    setIsCalendarDrawer(true);
  };

  const closeDrawer = () => {
    setIsCalendarDrawer(false);
  };


  return (
    <div>
      <div
        className="flex border-[1px] border-gray-300 pl-[12px] cursor-pointer rounded-[4px] hover:border-black"
        onClick={openDrawer}
      >
        {bookingInputProps.map((input, index) => (
          <div key={index}>
            <div className="flex flex-row items-center px-[12px]">
              <div>
                <label className="font-medium mt-[3px] tracking-[-.05em] opacity-[.67]">
                  {input.label}
                </label>
                <input
                  type={input.type}
                  className="w-full font-bold leading-none focus:outline-none focus:ring-0 mb-[5px] cursor-pointer"
                  placeholder={input.placeholder}
                />
              </div>

              <div>V</div>
            </div>
          </div>
        ))}
      </div>
      {doesDrawerExist && (
        <Drawer
          className="hotelListDrawer z-[100]"
          open={isOpenCalendarDrawer}
          onClose={closeDrawer}
          direction="right"
          size={390}
        >
          <CalendarContainer setCheckIn={setCheckIn} setCheckOut={setCheckOut} disableDates={disableDates} />
        </Drawer>
      )}
    </div>
  );
};

export default BookingInputDouble;
