import { useRouter } from "next/router";
import { createContext, useState } from "react";

const BookingContext = createContext({
  selectedValue: { value: "en", label: "English" } as language,
  setSelectedValue: (selectedValue: language) => {},
  languages: [] as language[],
});

type language = {
  value: string;
  label: string;
};

interface BookingContextProviderProps {
  children: React.ReactNode;
}
export const BookingContextProvider: React.FC<BookingContextProviderProps> = (
  props: BookingContextProviderProps
) => {
  const languages = [
    {
      value: "en",
      label: "English",
    },
    {
      value: "da",
      label: "Danish",
    },
  ];


  const router = useRouter();
  const firstPartOfPath = router.asPath.split("/")[1];
  let initialLanguage;

  if (firstPartOfPath === "en") {
    initialLanguage = {
      value: "en",
      label: "English",
    };
  } else {
    initialLanguage = {
      value: "da",
      label: "Danish",
    };
  }

  const [selectedValue, setSelectedValue] = useState(
    initialLanguage as language
  );

  return (
    <BookingContext.Provider
      value={{
        selectedValue,
        setSelectedValue,
        languages,
      }}
    >
      {props.children}
    </BookingContext.Provider>
  );
};

export default BookingContext;
