import "flatpickr/dist/themes/dark.css";
import Flatpickr from "react-flatpickr";
import { Component } from "react";
import { CalendarVariable } from "@/types/Booking";

interface State {
  date: Date[];

}

interface Props {
  setCheckIn: (checkIn: CalendarVariable) => void;
  setCheckOut: (checkOut: CalendarVariable) => void;
  disableDates: (string | Date)[]
}

class CalendarContainer extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      date: [new Date(), new Date()],
    };
  }

  render() {
    const { date } = this.state;

    const tryFunction = (date: any) => {
      this.setState({ date });
      const date1 = date[0] as Date;
      const date2 = date[1] as Date;

      if (date.length === 1) {
        // console.log("This is the date", date)
        this.props.setCheckIn({ type: "checkIn", date: [date1] });
        this.props.setCheckOut({ type: "checkOut", date: [] });
      } else if (date.length === 2) {
        // console.log("This is the date", date)
        this.props.setCheckOut({ type: "checkOut", date: [date2] });
      }
    };

    return (
      <Flatpickr
        // data-enable-time
        options={{
          mode: "range",
          minDate: "today",
          dateFormat: "Y-m-d",
            disable: this.props.disableDates, //disables specific dates
          inline: true,
           onDayCreate: (dObj, dStr, fp, dayElem) => {
            // You can fetch the price based on the date (dStr) from your server
            // For simplicity, let's just use a random price for now
            const price = Math.floor(Math.random() * 100) + 50;
            dayElem.innerHTML += `</b><span class="price"> ${price}</span>`;
          },
        }}
        value={date}
        // onChange={date => {
        //     this.setState({ date });
        //   }}
        onChange={(date) => tryFunction(date)}
      />
    );
  }
}

export default CalendarContainer;
