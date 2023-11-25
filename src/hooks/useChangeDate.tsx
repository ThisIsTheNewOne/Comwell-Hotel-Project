import { CalendarInput, CalendarVariable } from "@/types/Booking";

interface Props {
  checkIn: CalendarVariable;
  checkOut: CalendarVariable;
}

export const useChangeDate = (props: Props): readonly [CalendarInput[]] => {
  const { checkIn, checkOut } = props;

  let calendarInput = [
    { label: "Check ind", placeholder: "19.nov.", type: "text" },
    { label: "Check ud", placeholder: "20.nov.", type: "text" },
  ];

  // I want to know date for today and tomorrow

  const timeFormat = {
    day: "2-digit",
    month: "short",
  } as any;

  const today = new Date();
  const tomorrow = new Date(today);

  today.setDate(today.getDate());
  tomorrow.setDate(tomorrow.getDate() + 1);

  const todayString = today.toLocaleDateString("da-DK", timeFormat);
  const tomorrowString = tomorrow.toLocaleDateString("da-DK", timeFormat);

  const checkInValue =
    checkIn.date[0] !== undefined
      ? checkIn.date[0].toLocaleDateString("da-DK", timeFormat)
      : todayString;
  const checkOutValue =
    checkOut.date[0] !== undefined
      ? checkOut.date[0].toLocaleDateString("da-DK", timeFormat)
      : tomorrowString;

  calendarInput = calendarInput.map((input) => {
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
