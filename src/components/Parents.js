import React from "react";
import { useContext } from "react";
import { useMyContext } from "../App";
const Parents = () => {
  const value = useMyContext();
  return <div>{value}</div>;
};

export default Parents;
