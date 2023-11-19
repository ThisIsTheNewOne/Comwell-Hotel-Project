import LocalizedLink from "@/components/molecules/LocalizedLink";
import Image from 'next/image'
import heroImage from '../assets/images/HeroImage.jpg';


export default function Home() {
  return (
    <div className="-mt-[110px] pt-[220px]  layout mb-row-spacing flex flex-col gap-y-row-spacing bg-white">
      <section className="module-hero module-heroNeutral relative h-screen max-h-[75vh]  module-hero module">
        <div className="widget-container grid-edge absolute inset-0 bg-gradient-to-t lg:from-black/[0.35] pt-20 pb-8 md:pt-20 to-black/[0.1] via-transparent">
        <div>
        <img src="https://raw.githubusercontent.com/ThisIsTheNewOne/Comwell-Hotel-Project/homepage/public/images/mainPage/HeroImage.jpg" alt="Hero Img" />
        </div>
         
        </div>
      </section>

      <div>This is the main header </div>
      <LocalizedLink href="/Info">
        <button>Go to Info Page</button> 
      </LocalizedLink>
    </div>
  );
}
