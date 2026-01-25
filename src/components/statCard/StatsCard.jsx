import "./StatsCard.css";

export default function StatsCard({ title, value, description , icon}) {
    return (
      <div className="stat-card">
        <div className="stat-card-header">
          <div className="icon-title">
            <h3 className="stat-card-title">{title}</h3>
            <div className="icon-db"> {icon}</div>
            
          </div>
          
        </div>
        <div className="stat-card-content">
          <div className="stat-card-value">{value}</div>
          <p className="stat-card-description">{description}</p>
        </div>
      </div>
    );
}