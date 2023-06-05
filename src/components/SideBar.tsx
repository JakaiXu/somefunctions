import React from "react";
import Link from "./Link";

const SideBar = () => {
  const links = [
    {
      label: "Dropdown",
      path: "/",
    },
    {
      label: "Accordion",
      path: "/accordion",
    },
    {
      label: "Button",
      path: "/button",
    },
    {
      label: "Modal",
      path: "/modal",
    },
    {
      label: "Table",
      path: "/table",
    },
    {
      label: "Counter",
      path: "/counter",
    },
  ];
  const renderdLinks = links.map((link) => {
    return (
      <Link
        to={link.path}
        key={link.label}
        className="mb-3"
        activeClassName="font-bold border-l-4 border-blue-400 pl-2"
      >
        {link.label}
      </Link>
    );
  });
  return (
    <div className="flex flex-col items-start sticky top-0 m-3 w-1/5 ">{renderdLinks}</div>
  );
};

export default SideBar;
