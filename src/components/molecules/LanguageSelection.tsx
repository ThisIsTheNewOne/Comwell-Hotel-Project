import React, { useContext, useState } from "react";
import Select from "react-select";
import { useRouter } from "next/router";
import LanguageContext from "@/hooks/useContext/LanguageContext";



const LanguageSelection: React.FC = () => {
  const { selectedValue, setSelectedValue, languages } = useContext(LanguageContext);
  
  const router = useRouter();

  const handleChange = (selectedOption: any) => {
    setSelectedValue(selectedOption);
    if (selectedOption.value !== "da") {
      router.push(`/${selectedOption.value}`);
    } else {
      router.push(`/`);
    }
  };
 
  return (
    <div>
      <Select
        className="basic-single"
        classNamePrefix="select"
        defaultValue={languages[0]}
        name="language"
        options={languages}
        onChange={handleChange}
        value={selectedValue}
      />
    </div>
  );
};

export default LanguageSelection;
