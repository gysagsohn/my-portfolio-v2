import { useEffect, useRef, useState } from 'react';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import timelineData from '../Data/timelineData';
import '../styles/Timeline.css';
import TimelineItem from './ui/TimelineItem';

function Timeline() {
  const scrollRef = useRef(null);
  const [progress, setProgress] = useState(0);

  // === Scroll Progress Calculation ===
  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const total = el.scrollWidth - el.clientWidth;
    const scrolled = el.scrollLeft;
    setProgress((scrolled / total) * 100);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    el.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => el.removeEventListener('scroll', handleScroll);
  }, []);

  // === Scroll by one card (on button click)
  const scrollByCard = (dir = 1) => {
    const el = scrollRef.current;
    const cardWidth = 340 + 32; // Card width + gap
    if (!el) return;
    el.scrollBy({ left: cardWidth * dir, behavior: 'smooth' });
    setTimeout(handleScroll, 600); // Sync bar after animation
  };

  return (
    <div className="timeline-wrapper">
      <button className="timeline-button left" onClick={() => scrollByCard(-1)} aria-label="Scroll Left">
        <HiOutlineChevronLeft size={28} />
      </button>
      <button className="timeline-button right" onClick={() => scrollByCard(1)} aria-label="Scroll Right">
        <HiOutlineChevronRight size={28} />
      </button>

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

      <div className="timeline-progress-container">
        <div
          className="timeline-progress-bar"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}

export default Timeline;
