import { useState } from "react";
import { DataProps } from "../components/Table";
export const useSort = ({ data, config }: DataProps) => {
  const [sortOrder, setSortOrder] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<string | number | null>(null);
  const sortColumnByLabel = (label: string) => {
    if (sortBy && label !== sortBy) {
      setSortOrder("asc");
      setSortBy(label);
      return;
    }
    if (sortOrder === null) {
      setSortOrder("asc");
      setSortBy(label);
    } else if (sortOrder === "asc") {
      setSortOrder("desc");
      setSortBy(label);
    } else {
      setSortOrder(null);
      setSortBy(null);
    }
  };
  let sortedData = data;
  if (sortBy && sortOrder) {
    const { sortValue }: any = config.find((column) => column.label === sortBy);
    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);
      const reverseOrder = sortOrder === "asc" ? 1 : -1;
      if (typeof valueA === "string") {
        return valueA.localeCompare(valueB) * reverseOrder;
      } else {
        return (valueA - valueB) * reverseOrder;
      }
    });
  }
  return { sortBy, sortOrder, sortColumnByLabel, sortedData };
};
