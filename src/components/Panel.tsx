import React from "react";
import classNames from "classnames";

type ChildrenProps = {
  children: React.ReactNode;
  className: string;
  onClick: () => void;
};

const Panel = ({ children, className, ...rest }: ChildrenProps) => {
  const finalClassNames = classNames(
    "border rounded p-3 shadow bg-white w-full",
    className
  );

  return (
    <div {...rest} className={finalClassNames}>
      {children}
    </div>
  );
};

export default Panel;
