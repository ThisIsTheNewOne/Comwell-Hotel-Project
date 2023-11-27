import React, { useContext, useState } from "react";
import BookingOverview from "./bookingOverview";
import CreditCard from "./CreditCard";
import BookingContext from "@/hooks/useContext/BookingContext";

const Payment: React.FC = () => {
  // All of the state
  const [showCreditCard, setShowCreditCard] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [isCreditCardValid, setIsCreditCardValid] = useState(false);
  const { postBooking } = useContext(BookingContext);

  const toggleCreditCardVisibility = () => {
    setShowCreditCard(!showCreditCard);
    setIsSelected(!isSelected);
  };

  const handleCardValidation = (isValid: boolean) => {
    setIsCreditCardValid(isValid);
  };

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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="w-[15px]"
                    >
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 16 16"
                      className="w-[15px]"
                    >
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
                  <button className="absolute top-4 right-4 underline text-theme text-sm font-[500]">
                    Rediger
                  </button>
                </div>
              </li>
              <li className="row-span-1 col-span-full">
                <div className="border rounded-[10px] px-3 py-4 grid grid-cols-[48px,1fr] gap-x-5">
                  <div className="rounded-full bg-theme-20 w-[36px] h-[36px] flex items-center justify-center mx-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="w-[15px]"
                    >
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
              <p>
                - For at garantere din reservation beder vi dig om dine
                kreditkortoplysninger
              </p>
              <p>- Ved bestilling reserverer vi op til kr. 500,- på dit kort</p>
              <p>
                - Du vil kun blive opkrævet, hvis du ikke møder op på hotellet
              </p>
              <p>
                - Du vil ikke blive opkrævet, medmindre andet er angivet. Du
                betaler dit ophold på hotellet
              </p>
            </div>
          </div>

          <div className="order-3 lg:order-5">
            <h1>Betalingsmetode</h1>
            <div className="min-h-[150px] mt-4">
              <div className="flex flex-col gap-y-4">
                <ul className="flex flex-col gap-y-2">
                  <li className="flex flex-col gap-y-4 border rounded-[5px] border-grey py-2 px-3">
                    <div>
                      <div className="flex flex-col gap-y-3">
                        <div className="input input-single relative border-none">
                          <button
                            className="input-button"
                            onClick={toggleCreditCardVisibility}
                          >
                            <div className="flex items-center gap-x-2">
                              <span>Betal med kort</span>
                              <ul className="flex items-center gap-x-2">
                                <li>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="40"
                                    height="28"
                                    fill="none"
                                  >
                                    <rect
                                      width="39"
                                      height="27"
                                      x=".5"
                                      y=".5"
                                      fill="#fff"
                                      rx="5.5"
                                    ></rect>
                                    <path
                                      fill="#172B85"
                                      fillRule="evenodd"
                                      d="M12 18.43H9.577L7.76 11.448c-.086-.321-.27-.605-.539-.739A7.848 7.848 0 0 0 5 9.97v-.269h3.904c.538 0 .942.404 1.01.873l.943 5.036 2.422-5.909h2.355L12 18.43Zm4.98 0H14.69l1.885-8.729h2.288L16.98 18.43Zm4.846-6.31c.067-.47.471-.74.942-.74a4.238 4.238 0 0 1 2.222.403l.404-1.88a5.757 5.757 0 0 0-2.087-.403c-2.221 0-3.837 1.209-3.837 2.887 0 1.277 1.145 1.947 1.953 2.35.874.403 1.21.672 1.143 1.075 0 .604-.673.872-1.345.872-.808 0-1.617-.2-2.356-.537l-.404 1.88c.808.335 1.682.47 2.49.47 2.49.067 4.039-1.141 4.039-2.954 0-2.283-3.164-2.417-3.164-3.424Zm11.172 6.31-1.817-8.729H29.23c-.404 0-.809.27-.943.672l-3.365 8.057h2.356l.47-1.275h2.895l.269 1.275h2.087Zm-3.43-6.378.672 3.29h-1.884l1.212-3.29Z"
                                      clipRule="evenodd"
                                    ></path>
                                    <rect
                                      width="39"
                                      height="27"
                                      x=".5"
                                      y=".5"
                                      stroke="#E0E0E0"
                                      rx="5.5"
                                    ></rect>
                                  </svg>
                                </li>
                                <li>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="40"
                                    height="28"
                                    fill="none"
                                  >
                                    <rect
                                      width="39"
                                      height="27"
                                      x=".5"
                                      y=".5"
                                      fill="#fff"
                                      rx="5.5"
                                    ></rect>
                                    <path
                                      fill="#ED0006"
                                      fillRule="evenodd"
                                      d="M20 19.517a7.266 7.266 0 0 1-4.722 1.733C11.258 21.25 8 18.004 8 14s3.258-7.25 7.278-7.25c1.802 0 3.452.653 4.723 1.733a7.266 7.266 0 0 1 4.722-1.733c4.02 0 7.278 3.246 7.278 7.25s-3.258 7.25-7.278 7.25a7.266 7.266 0 0 1-4.722-1.733Z"
                                      clip-rule="evenodd"
                                    ></path>
                                    <path
                                      fill="#F9A000"
                                      fillRule="evenodd"
                                      d="M20 19.517A7.223 7.223 0 0 0 22.555 14 7.223 7.223 0 0 0 20 8.483a7.266 7.266 0 0 1 4.723-1.733C28.743 6.75 32 9.996 32 14s-3.259 7.25-7.278 7.25A7.266 7.266 0 0 1 20 19.517Z"
                                      clipRule="evenodd"
                                    ></path>
                                    <path
                                      fill="#FF5E00"
                                      fillRule="evenodd"
                                      d="M19.993 19.517a7.223 7.223 0 0 0 2.555-5.516 7.223 7.223 0 0 0-2.555-5.517 7.222 7.222 0 0 0-2.555 5.517c0 2.209.991 4.187 2.555 5.516Z"
                                      clipRule="evenodd"
                                    ></path>
                                    <rect
                                      width="39"
                                      height="27"
                                      x=".5"
                                      y=".5"
                                      stroke="#E0E0E0"
                                      rx="5.5"
                                    ></rect>
                                  </svg>
                                </li>
                              </ul>
                            </div>
                            <div
                              className={
                                isSelected
                                  ? "card-check absolute right-2 top-1/2 flex h-[24px] w-[24px] -translate-y-1/2 items-center justify-center overflow-hidden rounded-full border text-white bg-black border-grey selected"
                                  : "card-check absolute right-2 top-1/2 flex h-[24px] w-[24px] -translate-y-1/2 items-center justify-center overflow-hidden rounded-full border text-white bg-black border-grey"
                              }
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 16 16"
                                className="w-[16px]"
                              >
                                <rect></rect>
                                <path
                                  fill="#fff"
                                  fillRule="evenodd"
                                  d="M6.668 10.6 3.134 7.067l-.733.666 3.533 3.534.734.733 7.067-7.067L13 4.2l-6.333 6.4Z"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                            </div>
                          </button>
                        </div>
                      </div>

                      <div
                        className={
                          showCreditCard
                            ? "creditCardSec my-2 mx-4"
                            : "creditCardSec hidden my-2 mx-4"
                        }
                      >
                        {showCreditCard && (
                          <CreditCard onCardValidation={handleCardValidation} />
                        )}
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
                <button
                  onClick={postBooking}
                  disabled={!isCreditCardValid}
                  className={
                    "body w-full rounded-full font-semibold leading-none md:w-auto md:px-10 md:transition max-md:transition-opacity h-[52px] " +
                    (isCreditCardValid
                      ? "bg-theme text-white hover:lg:bg-theme-80"
                      : "opacity-40 bg-theme text-white")
                  }
                >
                  <span className="flex items-center gap-x-[7px] justify-center">
                    Tilføj betalingsmetode for at bekræfte bookingen
                  </span>
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
