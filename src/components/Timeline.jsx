import { useRef } from 'react';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import timelineData from '../Data/timelineData';
import '../styles/Timeline.css';
import TimelineItem from './ui/TimelineItem';

function Timeline() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className="timeline-wrapper">
      <div className="timeline-button-row">
        <button className="timeline-button" onClick={scrollLeft} aria-label="Scroll Left">
          <HiOutlineChevronLeft size={28} />
        </button>
        <button className="timeline-button" onClick={scrollRight} aria-label="Scroll Right">
          <HiOutlineChevronRight size={28} />
        </button>
      </div>

      <div className="timeline-scroll" ref={scrollRef}>
        {timelineData.map((entry, index) => (
          <TimelineItem
            key={index}
            year={entry.year}
            title={entry.title}
            description={entry.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Timeline;
