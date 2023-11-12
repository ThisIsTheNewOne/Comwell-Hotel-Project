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
    <div>
      <div> COMWELL IMG</div>

      {socialMediaInfo.map((social, index) => (
        <SocialMediaInfo key={index} socialMediaInfo={social} />
      ))}

      <LanguageSelection />
    </div>
  );
};

export default SubFooter;
