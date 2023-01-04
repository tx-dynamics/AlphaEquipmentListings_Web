import React from "react";
import { Routes, Route } from "react-router-dom";
import * as Admin from '../../pages/admin';

const ChatStack = () => {
    return (
        <Routes>
            <Route path="/" element={<Admin.Chat />} />
            <Route path="sessionEnded" element={<Admin.SessionEnded />} />
        </Routes>
    );
};

export default ChatStack;
