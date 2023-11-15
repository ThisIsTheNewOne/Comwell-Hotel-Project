import LanguageContext from "@/hooks/useContext/LanguageContext";
import Link from "next/link";
import { useContext } from "react";

const LocalizedLink: React.FC<React.ComponentProps<typeof Link>> = ({
  href,
  ...props
}) => {
  const { selectedValue } = useContext(LanguageContext);
  const language = selectedValue.value === "da" ? "" : selectedValue.value;

  const localizedHref = `/${language}${
    href.toString().startsWith("/") ? "" : "/"
  }${href}`;

  return <Link {...props} href={localizedHref} />;
};

export default LocalizedLink;
