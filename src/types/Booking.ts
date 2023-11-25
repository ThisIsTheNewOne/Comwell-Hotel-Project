export type CalendarVariable = {
  type: string;
  date: Date[];
};

export type CalendarInput = {
  label: string;
  placeholder: string;
  type: string;
};

export type RoomList = {
  label: string;
  guests: {
    label: string;
    amount: number;
  }[];
};

export const guestTypes = ["Adults", "Children", "Infants"];


export type HotelList = {
  hotelName: string;
  city: string;
} 
