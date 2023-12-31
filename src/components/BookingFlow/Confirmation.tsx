import { useContext } from "react";
import BookingDates from "./HeaderBookingFlow/BookingDates";
import BookingHotel from "./HeaderBookingFlow/BookingHotel";
import BookingRooms from "./HeaderBookingFlow/BookingRooms";
import BookingOverview from "./bookingOverview";
import BookingContext from "@/hooks/useContext/BookingContext";

interface Props {
  id: string;
  setDrawerComponent: (drawerComponent: string) => void;
}

const Confirmation = (props: Props) => {
  const { id, setDrawerComponent } = props;
  const { selectedRoom } = useContext(BookingContext);

  const roomImgList = ["", "","", "","", ""];

  return (
    <div className="paymentWrapper">
      <div className="pt-[10px] pr-[20px] pb-0 pl-[60px] w-3/5 h-[90vh] flex flex-col gap-y-4 lg:gap-y-8 overflow-y-scroll hidden-scroll-bar">
        <div className="h-full flex items-center">
          <div className="order-first h-full flex flex-col justify-between">
            <div className="mt-[9rem]" >
              <h1>Booking gennemført</h1>
              <div className="mt-4">
                <span>Dit booking reference er</span>
                <span>#13847532</span>
              </div>

              <div className="mt-4">
                <BookingDates />
                <BookingRooms />
                <BookingHotel />
              </div>
            </div>

            <div className="flex flex-row items-center bg-[#F0EAE2] rounded-[8px] p-4">
              <div>Img</div>
              <span>
                Gå ikke glip af dine gratis Comwell Club Point. nu og få 120 kr.
                til dit næste ophold.
              </span>
            </div>

            <div>
              <h2 className="text-[28px]">Book spa & restaurant</h2>
              <span>
                Book spa & reastaurant to make sure that you can get time slots
                when expected. You can always do this later.
              </span>
              <div className="flex">
             
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
          </div>
        </div>
      </div>
      <BookingOverview
        id={id}
        setDrawerComponent={setDrawerComponent}
        nextPage={"reservationAdded"}
      />
    </div>
  );
};

export default Confirmation;
