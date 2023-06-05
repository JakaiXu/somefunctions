import React, { useState, useEffect, useRef } from "react";
import { BsCaretDown, BsCaretLeft } from "react-icons/bs";
import Panel from "./Panel";
type Options = {
  options: { label: string; value: string }[];
  onChange: (_: string) => void;
  value: string | null;
};
const DropDown = ({ options, onChange, value }: Options) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const handleOptionClick = (label: string) => {
    onChange(label);

    setIsOpen(false);
  };

  const divEl = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handler = (e: any) => {
      if (!divEl.current) {
        return;
      } else if (!divEl.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handler, true);
  }, []);
  const renderedList = options.map((option) => (
    <div
      key={option.label}
      onClick={() => handleOptionClick(option.label)}
      className=" hover:bg-gray-300"
    >
      {option.value}
    </div>
  ));

  return (
    <div ref={divEl}>
      <Panel
        onClick={handleClick}
        className="flex justify-between items-center cursor-pointer"
      >
        {value || "Select a Color"}
        <i className="inline-block">
          {isOpen ? <BsCaretDown /> : <BsCaretLeft />}
        </i>
      </Panel>
      <Panel className="cursor-pointer" onClick={handleClick}>
        {isOpen && <div>{renderedList}</div>}
      </Panel>
    </div>
  );
};

export default DropDown;
