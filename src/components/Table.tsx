import React, { Fragment } from "react";
import classNames from "classnames";

export type DataProps = {
  data: { name: string; color: string; score: number }[];
  config: {
    label: string;
    id: number;
    render: (item: {
      name: string;
      color: string;
      score: number;
    }) => string | number | JSX.Element;
    sortValue: (fruit: { name: string; score: number }) => string | number;
    header?: () => JSX.Element;
  }[];
};

const Table = ({ data, config }: DataProps) => {
  const renderedHeaders = config.map((column) => {
    if (column.header) {
      return <Fragment key={column.label}>{column.header()}</Fragment>;
    }
    return <th key={column.label}>{column.label}</th>;
  });

  const renderedData = data.map((item) => {
    const classCell = classNames("border-b-2 w-32 p-3");
    const renderedCells = config.map((cell) => {
      return (
        <td key={cell.id} className={classCell}>
          {cell.render(item)}
        </td>
      );
    });
    return (
      <tr className="text-center" key={item.name}>
        {renderedCells}
      </tr>
    );
  });

  return (
    <table className="border-spacing-2">
      <thead>
        <tr className="text-center border-b-[4px] border-b-black">
          {renderedHeaders}
        </tr>
      </thead>
      <tbody>{renderedData}</tbody>
    </table>
  );
};

export default Table;
