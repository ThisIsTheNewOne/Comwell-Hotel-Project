import { useState, useEffect } from 'react';
import { User } from "@/types/Booking";

export function useCurrentUser() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
  }, []);
 
  return currentUser;
}
