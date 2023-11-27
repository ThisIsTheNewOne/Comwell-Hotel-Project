import BookingContext from "@/hooks/useContext/BookingContext";
import { useContext } from "react";

const BookingHotel = () => {
    const { selectedHotel } = useContext(BookingContext);

  return (
    <div className="summaryInfo whitespace-nowrap border-r pr-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="h-[16px] w-[16px]"
      >
        <g fill="currentColor">
          <path d="M12 13.5A3.75 3.75 0 1 1 12 6a3.75 3.75 0 0 1 0 7.5zm0-6a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5z"></path>
          <path d="m12 22.5-6.327-7.462a26.911 26.911 0 0 1-.26-.338A8.167 8.167 0 0 1 3.75 9.75a8.25 8.25 0 1 1 16.5 0 8.163 8.163 0 0 1-1.661 4.948l-.001.002s-.225.296-.259.335zm-5.39-8.704s.174.231.214.281L12 20.181l5.183-6.113.209-.274A6.676 6.676 0 0 0 18.75 9.75a6.75 6.75 0 0 0-13.5 0 6.68 6.68 0 0 0 1.36 4.046z"></path>
        </g>
      </svg>
      <span>{selectedHotel?.name}</span>
    </div>
  );
};

export default BookingHotel;
