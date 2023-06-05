import React, { useState } from "react";
import { BsCaretLeft, BsCaretDown } from "react-icons/bs";
type Items = {
  items: { label: string; content: string }[];
};

const Accordion = ({ items }: Items) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleClick = (nextIndex: number) => {
    if (expandedIndex === nextIndex) {
      setExpandedIndex(null);
    } else setExpandedIndex(nextIndex);
  };

  const renderedList = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    const icon = (
      <span className="text-2xl">
        {isExpanded ? <BsCaretDown /> : <BsCaretLeft />}
      </span>
    );

    return (
      <div key={item.label} className="border-2">
        {" "}
        <div
          onClick={() => handleClick(index)}
          className="flex justify-between border font-bold bg-gray-200"
        >
          {item.label} {icon}
        </div>
        {isExpanded && <div className="text-gray-500">{item.content}</div>}
      </div>
    );
  });

  return <div>{renderedList}</div>;
};

export default Accordion;
