import React from "react";
import { Routes, Route } from "react-router-dom";
import * as Viewers from "../pages/viewers";
import AuthStack from "./authStack/AuthStack";
// import * as Admin from "../pages/admin";

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthStack />} />
      <Route path="/homepage" element={<Viewers.HomePage />} />

      {/* <Route path="/" element={<Viewers.HomePage />} />
      <Route path="/about" element={<Viewers.AboutUs />} />
      <Route path="/contactUs" element={<Viewers.ContactUs />} />
      <Route path="/signUp" element={<Viewers.SignUp />} />
      <Route path="/signIn" element={<Viewers.SignIn />} />
      <Route path="/fillOutForm" element={<Viewers.FillOutForm />} />
      <Route path="/createProfile" element={<Viewers.CreateProfile />} />
      <Route
        path="/registrationPending"
        element={<Viewers.RegistrationPending />}
      />
      <Route
        path="/registrationSuccessfull"
        element={<Viewers.RegistrationSuccessfull />}
      />
      <Route path="/forgotPassword" element={<Viewers.ForgotPassword />} />
      <Route path="/confirmPassword" element={<Viewers.ConfirmPassword />} />
      <Route path="/verifyEmail" element={<Viewers.VerifyEmail />} />
      <Route path="/" element={<PrivateRoute />}>
        <Route path="dashboard/*" element={<Admin.Layout />} />
      </Route> */}
    </Routes>
  );
};

export default Navigation;
