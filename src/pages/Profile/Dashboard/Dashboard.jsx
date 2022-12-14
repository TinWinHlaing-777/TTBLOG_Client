import React from "react";
import MenuItem from "../../../components/Menu/MenuItem";
import Navbar from "../../../components/Navbar/Navbar"
import "./dashboard.css"

const Dashboard = () => {
  return <>
    <Navbar/>
    <div className="main__dashboard__container">
      <MenuItem/>
      <div className="chart__container">
        
      </div>
    </div>
  </>;
};

export default Dashboard;
