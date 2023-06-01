
import { useContext } from "react"
import ProUser from "../../components/User/proUser"
import Navbar from "../../components/navbar/navbar"
import { Sidebar } from "../../components/sidebar/AdminSidebar"
import { DarkModeContext } from "../../context/darkModeContext"

export const UserPro = ()=> {
    const {darkMode} = useContext(DarkModeContext);
    return(
        <div className='home'>
            <Sidebar/>
            <div className="homeContainer">
                <Navbar/>
                <h1 className={darkMode ? 'dark_title' : 'page_title'}>Pro user  Page</h1>
                <div style={{ marginRight:"15px", marginTop:"50px" }}>
                <ProUser/>
                </div>
            </div>
            
        </div>
    )
}