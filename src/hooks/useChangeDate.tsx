import { CalendarInput, CalendarVariable } from "@/types/Booking";

interface Props {
    checkIn: CalendarVariable;
    checkOut: CalendarVariable;
    }

export const useChangeDate = (props:Props): readonly [CalendarInput[]] => {

    const { checkIn, checkOut } = props

    let calendarInput = [
      { label: "Check ind", placeholder: "19.nov.", type: "text" },
      { label: "Check ud", placeholder: "20.nov.", type: "text" },
    ];
  
    const checkInValue = checkIn.date[0] !== undefined ? checkIn.date[0].toLocaleDateString() : "";
    const checkOutValue = checkOut.date[0] !== undefined ? checkOut.date[0].toLocaleDateString(): "";

    calendarInput = calendarInput.map(input => {
      if (input.label === "Check ind") {
        return { ...input, placeholder: checkInValue };
      } else if (input.label === "Check ud") {
        return { ...input, placeholder: checkOutValue };
      } else {
        return input;
      }
    });
  

  return [calendarInput] as const;
};
