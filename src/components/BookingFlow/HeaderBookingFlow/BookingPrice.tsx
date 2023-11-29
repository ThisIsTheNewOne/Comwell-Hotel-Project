import React, { useContext } from "react";
import BookingContext from "@/hooks/useContext/BookingContext";
import LanguageContext from "@/hooks/useContext/LanguageContext";
import { usePriceFormatter } from "@/hooks/usePriceFormatter";

const BookingPrice = () => {
  const { selectedPackage } = useContext(BookingContext);
  const { currency } = useContext(LanguageContext);
  const [formatNumber] = usePriceFormatter();

  const price = selectedPackage !== null ? selectedPackage : 0;
  const calculatedPriceFormatted = formatNumber(price)

  return (
    <>
      <div className="price">
        <span>{calculatedPriceFormatted}</span>
        <span>{currency}</span>
      </div>
      <div className="bedicon flex h-[36px] w-[36px] items-center justify-center rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
          className="w-[20px]"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M5.625 3.125A.625.625 0 0 0 5 3.75v4.375h1.875v-2.5c0-.69.56-1.25 1.25-1.25h3.75c.69 0 1.25.56 1.25 1.25v2.5H15V3.75a.625.625 0 0 0-.625-.625h-8.75Zm7.5 6.25H4.617l-.833 2.5h12.432l-.833-2.5h-2.258Zm-1.25-1.25v-2.5h-3.75v2.5h3.75Zm-8.125 5v2.5h12.5v-2.5H3.75Zm0 5v-1.25h12.5v1.25h1.25v-6.351l-1.25-3.75V3.75c0-1.036-.84-1.875-1.875-1.875h-8.75c-1.036 0-1.875.84-1.875 1.875v4.274l-1.25 3.75v6.351h1.25Z"
            clipRule="evenodd"
          ></path>
        </svg>
      </div>
    </>
  );
};

export default BookingPrice;
