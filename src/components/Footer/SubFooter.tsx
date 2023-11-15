import React from "react";
import SocialMediaInfo from "../molecules/SocialMediaInfo";
import LanguageSelection from "../molecules/LanguageSelection"; 

const SubFooter: React.FC = () => {
  const socialMediaInfo = [
    {
      img: "fb",
      title: "facebook",
    },
    {
      img: "ig",
      title: "instagram",
    },
    {
      img: "li",
      title: "linkedin",
    },
  ];

  return (
    <div className="bg-theme2 flex  min-h-[80px] justify-between items-center pl-6 pr-6">

        <div> COMWELL IMG</div>

        <div className="flex justify-center">
          {socialMediaInfo.map((social, index) => (
            <SocialMediaInfo key={index} socialMediaInfo={social} />
          ))}
        </div>

        <LanguageSelection />
    
    </div>
  );
};

export default SubFooter;
