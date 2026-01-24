import { useState } from 'react';
import CourseCard from '../coursecard/CourseCard'; 
import './CoursesSwitcher.css';

export default function CoursesSwitcher() {
  const [activeTab, setActiveTab] = useState('myCourses');
  
  // Available courses data
  const availableCourses = [
    {
      id: 1,
      code: "CS101",
      credits: "3 Credits",
      title: "Introduction to Programming",
      description: "Learn the fundamentals of programming with Python.",
      instructor: "Prof. Smith"
    },
    {
      id: 2,
      code: "MATH201",
      credits: "4 Credits",
      title: "Calculus I",
      description: "Differential and integral calculus of single variable functions.",
      instructor: "Dr. Johnson"
    },
    {
      id: 3,
      code: "ENG102",
      credits: "3 Credits",
      title: "Academic Writing",
      description: "Develop effective writing skills for academic purposes.",
      instructor: "Dr. Williams"
    },
    {
      id: 4,
      code: "PHY151",
      credits: "4 Credits",
      title: "Physics I: Mechanics",
      description: "Fundamental principles of classical mechanics.",
      instructor: "Prof. Davis"
    },
    {
      id: 5,
      code: "CHEM110",
      credits: "4 Credits",
      title: "General Chemistry",
      description: "Introduction to chemical principles and laboratory techniques.",
      instructor: "Dr. Anderson"
    },
    {
      id: 6,
      code: "BIO101",
      credits: "3 Credits",
      title: "Introduction to Biology",
      description: "Study of life processes, cells, genetics, and evolution.",
      instructor: "Prof. Taylor"
    }
  ];

  const handleEnroll = (courseId) => {
    alert(`Enrolling in course ${courseId}`);
    // Add your enrollment logic here
  };

  return (
    <div className="courses-switcher">
      <div className="tabs-container">
        <div className="tabs-nav">
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
            Available <span className="badge">{availableCourses.length}</span>
          </button>
        </div>
      </div>

      <div className="tabs-content">
        {activeTab === 'myCourses' && (
          <div className="tab-panel" data-state="active">
            <div className="panel-content">
              <h3 className="panel-title">My Enrolled Courses</h3>
              <p className="panel-description">You haven't enrolled in any courses yet.</p>
              <div className="empty-state">
                <div className="empty-icon">📚</div>
                <p className="empty-text">No courses enrolled</p>
                <button 
                  className="browse-btn"
                  onClick={() => setActiveTab('available')}
                >
                  Browse Available Courses
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'available' && (
          <div className="tab-panel" data-state="active">
            <div className="panel-content">
              <h3 className="panel-title">Available Courses ({availableCourses.length})</h3>
              <p className="panel-description">Browse and enroll in available courses.</p>
              
              <div className="courses-grid">
                {availableCourses.map((course) => (
                  <CourseCard
                    key={course.id}
                    courseCode={course.code}
                    credits={course.credits}
                    title={course.title}
                    description={course.description}
                    instructor={course.instructor}
                    onEnroll={() => handleEnroll(course.id)}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}