import React from "react";
import { useSelector } from "react-redux";

const PravateRotes = ({ children }) => {
  const auth = useSelector((state) => state.Auth);
  return <div>PravateRotes</div>;
};

export default PravateRotes;
