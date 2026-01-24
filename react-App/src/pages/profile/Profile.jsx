import { useState } from 'react'; // YOU FORGOT TO IMPORT useState
import SideBar from '../../components/sideBar/SideBar';
import './Profile.css'
import EditProfile from './EditProfile';
import { FaUser, FaIdCard, FaGraduationCap, FaEnvelope, FaCalendarAlt } from 'react-icons/fa';

export default function Profile() {
    const [isEditing, setIsEditing] = useState(false); // FIXED: was [setIsEditing] should be [isEditing, setIsEditing]
    
    if(isEditing){ // FIXED: was setIsEditing, should be isEditing
        return <EditProfile onBack={() => setIsEditing(false)} />;
    }

  return (
    <div style={{ display: 'flex' }}>
      <SideBar />
      <div className="profile-content">
        <h1>Profile</h1>
        <p className='sbt'>Manage your personal information</p>
        
        <div className='container'>
          <p>Personal Information</p>
          <p className='sbt'>Your academic and contact details</p>
          
          <div className="info-row">
            <FaUser className="info-icon" />
            <div>
              <p className='sbt'>Full Name</p>
              <p>xx</p>
            </div>
          </div>

          <div className="info-row">
            <FaIdCard className="info-icon" />
            <div>
              <p className='sbt'>Student ID</p>
              <p>12345678</p>
            </div>
          </div>

          <div className="info-row">
            <FaGraduationCap className="info-icon" />
            <div>
              <p className='sbt'>Major</p>
              <p>CS</p>
            </div>
          </div>

          <div className="info-row">
            <FaEnvelope className="info-icon" />
            <div>
              <p className='sbt'>Email</p>
              <p>GB@gmail.com</p>
            </div>
          </div>

          <div className="info-row">
            <FaCalendarAlt className="info-icon" />
            <div>
              <p className='sbt'>Member Since</p>
              <p>January 24, 2026</p>
            </div>
          </div>

          <button onClick={() => setIsEditing(true)}>Edit Profile</button>
        </div>
      </div>
    </div>
  )
}