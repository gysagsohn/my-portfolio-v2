import { useEffect, useRef, useState } from 'react';
import timelineData from '../Data/timelineData';
import '../styles/TimelineItem.css';
import TimelineItem from './ui/TimelineItem';

function Timeline() {
  const scrollRef = useRef(null);
  const [atTop, setAtTop] = useState(true);
  const [atBottom, setAtBottom] = useState(false);

  // Scroll position check
  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;

    setAtTop(el.scrollTop === 0);
    setAtBottom(el.scrollTop + el.clientHeight >= el.scrollHeight - 1);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    checkScroll(); // Initial state
    el.addEventListener('scroll', checkScroll);
    return () => el.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    scrollRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  };

  return (
    <div className="timeline-wrapper">
      <h2 className="timeline-heading">My Journey</h2>

      {!atTop && (
        <span className="scroll-up-text" onClick={scrollToTop}>
          Scroll up ↑
        </span>
      )}

      {!atBottom && (
        <span className="scroll-down-text" onClick={scrollToBottom}>
          Scroll down ↓
        </span>
      )}

      <div className="timeline-scroll" ref={scrollRef}>
        {timelineData.map((entry, index) => (
          <TimelineItem
            key={index}
            year={entry.year}
            title={entry.title}
            description={entry.description}
          />
        ))}
        {!atBottom && <div className="timeline-fade-bottom" />}
      </div>
    </div>
  );
}

export default Timeline;