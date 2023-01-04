import React from "react";
import { Routes, Route } from "react-router-dom";
import * as Admin from '../../pages/admin';

const AppointmentStack = () => {
    return (
        <Routes>
            <Route path="/" element={<Admin.Appointments />} />
            <Route path="scheduleAppointment" element={<Admin.ScheduleAppointment />} />
            <Route path="rescheduleAppointment" element={<Admin.RescheduleAppointment />} />
            <Route path="cancelAppointment" element={<Admin.CancelAppointment />} />

        </Routes>
    );
};

export default AppointmentStack;
