import { useEffect, useRef, useState } from 'react';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import timelineData from '../Data/timelineData';
import '../styles/Timeline.css';
import TimelineItem from './ui/TimelineItem';

function Timeline() {
  const scrollRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const total = el.scrollWidth - el.clientWidth;
    setProgress((el.scrollLeft / total) * 100);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('scroll', handleScroll);
    handleScroll(); // initial update
    return () => el.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollByCard = (dir = 1) => {
    const el = scrollRef.current;
    const cardWidth = 340 + 32;
    if (!el) return;
    el.scrollBy({ left: cardWidth * dir, behavior: 'smooth' });
    setTimeout(handleScroll, 600);
  };

  return (
    <>
      {/* === Desktop Vertical Timeline === */}
      <div className="milestone-vertical-wrapper">
        <div className="milestone-vertical-line" />
        <div
          id="milestone-vertical-track"
          className={`milestone-vertical-track ${expanded ? 'expanded' : ''}`}
        >
          {timelineData.map((entry, index) => (
            <TimelineItem
              key={index}
              year={entry.year}
              title={entry.title}
              description={entry.description}
            />
          ))}
        </div>
        <div className="timeline-toggle-wrapper">
          <button
            onClick={() => setExpanded(prev => !prev)}
            className="cta-button"
            aria-expanded={expanded}
            aria-controls="milestone-vertical-track"
          >
            {expanded ? 'Hide Timeline' : 'Show Full Timeline'}
          </button>
        </div>
      </div>

      {/* === Mobile Horizontal Timeline === */}
      <div className="milestone-horizontal-wrapper">
        <button className="timeline-button left" onClick={() => scrollByCard(-1)} aria-label="Scroll Left">
          <HiOutlineChevronLeft size={24} />
        </button>
        <button className="timeline-button right" onClick={() => scrollByCard(1)} aria-label="Scroll Right">
          <HiOutlineChevronRight size={24} />
        </button>

        <div className="milestone-horizontal-scroll" ref={scrollRef}>
          {timelineData.map((item, index) => (
            <div key={index} className="milestone-horizontal-card">
              <span className="milestone-year">{item.year}</span>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

        <div className="timeline-progress-container">
          <div className="timeline-progress-bar" style={{ width: `${progress}%` }} />
        </div>
      </div>
    </>
  );
}

export default Timeline;
