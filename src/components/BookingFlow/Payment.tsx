import React from "react";
import BookingOverview from "./bookingOverview";

const Payment: React.FC = () => {
  // All of the state

  return (
    <>
      <div className="paymentWrapper">
        <div className="paymentContainer flex flex-col gap-y-4 lg:gap-y-8 overflow-y-scroll hidden-scroll-bar">
          <div className="order-first">
            <h1>Min booking</h1>
            <ul className="max-lg:grid grid-cols-2 grid-rows-[auto,auto] max-lg:gap-3 lg:space-y-3 mt-3">
              <li className="row-span-1 col-span-1">
                <div className="border rounded-[10px] px-3 py-4 grid grid-cols-1 lg:grid-cols-[48px,1fr] gap-x-5 max-lg:gap-y-16">
                  <div className="rounded-full bg-theme-20 w-[36px] h-[36px] flex items-center justify-center lg:mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-[15px]">
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M21 10.5V21h1.5v1.5h-21V21H3V3a1.5 1.5 0 0 1 1.5-1.5H15A1.5 1.5 0 0 1 16.5 3v6h3a1.5 1.5 0 0 1 1.5 1.5zm-12-3h1.5v3H9zM9 12h1.5v3H9zm4.5-4.5H12v3h1.5zM12 12h1.5v3H12zm-1.5 4.5H9v3h1.5zm1.5 0h1.5v3H12zM4.5 3H15v18H4.5zm12 7.5V21h3V10.5z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex flex-col text-sm">
                    <span className="text-lg">Borupgaard</span>
                    <span className="opacity-[0.65]">Nørrevej 80</span>
                    <span className="opacity-[0.65]">3070 Snekkersten</span>
                    <span className="opacity-[0.65]">Denmark</span>
                  </div>
                </div>
              </li>
              <li className="row-span-1 col-span-1">
                <div className="relative border rounded-[10px] px-3 py-4 grid grid-cols-1 lg:grid-cols-[48px,1fr] gap-x-5 max-lg:gap-y-16">
                  <div className="rounded-full bg-theme-20 w-[36px] h-[36px] flex items-center justify-center lg:mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" className="w-[15px]">
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M8.334.75a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5ZM6.743 2.909a2.25 2.25 0 1 1 3.181 3.182 2.25 2.25 0 0 1-3.181-3.182Zm.09 5.841a3.75 3.75 0 0 0-3.75 3.75v2.75h10.501V12.5a3.75 3.75 0 0 0-3.75-3.75h-3Zm5.25 5V12.5a2.249 2.249 0 0 0-2.25-2.25h-3a2.25 2.25 0 0 0-2.25 2.25v1.25h7.5Z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg">Gæsteinfo</span>
                    <ul className="space-y-2">
                      <li className="flex flex-col text-sm opacity-[0.65]">
                        <span>Ana Sofia Castellanos</span>
                        <span>castellanos_chopas@hotmail.com</span>
                        <span>+4581906847</span>
                      </li>
                    </ul>
                  </div>
                  <button className="absolute top-4 right-4 underline text-theme text-sm font-[500]">Rediger</button>
                </div>
              </li>
              <li className="row-span-1 col-span-full">
                <div className="border rounded-[10px] px-3 py-4 grid grid-cols-[48px,1fr] gap-x-5">
                  <div className="rounded-full bg-theme-20 w-[36px] h-[36px] flex items-center justify-center mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-[15px]">
                      <path
                        fill="#161616"
                        d="M19.5 3h-3V1.5H15V3H9V1.5H7.5V3h-3C3.675 3 3 3.675 3 4.5v15c0 .825.675 1.5 1.5 1.5h15c.825 0 1.5-.675 1.5-1.5v-15c0-.825-.675-1.5-1.5-1.5Zm0 16.5h-15V9h15v10.5Zm0-12h-15v-3h3V6H9V4.5h6V6h1.5V4.5h3v3Z"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex flex-col text-sm">
                    <span className="text-lg">Dato</span>
                    <span className="opacity-[0.65]">1. dec. - 7. dec.</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="order-5 lg:order-4">
            <h1>Betalingsbetingelser</h1>
            <div className="text-black/[0.65] text-sm flex flex-col gap-y-2">
              <p>- For at garantere din reservation beder vi dig om dine kreditkortoplysninger</p>
              <p>- Ved bestilling reserverer vi op til kr. 500,- på dit kort</p>
              <p>- Du vil kun blive opkrævet, hvis du ikke møder op på hotellet</p>
              <p>- Du vil ikke blive opkrævet, medmindre andet er angivet. Du betaler dit ophold på hotellet</p>
            </div>
          </div>

          <div className="order-3 lg:order-5">
            <h1>Betalingsmetode</h1>
            <div className="min-h-[150px] mt-4">
              <div className="flex flex-col gap-y-4">
                <ul className="flex flex-col gap-y-2">
                  <li className="flex flex-col gap-y-4 border rounded-[5px] border-black">
                    <div>
                      <div className="flex flex-col gap-y-3">
                        <div className="input input-single relative border-none">
                          <button className="input-button">
                            <div className="flex items-center gap-x-2">
                              <span>Betal med kort</span>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <BookingOverview />

        <div className="fixed bottom-0 left-0 w-full transition-all duration-[400ms] z-[1]">
          <div className="bottom-bar relative border-t border-gray-200 bg-white p-4 lg:py-6 before:absolute before:top-[-41px] before:left-0 before:h-[40px] before:w-full before:pointer-events-none">
            <div className="flex justify-between items-center gap-x-4">
              <div className="relative max-lg:transition-opacity md:ml-auto opacity-100 max-md:w-full">
                <button className="body w-full rounded-full font-semibold leading-none md:w-auto md:px-10 md:transition max-md:transition-opacity h-[52px] opacity-40 bg-theme text-white hover:lg:bg-theme-80">
                  <span className="flex items-center gap-x-[7px] justify-center">Tilføj betalingsmetode for at bekræfte bookingen</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
