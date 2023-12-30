import React, { useContext, useState } from "react";
import Drawer from "react-modern-drawer";
import ContinueContainer from "./FooterBookingFlow/ContinueContainer";
import RoomPackages from "./RoomPackages";


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
      price: 300,
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

  const [activeAddon, setActiveAddon] = useState<string | null>(null);

  return (
    <div className="selectRoomContainer">
      <div className="h-[87%] flex flex-col flex-start">
        <h1>Vælg værelse</h1>
        <div key={id} className="mt-[40px] flex  flex-wrap  gap-[20px]">


          <div className="flex flex-wrap gap-[17px]">
            {addOnsList.map((addOn, index) => (
              <RoomPackages
                id={"bookingAddon"}
                key={index}
                name={addOn.name}
                price={addOn.price}
                description={addOn.description}
                activePackage={activeAddon}
                addOn={addOn}
                setActivePackage={setActiveAddon}
              />
            ))}
          </div>
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
            {/* <div className="h-[100vh]">
              <ContinueContainer
                id={id}
                setDrawerComponent={setDrawerComponent}
                type={"addon"}
                price={selectedAddOns.price}
                nextPage="addons"
              />
            </div> */}
          </div>
        </Drawer>
      </div>

      <div className="fixed bottom-0 left-0 w-full transition-all duration-[400ms] z-[1]">
        <ContinueContainer
          id={id}
          setDrawerComponent={setDrawerComponent}
          nextPage="guestInfo"
          type={"addon"}
          price={selectedAddOns.price}
        />
      </div>
    </div>
  );
};

export default BookingAddons;
