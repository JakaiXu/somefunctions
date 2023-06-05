import React, { useState, } from "react";
import DropDown from "../components/DropDown";
const options = [
  {
    label: "Red",
    value: "red",
  },
  {
    label: "Green",
    value: "green",
  },
  {
    label: "Blue",
    value: "blue",
  },
];

const DropDownPage = () => {
  const [selection, setSelection] = useState<string | null>(null);
  const onSelect = (label: string | null) => {
    setSelection(label);
  };
 
  return (
    <div className="m-6 shadow-xl">
      <DropDown options={options} onChange={onSelect} value={selection} />
    </div>
  );
};

export default DropDownPage;
