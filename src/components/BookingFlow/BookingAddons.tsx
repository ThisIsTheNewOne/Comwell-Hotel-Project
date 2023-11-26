import React, { useState } from "react";
import Drawer from "react-modern-drawer";
import ContinueContainer from "./FooterBookingFlow/ContinueContainer";

type BookingAddonsType = {
  id: string;
  setDrawerComponent: (drawerComponent: string) => void;
};

const BookingAddons: React.FC<BookingAddonsType> = (
  props: BookingAddonsType
) => {
  const { id, setDrawerComponent } = props;
  const [addOnDrawer, setAddOnDrawer] = useState(false);

  const addOnsList = [
    {
      name: "Early check-in",
      price: 200,
      description: "Check ind 2 timer tidligere",
    },
    {
      name: "Late departure",
      price: 200,
      description: "",
    },
   
  ];

  const openAddOnDrawer = () => {
    console.log("openAddOnDrawer");
    setAddOnDrawer(true);
  }

  const closeAddOnDrawer = () => {
    console.log("closeAddOnDrawer");
    setAddOnDrawer(false);
  }

  return (
    <div className="selectRoomContainer">
      <h1>Vælg værelse</h1>
      <div key={id} className="mt-[40px] flex  flex-wrap  gap-[20px]">
        {addOnsList.map((addOn, index) => (
          <div className=" flex flex-row justify-between border-[1px] border-gray-300 rounded-[6px] py-[15px] px-[15px] w-[48%]" key={index}>
            <div className="w-[100%]">
              <div className="w-[100%] flex  items-baseline justify-between ">
                <div className="text-[20px] leading-[1.1] mb-[10px] mr-[30px]">
                  {addOn.name}
                </div>
                <div className="flex items-baseline">
                  <div className="text-[20px] mr-[15px]"> {addOn.price}kr</div>
                  <div>Sel</div>
                </div>
              </div>

              <div>
                <div className="font-medium text-[13px] line-clamp-2 overflow-hidden ">
                  {addOn.description}
                </div>
                <div className="mt-[10px]" onClick={openAddOnDrawer}> Read more</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Drawer
        className="bookingFlowDrawer font-semibold"
        open={addOnDrawer}
        onClose={closeAddOnDrawer}
        direction="right"
        size={370}
      >
        <div>
            <div>Img</div>
            <h1>Early check-in</h1>
            <div className="text-light">With early check-in, you will be able to arrive earlier than the usual check-in. Subject to availability and specific time will be confirmed by the hotel</div>
            <ContinueContainer id={id} setDrawerComponent={setDrawerComponent} type={"addon"} />
        </div>
      </Drawer>

      <ContinueContainer id={id} setDrawerComponent={setDrawerComponent} nextPage="guestInfo" />
    </div>
  );
};

export default BookingAddons;
