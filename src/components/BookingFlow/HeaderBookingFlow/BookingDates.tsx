import { useChangeDate } from "@/hooks/useChangeDate";
import BookingContext from "@/hooks/useContext/BookingContext";
import { useContext } from "react";

const BookingDates = () => {
  const { checkIn, checkOut } = useContext(BookingContext);
  const [calendarInput] = useChangeDate({ checkIn, checkOut });

  return (
    <div className="summaryInfo whitespace-nowrap border-r pr-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="h-[16px] w-[16px]"
      >
        <path
          fill="#161616"
          d="M19.5 3h-3V1.5H15V3H9V1.5H7.5V3h-3C3.675 3 3 3.675 3 4.5v15c0 .825.675 1.5 1.5 1.5h15c.825 0 1.5-.675 1.5-1.5v-15c0-.825-.675-1.5-1.5-1.5Zm0 16.5h-15V9h15v10.5Zm0-12h-15v-3h3V6H9V4.5h6V6h1.5V4.5h3v3Z"
        ></path>
      </svg>
      {/* <span>{checkIn} - 11. dec</span> */}
      {calendarInput.map((date, index) => (
        <div key={index}>
          <span>{date.placeholder}</span>
        </div>
      ))}
    </div>
  );
};

export default BookingDates;
