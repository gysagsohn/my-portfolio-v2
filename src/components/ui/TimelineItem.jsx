import '../../styles/TimelineItem.css';

function TimelineItem({ year, title, description }) {
  return (
    <div className="timeline-item">
      <div className="timeline-year">{year}</div>
      <div className="timeline-content">
        <div className="timeline-title">{title}</div>
        <div className="timeline-description">{description}</div>
      </div>
    </div>
  );
}

export default TimelineItem