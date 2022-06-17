import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import { SignUp } from "../pages/SignUp";
import { Signin } from "../pages/SignIn";
import Dashboard from "../pages/Dashboard";
import Upgrade from "../pages/Upgrade";
import Payment from "../pages/Payment";
import OTP from "../pages/OTP";
import PravateRotes from "./PravateRotes";
import NewOTP from "../pages/NewOTP";
// import SignUp from "../pages/SignUp";

const AllRouters = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signUp" element={<SignUp />}></Route>
        <Route path="/signIN" element={<Signin />}></Route>
        <Route
          path="/dashboard"
          element={
            <PravateRotes>
              <Dashboard />
            </PravateRotes>
          }
        ></Route>
        <Route path="/upgrade" element={<Upgrade />}></Route>
        <Route path="/payment" element={<Payment />}></Route>
        <Route path="/paymentVerify" element={<NewOTP />}></Route>
        <Route path="/successfully" element={<OTP />}></Route>
      </Routes>
    </div>
  );
};

export default AllRouters;
