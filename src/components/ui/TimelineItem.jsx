import '../../styles/TimelineItem.css';

function TimelineItem({ year, title, description }) {
  return (
    <div className="timeline-item">
      <h4>{year}</h4>
      <h5>{title}</h5>
      <p>{description}</p>
    </div>
  );
}

export default TimelineItem;
