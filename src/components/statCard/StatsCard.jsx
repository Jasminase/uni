import "./ProgressCard.css"
export default function ProgressCard(){
    return (
        <div className="progress-body">
            <div className="prog-title">course progress</div>
            <div className="post-title">your performance across enrolled courses</div>
            <div className="courses" id="c">no courses enrolled.go to courses to enroll</div>
        </div>
    )
}