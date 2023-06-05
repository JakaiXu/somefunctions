import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import { useCounter } from "../hooks/useCounter";
type InitialCount = {
  initialCount: number;
};

const CounterPage = ({ initialCount }: InitialCount) => {
  const { count, handleClick } = useCounter(initialCount);
  return (
    <div>
      <h1>Count is {count}</h1>
      <button type="button" onClick={handleClick} className="border-2 px-2">
        Increment
      </button>
    </div>
  );
};

export default CounterPage;
