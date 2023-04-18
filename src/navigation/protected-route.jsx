import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import * as Admin from "../pages/admin";

const PrivateRoute = (props) => {
    const user = useSelector((data) => data.userData.userData);
    return user ? user?.accountType === 'seller' && <>{props.children}</> : <Navigate to={"/signin"} />;
};

export default PrivateRoute;
