

// App.jsx - Keep it simple
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login/loginPage';    
import SignupPage from './pages/signup/signupPage';  
import Dashboard from './pages/dashboard/DashBoard';
import Courses from './pages/courses/CoursesPage';
import Grades from './pages/grades/GradesPage';
import Absences from './pages/absences/AbsencesPage';
import Profile from './pages/profile/Profile';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/grades" element={<Grades />} />
        <Route path="/absences" element={<Absences />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}