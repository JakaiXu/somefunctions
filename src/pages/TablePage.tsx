import React from "react";

import SortableTable from "../components/SortableTable";
type DataProp = {
  name: string;
  color: string;
  score: number;
};
type Fruit = {
  name: string;
  score: number; };
const TablePage = () => {
  const data = [
    { name: "Orange", color: "bg-orange-500", score: 5 },
    { name: "Apple", color: "bg-red-500", score: 3 },
    { name: "Banana", color: "bg-yellow-500", score: 1 },
    { name: "Lime", color: "bg-green-500", score: 4 },
  ];
  const config = [
    {
      label: "Name",
      id: 1,
      render: (item: DataProp) => item.name,
      sortValue: (fruit: Fruit) => fruit.name,
    },
    {
      label: "Color",
      id: 2,
      render: (item: DataProp) => (
        <div className={`w-4 h-4 ml-6 ${item.color}`}></div>
      ),
      sortValue: (fruit: Fruit) => fruit.name,
    },
    {
      label: "Score",
      id: 3,
      render: (item: DataProp) => item.score,
      sortValue: (fruit: Fruit) => fruit.score,
    },
  ];
  return (
    <div>
      <SortableTable data={data} config={config} />
    </div>
  );
};

export default TablePage;
