import './CourseCard.css';

function CourseCard({ 
  courseCode = "CS101",
  credits = "3 Credits",
  title = "Introduction to Programming",
  description = "Learn the fundamentals of programming with Python.",
  instructor = "Prof. Smith",
  onEnroll = () => {}
}) {
  return (
    <div className="course-card">
      <div className="course-header">
        <span className="course-code">{courseCode}</span>
        <span className="course-credits">{credits}</span>
      </div>
      <h4 className="course-title">{title}</h4>
      <p className="course-description">{description}</p>
      <div className="course-footer">
        <span className="instructor">{instructor}</span>
        <button className="enroll-btn" onClick={onEnroll}>
          Enroll
        </button>
      </div>
    </div>
  );
}

export default CourseCard;