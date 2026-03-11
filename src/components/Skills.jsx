/**
 * Skills.jsx
 *
 * Renders a grid of technology skill icons with labels.
 * Each skill is defined in Data/skillsData.js — add or remove skills there.
 *
 * Features:
 * - Displays icon + label for each skill using react-icons
 * - Supports a 'hidden' flag on skills (used for the Law easter egg)
 *   Hidden skills are invisible but remain in the DOM — see SkillIcon.css
 *   for the CSS sibling selector that reveals them on hover
 *
 * Used in: Home.jsx (Tools I Use section)
 */

import { skills } from '../Data/skillsData';
import '../styles/SkillIcon.css';

function Skills() {
  return (
    <section className="skills-grid">
      {skills.map((skill) => {
        const Icon = skill.icon;

        return (
          <div
            // Use skill.name as key — more stable than array index.
            // Index keys can cause React reconciliation issues if the list order changes.
            key={skill.name}
            className={`skill-icon ${skill.name.toLowerCase()}${skill.hidden ? ' hidden-law' : ''}`}
          >
            {/* Icon component from react-icons, sized at 32px */}
            <Icon size={32} />

            {/* Display label shown below the icon */}
            <span>{skill.name}</span>
          </div>
        );
      })}
    </section>
  );
}

export default Skills;
