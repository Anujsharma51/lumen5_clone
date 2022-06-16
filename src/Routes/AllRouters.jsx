import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import { SignUp } from "../pages/SignUp";
import { Signin } from "../pages/SignIn";
import Dashboard from "../pages/Dashboard";
import Upgrade from "../pages/Upgrade";
import Payment from "../pages/Payment";
// import SignUp from "../pages/SignUp";

const AllRouters = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signUp" element={<SignUp />}></Route>
        <Route path="/signIN" element={<Signin />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/upgrade" element={<Upgrade />}></Route>
        <Route path="/payment" element={<Payment />}></Route>
      </Routes>
    </div>
  );
};

export default AllRouters;
