import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PravateRotes = ({ children }) => {
  const auth = useSelector((state) => state.name.auth);

  if (auth) {
    return children;
  }
  return <Navigate to="/signIN" />;
};

export default PravateRotes;
