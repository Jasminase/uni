import StatsCard from "../../components/statcard/StatsCard";
import { MdClass } from "react-icons/md";
import { PiMedalLight } from "react-icons/pi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import "./DashBoard.css"
import { FaArrowTrendUp } from "react-icons/fa6";
import ProgressCard from "../../components/progressCard/ProgressCard";
import SideBar from "../../components/sidebar/SideBar";
import { GoXCircleFill } from "react-icons/go";
import { MdDoNotDisturbOn } from "react-icons/md";
import { RiDiscountPercentFill } from "react-icons/ri";
import "../../components/progressCard/ProgressCard.css/";
export default function DashBoard(){
    return(
        <div className="dashboard-container"> 
            <div className="db">Welcome , Name !</div>
            <div className="courses" id="Info">Student ID :554785 | Major : Computer Science</div>
            <SideBar/>
            <div className="stats-container">
                <StatsCard 
                    title="GPA" 
                    value="0" 
                    description="Out of 20.00"
                    icon={<FaArrowTrendUp size={24} color="#595f60ff"/>}
                    
                />
                <StatsCard 
                    title="Enrolled Courses" 
                    value="0" 
                    description="0 total credits"
                    icon={<MdClass size={24} color="#595f60ff"/>}
                />
                <StatsCard 
                    title="Credits Earned" 
                    value="0" 
                    description=""
                    icon={<PiMedalLight size={24} color="#595f60ff"/>}
                />
                <StatsCard 
                    title="Average Score" 
                    value="0.0/20" 
                    description="Across all exams"
                    icon={<IoMdCheckmarkCircleOutline size={24} color="#595f60ff"/>}
                />
            </div>
            <div className="prog-container">
                <ProgressCard/>
            </div>
            <div className="stats-container">
                <StatsCard 
                    title="Passed Exams" 
                     value={<span style={{ color: '#28a745' }}>0</span>}
                    description="Across all exams"
                    icon={<IoMdCheckmarkCircleOutline size={24} color="#595f60ff"/>}
                />
                <StatsCard 
                    title="Failed Exams" 
                     value={<span style={{ color: '#e30f0fff' }}>0</span>}
                    description="Across all exams"
                    icon={<GoXCircleFill size={24} color="#595f60ff"/>}
                />
                <StatsCard 
                    title="Eliminated Exams" 
                     value={<span style={{ color: '#000000ff' }}>0</span>} 
                    description="Across all exams"
                    icon={<MdDoNotDisturbOn size={24} color="#595f60ff"/>}
                />
                <StatsCard 
                    title="Success percentage" 
                     value={<span style={{ color: '#000000ff' }}>0</span>} 
                    description="According to total exams"
                    icon={<RiDiscountPercentFill size={24} color="#595f60ff"/>}
                />
                               
            </div>
        </div>
    )
}