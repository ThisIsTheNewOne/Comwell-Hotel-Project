import { User } from "@/types/Booking";

  export const currentUser: User | null = typeof window !== 'undefined'
  ? (localStorage.getItem("currentUser")
    ? JSON.parse(localStorage.getItem("currentUser") as string)
    : null)
  : null;