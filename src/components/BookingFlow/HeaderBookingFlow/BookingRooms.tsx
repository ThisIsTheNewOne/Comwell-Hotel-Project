import BookingContext from "@/hooks/useContext/BookingContext";
import { useContext } from "react";

const BookingRooms = () => {
  const { roomsNumber, totalGuests } = useContext(BookingContext);

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
          d="M12.5 3a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5Zm0-1.5a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5ZM20 22.5h-1.5v-3.75A3.75 3.75 0 0 0 14.75 15h-4.5a3.75 3.75 0 0 0-3.75 3.75v3.75H5v-3.75a5.25 5.25 0 0 1 5.25-5.25h4.5A5.25 5.25 0 0 1 20 18.75v3.75Z"
        ></path>
        <path fill="#000" d="M19 21v1.5H6V21z"></path>
      </svg>
      <span>{`${roomsNumber} Værelse, ${totalGuests} Person`}</span>
    </div>
  );
};

export default BookingRooms;
