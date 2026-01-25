import SideBar from '../../components/sideBar/SideBar';
import './GradesPage.css';

export default function GradesPage() {
  return (
    <div className="grades-container">
      <SideBar />
      <div className="grades-main">
        <h1 className="grades-head">Grades</h1>
        <p className="post-head">Track your academic performance</p>
        <div className="grades-field">No uploaded grades yet</div>
      </div>
    </div>
  );
}