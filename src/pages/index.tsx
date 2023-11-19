import LocalizedLink from "@/components/molecules/LocalizedLink";

export default function Home() {
  return (
    <div className="-mt-[110px] pt-[220px]  layout mb-row-spacing flex flex-col gap-y-row-spacing bg-white">
      <section className="module-hero module-heroNeutral relative h-screen max-h-[75vh]  module-hero module">
        <div className="widget-container grid-edge absolute inset-0 bg-gradient-to-t lg:from-black/[0.35] pt-20 pb-8 md:pt-20 to-black/[0.1] via-transparent">
         
        </div>
      </section>

      <div>This is the main header </div>
      <LocalizedLink href="/Info">
        <button>Go to Info Page</button>
      </LocalizedLink>
    </div>
  );
}
