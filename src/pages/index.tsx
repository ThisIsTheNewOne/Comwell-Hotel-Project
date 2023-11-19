import BookingWidgetContainer from "@/components/BookingWidget/BookingWidgetContainer";
import LocalizedLink from "@/components/molecules/LocalizedLink";

export default function Home() {
  return (
    <div className="">
      <section className="">
        <div className="">
          <div className="">
            <picture>
              <img
                src="https://raw.githubusercontent.com/ThisIsTheNewOne/Comwell-Hotel-Project/homepage/public/images/mainPage/HeroImage.jpg"
                alt="Hero Img"
              />
            </picture>
          </div>
        </div>

        <BookingWidgetContainer />
        
      </section>

      <div>This is the main header </div>
      <LocalizedLink href="/Info">
        <button>Go to Info Page</button>
      </LocalizedLink>
    </div>
  );
}
