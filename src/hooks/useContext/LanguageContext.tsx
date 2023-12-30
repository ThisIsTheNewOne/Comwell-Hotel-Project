import { Currency } from "@/types/Booking";
import { useRouter } from "next/router";
import { createContext, useState } from "react";

const LanguageContext = createContext({
  selectedValue: { value: "en", label: "English" } as language,
  setSelectedValue: (selectedValue: language) => {},
  languages: [] as language[],
  currency: "DKK" as Currency
});

type language = {
  value: string;
  label: string;
};

interface LanguageContextProviderProps {
  children: React.ReactNode;
}
export const LanguageContextProvider: React.FC<LanguageContextProviderProps> = (
  props: LanguageContextProviderProps
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

  const currency = "DKK" as Currency

  return (
    <LanguageContext.Provider
      value={{
        selectedValue,
        setSelectedValue,
        languages,
        currency
      }}
    >
      {props.children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
