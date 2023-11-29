import BookingWidgetContainer from "@/components/BookingWidget/BookingWidgetContainer";
import LocalizedLink from "@/components/molecules/LocalizedLink";
import BookingContext from "@/hooks/useContext/BookingContext";
import { useContext, useEffect } from "react";

export default function Home() {
  const { isOpenBookingFlowDrawer, isOpenHotelListDrawer, isOpenGuestsDrawer, isOpenCalendarDrawer } =
    useContext(BookingContext);

  useEffect(() => {
    if (isOpenBookingFlowDrawer || isOpenHotelListDrawer || isOpenGuestsDrawer || isOpenCalendarDrawer) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpenBookingFlowDrawer, isOpenHotelListDrawer, isOpenGuestsDrawer, isOpenCalendarDrawer]);

  const currentOffer= [
    {
      name:"Let us help you with your next meeting",
      description:"We have the premises, the good catering and professional meeting planning.",
      promo: "SEE PREMISES AND MEETING PACKAGES",
      img: "https://raw.githubusercontent.com/ThisIsTheNewOne/Comwell-Hotel-Project/homepage/public/images/mainPage/Meeting.jpg"
    }
  ]

  return (
    <div>
      <section className="-mt-[110px] pt-[220px] ">
        <div className="min-h-[70vh] w-full">
          <img src="https://raw.githubusercontent.com/ThisIsTheNewOne/Comwell-Hotel-Project/homepage/public/images/mainPage/HeroImage.jpg" alt="Hero Img" className="absolute inset-0 w-full h-full object-cover z-[-1]" />
          <div className="relative z-10">
            <div className="grid grid-cols-[repeat(12,_1fr)] pt-[14vh] w-full gap-[16px] h-[500px] pl-[10vw] pr-[10%]">
              <BookingWidgetContainer />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full h-[100vh] bg-white z-0">
        <h1>Current</h1>
        {currentOffer.map((offer, index) => (
          <div className="relative w-full h-[100vh]" key={index}>
            <img src={offer.img} alt="Hero Img" className="absolute inset-0 w-full h-full object-cover z-[-1]" />
            <div className="relative z-10">
              <div className="grid grid-cols-[repeat(12,_1fr)] pt-[14vh] w-full gap-[16px] h-[500px] pl-[10vw] pr-[10%]">
                <div className="col-span-6">
                  <div className="text-[40px] font-bold">{offer.name}</div>
                  <div className="text-[20px] mt-[20px]">{offer.description}</div>
                  <div className="text-[20px] mt-[20px]">{offer.promo}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* <div>This is the main header </div>
      <LocalizedLink href="/Info">
        <button>Go to Info Page</button>
      </LocalizedLink> */}
    </div>
  );
}
