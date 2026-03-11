/**
 * Skills.jsx
 *
 * Renders a grid of technology skill icons with labels.
 * Each skill is defined in Data/skillsData.js — add or remove skills there.
 *
 * Features:
 * - Displays icon + label for each skill using react-icons
 * - Law easter egg: a hidden "Law" skill icon is revealed when the Git icon is hovered.
 *   Implemented via React state (hovering Git sets isGitHovered → true) rather than a
 *   CSS sibling selector, which was fragile and dependent on DOM order.
 *
 * Used in: Home.jsx (Tools I Use section)
 */

import { useState } from 'react';
import { skills } from '../Data/skillsData';
import '../styles/SkillIcon.css';

function Skills() {
  // Controls whether the hidden Law easter egg icon is visible.
  // Becomes true when the Git skill is hovered.
  const [isGitHovered, setIsGitHovered] = useState(false);

  return (
    <section className="skills-grid">
      {skills.map((skill) => {
        const Icon = skill.icon;
        const isHidden = skill.hidden;

        // The Law icon is always rendered but hidden by default.
        // It becomes visible when isGitHovered is true (Git icon is being hovered).
        const isVisible = isHidden ? isGitHovered : true;

        return (
          <div
            // skill.name is a stable, unique key — safer than array index
            key={skill.name}
            className={`skill-icon ${skill.name.toLowerCase()}`}
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'scale(1.1)' : 'scale(0.9)',
              pointerEvents: isVisible ? 'auto' : 'none',
              transition: 'opacity 0.4s ease-in-out, transform 0.4s ease-in-out',
            }}
            // Only attach hover handlers to the Git icon to trigger the easter egg
            onMouseEnter={skill.name === 'Git' ? () => setIsGitHovered(true) : undefined}
            onMouseLeave={skill.name === 'Git' ? () => setIsGitHovered(false) : undefined}
          >
            <Icon size={32} />
            <span>{skill.name}</span>
          </div>
        );
      })}
    </section>
  );
}

export default Skills;
