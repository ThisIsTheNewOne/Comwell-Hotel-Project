import { useState } from "react";
import Drawer from "react-modern-drawer";

interface Props {
  bookingInputProps: CalendarInput[];
}

type CalendarInput = {
  label: string;
  placeholder: string;
  type: string;
};

const BookingInputDouble = (props: Props) => {
  const { bookingInputProps } = props;

  const doesDrawerExist = true;
  const [isOpenDrawer, setIsDrawer] = useState(false);

  const openDrawer = () => {
    console.log("Hotel list drawer open");
    setIsDrawer(true);
  };

  const closeDrawer = () => {
    setIsDrawer(false);
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
          className="hotelListDrawer"
          open={isOpenDrawer}
          onClose={closeDrawer}
          direction="right"
          size={390}
        ></Drawer>
      )}
    </div>
  );
};

export default BookingInputDouble;
