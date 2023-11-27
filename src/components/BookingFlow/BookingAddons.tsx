import React, { useState } from "react";
import Drawer from "react-modern-drawer";
import ContinueContainer from "./FooterBookingFlow/ContinueContainer";

type BookingAddonsType = {
  id: string;
  setDrawerComponent: (drawerComponent: string) => void;
};

type AddOnType = {
  name: string;
  price: number;
  description: string;
  fullDescription?: string;
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
      fullDescription:
        "With early check-in, you will be able to arrive earlier than the usual check-in. Subject to availability and specific time will be confirmed by the hotel",
    },
    {
      name: "Late departure",
      price: 200,
      description: "",
      fullDescription:
        "With late departure you can extend your stay for a few hours. Subject to availability and time will be confirmed by the hotel.",
    },
  ];

  const [selectedAddOns, setSelectedAddOns] = useState(
    addOnsList[0] as AddOnType
  );

  const openAddOnDrawer = (AddOnName: string) => {
    console.log("openAddOnDrawer");
    const activeAddOn = addOnsList.find(
      (addOn: AddOnType) => addOn.name === AddOnName
    ) as AddOnType;
    setAddOnDrawer(true);
    setSelectedAddOns(activeAddOn);
  };

  const closeAddOnDrawer = () => {
    console.log("closeAddOnDrawer");
    setAddOnDrawer(false);
  };

  return (
    <div className="selectRoomContainer">
      <h1>Vælg værelse</h1>
      <div key={id} className="mt-[40px] flex  flex-wrap  gap-[20px]">
        {addOnsList.map((addOn, index) => (
          <div
            className=" flex flex-row justify-between border-[1px] border-gray-300 rounded-[6px] py-[15px] px-[15px] w-[48%]"
            key={index}
          >
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
                <div
                  className="mt-[10px]"
                  onClick={() => openAddOnDrawer(addOn.name)}
                >
                  Read more
                </div>
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
          <h1>{selectedAddOns.name}</h1>
          <div className="text-light">{selectedAddOns.fullDescription}</div>
          <div className="h-[100vh]">
            <ContinueContainer
              id={id}
              setDrawerComponent={setDrawerComponent}
              type={"addon"}
              price={selectedAddOns.price}
              nextPage="addons"
            />
          </div>
        </div>
      </Drawer>

      <div className="h-[20%]">
        <ContinueContainer
          id={id}
          setDrawerComponent={setDrawerComponent}
          nextPage="guestInfo"
        />
      </div>
    </div>
  );
};

export default BookingAddons;
