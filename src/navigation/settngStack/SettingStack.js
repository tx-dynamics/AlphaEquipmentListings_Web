import React from "react";
import { Routes, Route } from "react-router-dom";
import * as Admin from '../../pages/admin';

const SettingStack = () => {
    return (
        <Routes>
            <Route path="/" element={<Admin.Settings />} />
            <Route path="questions" element={<Admin.Questions />} />
            <Route path="reviews" element={<Admin.Reviews />} />
            <Route path="profile" element={<Admin.Profile />} />
            <Route path="editProfile" element={<Admin.EditProfile />} />

        </Routes>
    );
};

export default SettingStack;
