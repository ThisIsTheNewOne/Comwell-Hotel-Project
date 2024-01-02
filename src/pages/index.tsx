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
    <div className="font-semibold">
    
      <section className="pt-[170px] w-full min-h-[100vh] bg-cover bg-no-repeat" style={{ backgroundImage: "url(https://raw.githubusercontent.com/ThisIsTheNewOne/Comwell-Hotel-Project/homepage/public/images/mainPage/HeroImage.jpg)" }}>
        <div className="min-h-[70vh] w-1/3 ml-10">
          <BookingWidgetContainer />
        </div>
      </section>
    

      {/* <section className="w-full h-[100vh] bg-white relative z-0">
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
      </section> */}

      <section className="w-full min-h-[100vh] bg-white py-24 px-20">
        <h2 className="text-4xl">Aktuelt</h2>

        <div className="flex space-x-4 mt-16">
      {/* Container 1 */}
      <div className="relative rounded-md overflow-hidden w-1/3 h-45vh">
        <img
          className="w-full h-full object-cover"
          src="https://cdn.dwarf.dk/comwell-cms-production/img/containers/main/kampagner/b2b_efter%C3%A5r2023/b2b_kampagnefoto.jpg/2d07f5cd2afd708064ef21f9677cf289.webp"
          alt="Container 1"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-10" />
        <div className="absolute top-4 left-4">
        <span className="bg-white text-black label block rounded-full px-3 py-1.5 uppercase text-xs">Se lokaler og mødepakker</span>
        </div>
        <div className="absolute bottom-4 left-4 text-white">
          <p className="text-xs">Additional text here</p>
        </div>
      </div>

      {/* Container 2 */}
      <div className="relative rounded-md overflow-hidden w-1/3 h-45vh">
        <img
          className="w-full h-full object-cover"
          src="https://cdn.dwarf.dk/comwell-cms-production/img/containers/main/as_fotos/ext-001-12.jpg/67ddf3bbefcbb24cc3d8343bf5119cfc.webp"
          alt="Container 2"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-10" />
        <div className="absolute top-4 left-4">
        <span className="bg-white text-black label block rounded-full px-3 py-1.5 uppercase text-xs">Nyhed</span>
        </div>
        <div className="absolute bottom-4 left-4 text-white">
          <p className="text-xs">Additional text here</p>
        </div>
      </div>

      {/* Container 3 */}
      <div className="relative rounded-md overflow-hidden w-1/3 h-45vh">
        <img
          className="w-full h-full object-cover"
          src="https://cdn.dwarf.dk/comwell-cms-production/img/containers/main/jul/rs24381_comwell_christmas_1-lpr.jpg/a4189692a219a459ede2b32771ad574b.webp"
          alt="Container 3"
        />
       <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-10" />
        <div className="absolute top-4 left-4">
        <span className="bg-white text-black label block rounded-full px-3 py-1.5 uppercase text-xs">Få overblikket</span>
        </div>
        <div className="absolute bottom-4 left-4 text-white">
          <p className="text-xs">Additional text here</p>
        </div>
      </div>
    </div>
        
      </section>
    
    </div>
  );
}
