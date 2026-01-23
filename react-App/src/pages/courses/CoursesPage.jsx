import SideBar from '../../components/sideBar/SideBar';
import Switcher from '../../components/switcher/Switcher';
export default function CoursesPage() {
  return (
    <div style={{ display: 'flex' }}>
      <SideBar />
      <Switcher/>
    </div>
  );
}