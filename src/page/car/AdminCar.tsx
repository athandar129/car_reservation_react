import Navbar from "../../components/navbar/navbar";
import { Sidebar } from "../../components/sidebar/AdminSidebar";
import AdminCarRequest from "../../components/car/AdminCar";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

// import React from 'react';
export const Car  = () => {
    const {darkMode} = useContext(DarkModeContext);
    return(
        <div className='home'>
            <Sidebar />
            <div className="homeContainer">
                <Navbar />
                <h1 className={darkMode ? 'dark_title' : 'page_title'}>Car Reservation Requests Page</h1>

                <div style={{ marginRight: "15px" }}>
                    <AdminCarRequest />
                    
                </div>

            </div>
        </div>
    );
};