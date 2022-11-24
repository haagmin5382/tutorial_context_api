import React from "react";
import { useMyContext } from "./Parents";
const Child = () => {
  const value = useMyContext();
  return <div>{value}</div>;
};

export default Child;
