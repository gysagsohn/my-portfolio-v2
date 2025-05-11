// Skills.jsx
import { skills } from '../Data/skillsData';
import '../styles/SkillIcon.css';

function Skills() {
  return (
    <section className="skills-grid">
      {skills.map((skill, idx) => {
        const Icon = skill.icon;
        const isHidden = skill.hidden;
        return (
          <div
            key={idx}
            className={`skill-icon ${skill.name.toLowerCase()}${isHidden ? ' hidden-law' : ''}`}
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
