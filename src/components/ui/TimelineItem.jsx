import '../../styles/TimelineItem.css';

function TimelineItem({ year, title, description }) {
  return (
    <div className="milestone-vertical-item">
      <div className="milestone-vertical-dot" />
      <div className="timeline-card">
        <span className="milestone-year">{year}</span>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default TimelineItem;
