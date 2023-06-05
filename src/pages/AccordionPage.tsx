import React from "react";
import Accordion from "../components/Accordion";


const AccordionPage = () => {
  const items = [
    {
      label: "Can I use React on a project?",
      content: "You can use React on Any projects",
    },
    {
      label: "Can I use JS on a project?",
      content: "You can use JS on Any projects",
    },
    {
      label: "Can I use c++ on a project?",
      content: "You can use c++ on Any projects",
    },
  ];

  return (
    <div className="border-2 border-black m-6">
      <Accordion items={items}/>
    </div>
  );
};

export default AccordionPage;
