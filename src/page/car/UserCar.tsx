import { Link } from "react-router-dom";
import TableCar from "../../components/car/tableCar";
import Navbar from "../../components/navbar/navbar";
import { Sidebar } from "../../components/sidebar/UserSidbar";
import { Button, useStepContext } from "@mui/material";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
export const Car  = () => {
    const {darkMode} = useContext(DarkModeContext);
    return(
        <div className='home'>
            <Sidebar />
            <div className="homeContainer">
                <Navbar />
                <h1 className={darkMode ? 'dark_title' : 'page_title'}>Car Reservation Page</h1>
                <div>
                    <Link to="/staff-dashboard/car-reservation/car-booking" style={{ display: "block", textAlign: "left", marginTop: "10px", marginLeft: "10px", cursor: "default" }}>
                        <Button size="medium" variant="contained" disableRipple>Car Data Page</Button>
                    </Link>
                </div>

                <div style={{ marginRight: "15px" }}>
                    <TableCar />
                    
                </div>

            </div>
        </div>
    );
};