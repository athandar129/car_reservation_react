import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/navbar';
import { Sidebar } from '../../components/sidebar/AdminSidebar';
import CarDataTable from '../../components/create/CarDataTable';
import { DarkModeContext } from '../../context/darkModeContext';
import { useContext } from 'react';

const CarCreation = () => {
    const {darkMode} = useContext(DarkModeContext);
  return (
    <div className='home'>
        <Sidebar />
        <div className="homeContainer">
            <Navbar />
            <h1 className={darkMode ? 'dark_title' : 'page_title'}>Car Creation Page</h1>
            <div>
                <Link to="/car-create" style={{ display: "block", textAlign: "left", marginTop: "10px", marginLeft: "10px", cursor: "default" }}>
                    <Button className={darkMode ? 'dark_btn' : ''}  variant="contained" disableRipple>Add New</Button>
                </Link>
            </div>
            <CarDataTable/>
        </div>
    </div>
);
}

export default CarCreation;
