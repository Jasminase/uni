import SideBar from '../../components/sideBar/SideBar';
import CoursesSwitcher from '../../components/coursesswitcher/CoursesSwitcher';
import './CoursesPage.css'; 

export default function CoursesPage() {
  return (
    <div className="courses-container">
      <SideBar />
      <main className="courses-main">
        <div className="courses-header">
          <div className="search-section">
            <input 
              type="text" 
              placeholder="Search courses..." 
              className="search-input"
            />
            <button className="filter-btn">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M14 2H2L6.5 8.5V13L9.5 14.5V8.5L14 2Z" stroke="#64748B" strokeWidth="1.5"/>
              </svg>
              Filter
            </button>
          </div>
        </div>
        
        <CoursesSwitcher />
      </main>
    </div>
  );
}