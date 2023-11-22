import "flatpickr/dist/themes/dark.css";
import Flatpickr from "react-flatpickr";
import { Component } from "react";
import { CalendarVariable } from "../BookingWidget/BookingInputDouble";

interface State {
  date: Date[];
}

interface Props {
  setCheckIn: (checkIn: CalendarVariable) => void;
  setCheckOut: (checkOut: CalendarVariable) => void;
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
          //   disable: ["2025-01-30", "2025-02-21", "2025-03-08", new Date(2025, 4, 9) ], //disables specific dates
          inline: true,
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
