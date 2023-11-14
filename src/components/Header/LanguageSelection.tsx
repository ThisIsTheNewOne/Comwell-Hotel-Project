import React, { useState } from "react";
import Select from "react-select";
import { useRouter } from 'next/router';

type language = {
  value: string;
  label: string;
}

const LanguageSelection: React.FC = () => {
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

  const [selectedValue, setSelectedValue] = useState(languages[0] as language);
  const router = useRouter();

  const handleChange = (selectedOption: any) => {
    setSelectedValue(selectedOption);
    if(selectedOption.value !== 'da'){
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
