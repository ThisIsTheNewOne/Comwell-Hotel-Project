import React, { useContext, useState } from "react";
import ContinueContainer from "./FooterBookingFlow/ContinueContainer";
import BookingContext from "@/hooks/useContext/BookingContext";
import BookingFacilities from "./BookingFacilities";
import RoomPackages from "./RoomPackages";

type RoomDetailsType = {
  id: string;
  setDrawerComponent: (drawerComponent: string) => void;
};

const RoomDetails: React.FC<RoomDetailsType> = (props: RoomDetailsType) => {
  const { id, setDrawerComponent } = props;
  const { selectedRoom } = useContext(BookingContext);
  const [activePackage, setActivePackage] = useState(null as null | string);

  const roomImgList = ["", "", "", ""];

  const roomPackages = [
    {
      name: "Black Weekend 2023 - Save 30% on accommodation with breakfast buffet",
      price: 1083,
      description:
        "NOTE! Gift cards cannot be used as payment for this offer. Prepaid stays cannot be canceled, but can be rebooked at an additional cost to a new arrival date within the period January 4 through April 28, 2024. Payment will be charged to your credit card at the time of booking. The website always states whether stays, events, concerts and special events are prepaid.",
    },
    {
      name: "Overnight stay with breakfast buffet",
      price: 1547,
      description:
        "Bookings of rooms with and without breakfast can be canceled free of charge until 4 pm local time on the day of arrival. If the room is canceled after 4 pm local time we bill for the first night.",
    },
    {
      name: "Overnight stay with seasonal dinner",
      price: 1743,
      description:
        "Stays with dinner and/or spa treatments can be canceled free of charge, no later than 7 days before arrival. If canceled between 6 and 2 days before arrival, 50% of the price of the stay will be charged. If canceled less than 2 days before arrival, the full price of the stay will be charged.",
    },
  ];

  return (
    <div key={id}>
      <div>
        <div className="md:px-[14px] md:py-[10px]">
          <div className="relative w-full flex">
            {roomImgList.map((img, index) => (
              <div
                key={index}
                className="flex h-full w-full min-w-[calc(48.8%-5px)] snap-start items-center justify-center bg-gray-200 text-black/50 aspect-[16/9] md:rounded-[10px] overflow-hidden pointer-events-none keen-slider__slide mr-4 "
              >
                <img src={selectedRoom?.image} alt="" />
              </div>
            ))}
          </div>
        </div>

        <div className="px-[28px]">
          <section className="px-[20px] pt-[40px] h-auto">
            <div className="flex justify-between items-start w-full ">
              <div className="w-1/2">
                <h1 className="mb-[10px]">{selectedRoom?.label}</h1>
                <div className="trumpet text-sm max-lg:right-2 w-[60px] top-2 rounded-full bg-theme2 text-white px-2.5 py-1 lowercase lg:left-2 lg:top-2">
                  <span>{selectedRoom?.label}</span>
                  <sup>2</sup>
                </div>
              </div>

              <div className=" w-1/2 flex flex-col pt-[15px]">
                <BookingFacilities />
                <div className="text-s font-light leading-[1.1] ">
                  <p className="pt-[20px]">{selectedRoom?.description}</p>
                  <p className="pt-[20px]">Show full description</p>
                </div>
              </div>
            </div>
          </section>

          <section className="px-[20px] py-[0px]">
            <div className="mb-[10px] text-[28px]">Packages</div>
            <div className="flex flex-wrap gap-[17px]">
              {roomPackages.map((roomPackage, index) => (
                <RoomPackages
                  key={index}
                  name={roomPackage.name}
                  price={roomPackage.price}
                  description={roomPackage.description}
                  activePackage={activePackage}
                  setActivePackage={setActivePackage}
                />
              ))}
            </div>
          </section>
        </div>

        <ContinueContainer
          id={id}
          setDrawerComponent={setDrawerComponent}
          nextPage={"addons"}
          selectedRoom={selectedRoom}
        />
      </div>
    </div>
  );
};

export default RoomDetails;
