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

  return (
    <div style={{ backgroundImage: "url(https://raw.githubusercontent.com/ThisIsTheNewOne/Comwell-Hotel-Project/homepage/public/images/mainPage/HeroImage.jpg)" }}>
      <section className="-mt-[110px] pt-[220px] ">
        <div className="min-h-[70vh] w-1/3 ml-10">
          <BookingWidgetContainer />
        </div>
      </section>

      <section className="w-full h-[100vh] bg-white z-0"></section>

      <div>This is the main header </div>
      <LocalizedLink href="/Info">
        <button>Go to Info Page</button>
      </LocalizedLink>
    </div>
  );
}
