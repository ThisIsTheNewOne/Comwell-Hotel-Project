import { useRouter } from "next/router";
import { createContext, useState } from "react";

const LanguageContext = createContext({
  selectedValue: { value: "en", label: "English" } as language,
  setSelectedValue: (selectedValue: language) => {},
  languages: [] as language[],
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

  return (
    <LanguageContext.Provider
      value={{
        selectedValue,
        setSelectedValue,
        languages,
      }}
    >
      {props.children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
