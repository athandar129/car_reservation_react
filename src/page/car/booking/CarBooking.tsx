// import React from 'react';

import { useNavigate } from "react-router-dom";
import CarDataTable from "../../../components/car/CarDataTable";
import Navbar from "../../../components/navbar/navbar";
import { Sidebar } from "../../../components/sidebar/UserSidbar";
import { DarkModeContext } from "../../../context/darkModeContext";
import { useContext } from "react";

export const CarBooking = () => {
   const {darkMode} = useContext(DarkModeContext);
    
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        
        <h1 className={darkMode ? 'dark_title' : 'page_title'}> Car Booking Page </h1>
        <CarDataTable />
      </div>
    </div>
  );
};
