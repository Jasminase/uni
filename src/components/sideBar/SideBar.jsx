
import { IoBookSharp } from "react-icons/io5";
import { MdDashboard, MdLogout } from "react-icons/md";
import { FaBook, FaChartBar, FaCalendarTimes, FaUser } from "react-icons/fa";

import "./SideBar.css"

function SideBar(){
    return(
        <div className="sideBar">
            <p><IoBookSharp />University Companion</p>
            <div className="info"> 
                <p className="nom">nana</p>
                <p className="mail">nan@gmail.com</p>
            </div>
            <div className="middle">
                <button><MdDashboard /> Dashboard</button>
                <button><FaBook /> Courses</button>
                <button><FaChartBar /> Grades</button>
                <button><FaCalendarTimes /> Absences</button>
                <button><FaUser /> Profile</button>
            </div>
            <div className="footer">
                <button><MdLogout /> Sign Out</button>
            </div>
        </div>
    );
}

export default SideBar