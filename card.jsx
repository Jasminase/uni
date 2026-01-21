import { TiMail } from "react-icons/ti";
import { MdLock } from "react-icons/md";
import { IoBookSharp } from "react-icons/io5";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";
export default function card() {
    return (
        <div>
            <IoBookSharp className="head-icon"/>
            <h1 className="header">Welcome Back</h1>
            <p className="postheader">Sign in to your University Companion account</p>
            

            <label className="firstpage">Email</label><br></br>
           
            <input className="label" type="email" placeholder="student@university.edu"/> <TiMail className="icon"/><br></br>
            
            <label className="firstpage">Password</label><br></br>
            <input className="label" id="psw" type="password" placeholder="Enter your password"/><MdLock id="lock-icon" className="icon"/><br></br>
            
            <button className="but">Login</button>
            
            <p id="footer">Don't have an account? <a href="#">Sign Up</a></p>
            <span className="or-text">or</span><br></br>
            <button className="user-type"><MdOutlineAdminPanelSettings className="admin-icon"/> admin portal</button><br></br>
            <button className="user-type"><FaChalkboardTeacher className="teacher-icon"/> teacher portal</button>
        </div>
    )
}
