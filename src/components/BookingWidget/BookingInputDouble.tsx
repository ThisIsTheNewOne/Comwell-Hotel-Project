import { useContext, useEffect, useState } from "react";
import Drawer from "react-modern-drawer";
import CalendarContainer from "../Calendar/CalendarContainer";
import BookingContext from "@/hooks/useContext/BookingContext";
import { CalendarInput } from "@/types/Booking";

interface Props {
  bookingInputProps: CalendarInput[];
  disableDates: (string | Date)[]
}

type VacancyDTO = {
  id: string,
  gaps: string[],
  price: number
}

type findAllVacanciesByRoomDTO = {
  startDate: Date;
  hotelId: string;
}

function dateDiffInDays(date1: Date, date2: Date): number {
  const oneDay = 24 * 60 * 60 * 1000; // hours * minutes * seconds * milliseconds

  // Calculate the difference in milliseconds
  const diffInMilliseconds = Math.abs(date1.getTime() - date2.getTime());

  // Convert the difference to days
  const diffInDays = Math.round(diffInMilliseconds / oneDay);

  return diffInDays;
}


const BookingInputDouble = (props: Props) => {
  const { bookingInputProps, disableDates } = props;
  const [vacancies, setVacancies] = useState([] as string[]);
  const [cheapestRoom, setCheapestRoom] = useState<VacancyDTO>()
  const [currentDate, setCurrentDate] =useState(new Date())
  
  const { selectedHotel, checkIn, checkOut } = useContext(BookingContext);

  useEffect(() => {
    if(!selectedHotel) { return }

    const data = {
      startDate: currentDate,
      hotelId: selectedHotel._id
    } as findAllVacanciesByRoomDTO

    fetch("http://localhost:3006/" + "booking/room/vacancies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data),
    }).then(async (res) => {
        const dataVacancies: VacancyDTO[] = await res.json();
        const allduplicateDates = ([] as string[]).concat(...dataVacancies.map(x => x.gaps))
        setVacancies([... new Set(allduplicateDates)]);
        setCheapestRoom(dataVacancies.reduce((acc, loc) => acc.price < loc.price ? acc : loc))
      }).catch((err) => console.log(err));
  }, [selectedHotel, currentDate])
  const { setCheckIn, setCheckOut, isOpenCalendarDrawer, setIsCalendarDrawer } = useContext(BookingContext);

  const doesDrawerExist = true;
  // const [isOpenCalendarDrawer, setIsCalendarDrawer] = useState(false);

  const openDrawer = () => {
    console.log("Hotel list drawer open");
    setIsCalendarDrawer(true);
  };

  const closeDrawer = () => {
    setIsCalendarDrawer(false);
  };


  return (
    <div>
      <div
        className="flex border-[1px] border-gray-300 pl-[12px] cursor-pointer rounded-[4px] hover:border-black"
        onClick={openDrawer}
      >
        {bookingInputProps.map((input, index) => (
          <div key={index}>
            <div className="flex flex-row items-center px-[12px]">
              <div>
                <label className="font-medium mt-[3px] tracking-[-.05em] opacity-[.67]">
                  {input.label}
                </label>
                <input
                  type={input.type}
                  className="w-full font-bold leading-none focus:outline-none focus:ring-0 mb-[5px] cursor-pointer"
                  placeholder={input.placeholder}
                />
              </div>

              <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" className="w-[25px] rotate-180"><path stroke="currentColor" stroke-width="1.5" d="M16.666 12.916 10 6.666l-6.667 6.25"></path></svg></div>
            </div>
          </div>
        ))}
      </div>
      {doesDrawerExist && (
        <Drawer
          className="hotelListDrawer z-[100]"
          open={isOpenCalendarDrawer}
          onClose={closeDrawer}
          direction="right"
          size={390}
        >
          <CalendarContainer
            setCheckIn={setCheckIn}
            setCheckOut={setCheckOut}
            enableDates={vacancies}
            monthChange={(year, month)=> {
              const date = new Date()
              date.setFullYear(year, month)
              setCurrentDate(date)
            }} />
          <div>
            {
              checkIn.date[0] && checkOut.date[0] && checkIn.date[0]!==checkOut.date[0] ? 
              "Cost:" + (dateDiffInDays(checkOut.date[0], checkIn.date[0]) * (cheapestRoom?.price ?? 0))
              : null 
            }
          </div>
        </Drawer>
      )}
    </div>
  );
};

export default BookingInputDouble;
