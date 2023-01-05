import React from "react";
import { Routes, Route } from "react-router-dom";
import * as Viewers from "../../pages/viewers";

const AuthStack = () => {
    return (
        <Routes>
            <Route path="/" element={<Viewers.SignIn />} />
            <Route path="/signup" element={<Viewers.SignUp />} />
            <Route path="/otpscreen" element={<Viewers.OtpScreen />} />
            <Route path="/forgotpassword" element={<Viewers.ForgotPassword />} />
            <Route path="/createpassword" element={<Viewers.CreatePassword />} />
        </Routes>
    );
};

export default AuthStack;
