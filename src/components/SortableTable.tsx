import React, { Fragment } from "react";
import Table from "./Table";
import { DataProps } from "./Table";
import { BsCaretDown, BsCaretUp } from "react-icons/bs";
import { useSort } from "../hooks/useSort";
const SortableTable = (props: DataProps) => {
  const { config, data } = props;
  const { sortBy, sortedData, sortOrder, sortColumnByLabel } = useSort(
    {data,
    config,}
  );
  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }
    return {
      ...column,
      header: () => (
        <th
          className="cursor-pointer hover:bg-gray-300"
          onClick={() => sortColumnByLabel(column.label)}
        >
          <div className="flex items-center ">
            <div className="pl-4">
              {getIcons(column.label, sortBy, sortOrder)}
            </div>
            <div className="pr-4">{column.label} Is Sortable</div>
          </div>
        </th>
      ),
    };
  });

  const getIcons = (
    label: string,
    sortBy: string | number | null,
    sortOrder: string | null
  ) => {
    if (label !== sortBy) {
      return (
        <div>
          <BsCaretUp /> <BsCaretDown />
        </div>
      );
    }
    if (sortOrder === null) {
      return (
        <Fragment>
          <BsCaretUp /> <BsCaretDown />
        </Fragment>
      );
    } else if (sortOrder === "asc") {
      return <BsCaretUp />;
    } else if (sortOrder === "desc") {
      return <BsCaretDown />;
    }
  };
  return <Table {...props} data={sortedData} config={updatedConfig} />;
};

export default SortableTable;
