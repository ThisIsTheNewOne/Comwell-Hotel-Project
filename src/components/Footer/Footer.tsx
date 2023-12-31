import Link from "next/link";
import React, { useContext } from "react";
import ContactInfo from "../molecules/ContactInfo";
import contactInfoFooter from "../../data/contactInfoFooter.json";
import SubFooter from "./SubFooter";
import contactInfoFooterEN from "../../data/contactInfoFooterEN.json";
import LocalizedLink from "../molecules/LocalizedLink";
import LanguageContext from "@/hooks/useContext/LanguageContext";

const Footer: React.FC = () => {
  const { selectedValue } = useContext(LanguageContext);

  const footerPages = [ 
    "Hotels",
    "Packages",
    "Meeting & Conference",
    "Restaurant & Events",
    "Spa",
    "Contact",
  ];

  const footerPagesDa = [
    "Hoteller",
    "Pakker",
    "Møde & Konference",
    "Restaurant & Events",
    "Spa",
    "Kontakt",
  ];

  const footerList = selectedValue.value === "da" ? footerPagesDa : footerPages;
  const contactInfo =
    selectedValue.value === "da" ? contactInfoFooter : contactInfoFooterEN;

  return (
    <footer className="h-max bg-theme text-theme-80 lg:min-h-[680px] lg:pb-0 text-white flex flex-col  font-semibold">
      <div className="bg-theme-80 pt-16 pl-14 pr-12 text-white lg:pt-edge">
        <div className="lg:grid-comwell max-lg:gap-y-[40px] flex h-max flex-col lg:min-h-[600px]">
          <nav className="max-lg:hidden group col-span-4 h-max">
            <ul className="contents">
              {footerList.map((page, index) => (
                <li key={index}>
                  <LocalizedLink
                    className="text-heading-lg  block py-4 transition first:pt-0 leading-8 hover:!opacity-100 group-hover:opacity-40"
                    href={`/${page.trim().toLowerCase().replace(/ & | /g, "-and-")}`}
                  >
                    {page}
                  </LocalizedLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className="col-span-8 lg:flex max-lg:space-y-10">
            <div className="flex flex-col text-sm">
              <div className=" mb-1 text-sm">CONTACT</div>
              {contactInfo.map((contact, index) => (
                <div key={index}>
                  <h1 className="mb-2 mt-2">{contact.header}</h1>
                  <ContactInfo contactInfo={contact.body}></ContactInfo>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <SubFooter />
    </footer>
  );
};

export default Footer;
