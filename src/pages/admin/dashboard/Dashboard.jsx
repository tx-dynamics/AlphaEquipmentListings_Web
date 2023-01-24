import React from "react";
import { SideBar, TopBar } from "../../../components";
import './dashboard.css'

export default function Dashboard() {

  return (
    <div className="alpha-dashboard-main_container">
      <SideBar />
      <div className="alpha-dashboard-top_bar_main_container">
        <TopBar />
        <div className="alpha-dashboard-container">


        </div>
      </div>
    </div>
  );
}
