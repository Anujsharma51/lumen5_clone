import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import { SignUp } from "../pages/SignUp";
import { Signin } from "../pages/SignIn";
import Dashboard from "../pages/Dashboard";
// import SignUp from "../pages/SignUp";

const AllRouters = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signUp" element={<SignUp />}></Route>
        <Route path="/signIN" element={<Signin />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </div>
  );
};

export default AllRouters;
