import '../../styles/SkillIcon.css';

function SkillIcon({ icon, label }) {
  return (
    <div className="skill-icon" aria-label={label}>
      {icon}
      <span className="tooltip">{label}</span>
    </div>
  );
}

export default SkillIcon;
