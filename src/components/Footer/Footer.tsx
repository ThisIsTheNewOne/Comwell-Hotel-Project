import Link from "next/link";
import React from "react";
import ContactInfo from "../molecules/ContactInfo";
import contactInfoFooter from "../../data/contactInfoFooter.json";
import SubFooter from "./SubFooter";

const Footer: React.FC = () => {
  const footerPages = [
    "Hotels",
    "Packages",
    "Meeting & Conference",
    "Restaurant & Events",
    "Spa",
    "Contact",
  ];

  const contactInfo = contactInfoFooter;

  return (
    <footer className="bg-theme text-theme-80 lg:min-h-[680px] lg:pb-0 text-white flex flex-col font-felix">
      <div className="grid-edge bg-theme-80 pt-10 pl-10 text-white lg:pt-edge">
        <div className="flex max-lg:gap-y-[40px] h-max  lg:min-h-[600px]">
          <div className="max-lg:hidden group col-span-4 h-max">
            {footerPages.map((page, index) => (
              <li key={index} className="list-none">
                <Link href={`/${page.toLowerCase().replace(/ & | /, "-and-")}`}>
                  <h1>{page}</h1>
                </Link>
              </li>
            ))}
          </div>

          <div className="flex flex-col">
            {contactInfo.map((contact, index) => (
              <ContactInfo key={index} contactInfo={contact}></ContactInfo>
            ))}
          </div>
        </div>
      </div>

      <SubFooter />
    </footer>
  );
};

export default Footer;
