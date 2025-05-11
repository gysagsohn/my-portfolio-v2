import timeline from '../data/timelineData';
import '../styles/TimelineItem.css';

function Timeline() {
  return (
    <section className="timeline">
      {timeline.map((item, index) => (
        <div key={index} className="timeline-item">
          <div className="timeline-year">{item.year}</div>
          <div className="timeline-content">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Timeline;
