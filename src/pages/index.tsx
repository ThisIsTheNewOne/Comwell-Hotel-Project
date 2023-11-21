import BookingWidgetContainer from "@/components/BookingWidget/BookingWidgetContainer";
import LocalizedLink from "@/components/molecules/LocalizedLink";

export default function Home() {
  return (
    <div className="-mt-[110px] pt-[220px] ">
      {/* <section className="w-full bg-gradient-to-t lg:from-black/[0.35] pt-20 pb-8 md:pt-20 to-black/[0.1] via-transparent before:absolute before:inset-0"> */}
      <section>
        <div className="">
          <div className="grid grid-cols-[repeat(12,_1fr)] w-full gap-[16px] h-[75vh] pl-[10%] pr-[10%]">
              <BookingWidgetContainer />
          </div>
        </div>

        <div className="min-h-[70vh] w-full z-0 ">
          <img
            src="https://raw.githubusercontent.com/ThisIsTheNewOne/Comwell-Hotel-Project/homepage/public/images/mainPage/HeroImage.jpg"
            alt="Hero Img"
            className="w-full min-h-[70vh] object-cover"
          />
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
