export type CalendarVariable = {
  type: string;
  date: Date[];
};

export type CalendarInput = {
  label: string;
  placeholder: string;
  type: string;
};

export type Room = {
  label: string;
  adultGuests: number;
  childGuests: number;
  infantGuests: number;
  image: string;
  description:string;
  price: number;
  _id: string;
};
export const guestTypes = ["Adults", "Children", "Infants"];


export type Hotel = {
  _id:string;
  name: string;
  city: string;
  address: string;
} 


export type roomDetails = {
  roomSize: string;
  roomImage: string;
  roomName: string;
  roomDescription: string;
  price: number;
  }

  export type Currency = "DKK" | "EUR" | "USD";