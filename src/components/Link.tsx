import React from "react";
import classNames from "classnames";
import { useNavigationContext } from "../hooks/use-context";

interface LinkProps {
  to: string;
  children: React.ReactNode;
  className: string;
  activeClassName:string
}

const Link = ({ to, children, className ,activeClassName}: LinkProps) => {
  const { navigate,currentPath } = useNavigationContext();
  const classes = classNames("text-blue font-bold", className,
  currentPath === to && activeClassName);
  
  const handleClick = (e: any) => {

    if (e.metaKey || e.ctrlKey) {
      return;
    }
    e.preventDefault();
    navigate(to);
  };
  return (
    <a href={to} onClick={handleClick} className={classes}>
      {children}
    </a>
  );
};

export default Link;
