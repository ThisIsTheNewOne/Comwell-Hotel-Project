import BookingContext from "@/hooks/useContext/BookingContext";
import React, { useContext } from "react";
import ContinueContainer from "./FooterBookingFlow/ContinueContainer";

interface Props {
  id: string;
  setDrawerComponent: (drawerComponent: string) => void;
  nextPage: string;
  postBooking?: () => void;
  isCreditCardValid?: boolean;
}

const BookingOverview: React.FC<Props> = (props: Props) => {
  const { id, setDrawerComponent, nextPage, postBooking, isCreditCardValid } =
    props;
  const { selectedPackage, selectedAddon, totalPrice, selectedRoom } =
    useContext(BookingContext);

  // const { postBooking } = useContext(BookingContext)
  return (
    <>
      <div className="overviewContainer">
        <h1>Oversigt</h1>
        <div className="flex flex-col gap-y-4 mt-8">
          <div className="w-full flex justify-between items-center">
            <span className="label opacity-[0.65] uppercase text-xs">
              Værelse 1
            </span>
            <button
              type="button"
              className="underline text-theme text-sm font-[500]"
            >
              Rediger
            </button>
          </div>
          <div className="grid grid-cols-[56px,auto] w-full gap-x-2">
            <div className="module-richMedia relative block w-full overflow-hidden bg-gray-200 !h-[42px] rounded-[5px]">
              <img
                className="transition-transform group-hover:scale-[1.05] ease-in duration-150 h-full w-full object-cover lazyautosizes ls-is-cached lazyloaded"
                src="https://raw.githubusercontent.com/ThisIsTheNewOne/Comwell-Hotel-Project/master/public/images/hotels/borupgaard/suite.webp"
                alt="suite"
              />
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col pr-4">
                <span className="text-lg">{selectedRoom?.label}</span>
                <span className="package-text opacity-[0.65]">
                  {/* Overnatning med morgenbuffet - Spar 12% - Kan ikke refunderes */}
                  {selectedRoom?.description}
                </span>
              </div>
              <div className="overflow-visible">
                <div className="whitespace-nowrap price !heading-xs">
                  <span>{selectedPackage}</span>
                  <span>kr.</span>
                </div>
              </div>
            </div>
          </div>

          {selectedAddon.map((addon, index) => (
            <div className="space-y-2" key={index}>
              <div className="flex w-full justify-between items-center">
                <span>{addon.name}</span>
                <div className="whitespace-nowrap price !heading-mini">
                  <span>{addon.price}kr.</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <footer className="bottom-0 before:absolute before:top-[-41px] before:left-0 before:h-[40px] before:w-full pb-8 mt-12">
          <div className="py-5 border-y border-gray-200 flex justify-between items-center w-full">
            <div className="flex justify-between items-center w-full">
              <span className="text-2xl">Total</span>
              <div className="whitespace-nowrap price text-2xl">
                <span>{totalPrice}</span>
                <span>kr.</span>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <div className="fixed bottom-0 left-0 w-full transition-all duration-[400ms] z-[1]">
        <ContinueContainer
          id={id}
          setDrawerComponent={setDrawerComponent}
          nextPage={nextPage}
          postBooking={postBooking}
          isCreditCardValid={isCreditCardValid}
        />
      </div>
    </>
  );
};

export default BookingOverview;
