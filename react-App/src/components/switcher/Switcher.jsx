import { useState } from 'react';
import './Switcher.css';

function Switcher() {
  const [activeTab, setActiveTab] = useState('myCourses');

  return (
    <div>
      <div className="courses-header">
        <div className="courses-tabs">
          <button 
            className={`tab ${activeTab === 'myCourses' ? 'active' : ''}`}
            onClick={() => setActiveTab('myCourses')}
          >
            My Courses <span className="badge">0</span>
          </button>
          <button 
            className={`tab ${activeTab === 'available' ? 'active' : ''}`}
            onClick={() => setActiveTab('available')}
          >
            Available <span className="badge">6</span>
          </button>
        </div>
        
        <div className="courses-search">
          <input 
            type="text" 
            placeholder="Search courses..." 
            className="search-input"
          />
          <button className="filter-btn">
            Filter
          </button>
        </div>
      </div>

      {/* Show different content based on active tab */}
      <div className="tab-content">
        {activeTab === 'myCourses' && (
          <div>
            <h3>My Enrolled Courses</h3>
            <p>You have no courses yet.</p>
          </div>
        )}
        
        {activeTab === 'available' && (
          <div>
            <h3>Available Courses</h3>
            <p>6 courses available to enroll.</p>
            {/* Show course cards here */}
          </div>
        )}
      </div>
    </div>
  );
}

export default Switcher;