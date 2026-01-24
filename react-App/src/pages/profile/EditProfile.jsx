import SideBar from '../../components/sideBar/SideBar';
import './Profile.css'
import { FaUser, FaIdCard, FaGraduationCap, FaEnvelope, FaCalendarAlt } from 'react-icons/fa';

export default function EditProfile({ onBack }){ // ADDED onBack prop
    return(
        <div style={{ display: 'flex' }}>
          <SideBar />
          <div className="profile-content">
            <h1>Edit Profile</h1>
            <p className='sbt'>Update your personal information</p>
            
            <div className='container'>
              <p>Personal Information</p>
              <p className='sbt'>Your academic and contact details</p>
              
              <div className="info-row">
                <FaUser className="info-icon" />
                <div>
                  <p className='sbt' style={{ color: '#000', fontWeight: 400 }}>Full Name</p>
                  <input type="text" placeholder="Enter full name" />
                </div>
              </div>

              <div className="info-row">
                <FaIdCard className="info-icon" />
                <div>
                  <p className='sbt' style={{ color: '#000', fontWeight: 400 }}>Student ID</p>
                  <input type="text" placeholder="Enter student ID" />
                </div>
              </div>

              <div className="info-row">
                <FaGraduationCap className="info-icon" />
                <div>
                  <p className='sbt' style={{ color: '#000', fontWeight: 400 }}>Major</p>
                  <input type="text" placeholder="Enter major" />
                </div>
              </div>

              <div className="info-row">
                <FaEnvelope className="info-icon" />
                <div>
                  <p className='sbt' style={{ color: '#000', fontWeight: 400 }}>Email</p>
                  <input type="email" placeholder="Enter email" />
                </div>
              </div>

              <div className="info-row">
                <FaCalendarAlt className="info-icon" />
                <div>
                  <p className='sbt' style={{ color: '#000', fontWeight: 400 }}>Member Since</p>
                  <p>January 24, 2026</p>
                </div>
              </div>

              <button>Save Changes</button>
              <button className='cancel' onClick={onBack}>Cancel</button>
            </div>
            <div className="p2"> 
          <p>Account Statistics</p>
          <p className='sbt'>Enrolled Courses</p>
          <p className='sbt'>Account ID</p>
        </div>
          </div>  
          
        </div>  
    );
}