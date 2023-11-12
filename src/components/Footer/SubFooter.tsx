import React from "react";
import SocialMediaInfo from "../molecules/SocialMediaInfo";
import LanguageSelection from "../Header/LanguageSelection";

const SubFooter: React.FC = () => {
  const socialMediaInfo = [
    {
      img: "facebook",
      title: "facebook",
    },
    {
      img: "instagram",
      title: "instagram",
    },
    {
      img: "twitter",
      title: "twitter",
    },
    {
      img: "youtube",
      title: "youtube",
    },
  ];

  return (
    <div className="bg-theme2 flex  min-h-[80px] justify-between ">
      <div> COMWELL IMG</div>

      <div className="flex">
      {socialMediaInfo.map((social, index) => (
        <SocialMediaInfo key={index} socialMediaInfo={social} />
      ))}
      </div>

      <LanguageSelection />
    </div>
  );
};

export default SubFooter;
