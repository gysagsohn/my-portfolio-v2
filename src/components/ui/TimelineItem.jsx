import '../../styles/TimelineItem.css';

  function TimelineItem({ year, title, description, isLeft }) {
    return (
      <div className="timeline-grid-row">
        {isLeft ? (
          <>
            <div className="timeline-card">
              <span className="milestone-year">{year}</span>
              <h4>{title}</h4>
              <p>{description}</p>
            </div>
            <div className="timeline-dot-wrapper">
              <div className="milestone-vertical-dot" />
            </div>
            <div className="timeline-empty" />
          </>
        ) : (
          <>
            <div className="timeline-empty" />
            <div className="timeline-dot-wrapper">
              <div className="milestone-vertical-dot" />
            </div>
            <div className="timeline-card">
              <span className="milestone-year">{year}</span>
              <h4>{title}</h4>
              <p>{description}</p>
            </div>
          </>
        )}
      </div>
    );
  }

export default TimelineItem;
