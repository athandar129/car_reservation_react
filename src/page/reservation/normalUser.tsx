import { useContext } from "react"
import NormalUser from "../../components/User/normaluser"
import Navbar from "../../components/navbar/navbar"
import { Sidebar } from "../../components/sidebar/AdminSidebar"
import { DarkModeContext } from "../../context/darkModeContext"

export const UserNormal = ()=> {
    const { darkMode} = useContext(DarkModeContext);
    return(
        <div className='home'>
            <Sidebar/>
            <div className="homeContainer">
                <Navbar/>
                <h1 className={darkMode ? 'dark_title' : 'page_title'}>Normal user  Page</h1>
                <div style={{ marginRight:"15px", marginTop:"50px" }}>
                <NormalUser/>
                </div>
            </div>
            
        </div>
    )
}