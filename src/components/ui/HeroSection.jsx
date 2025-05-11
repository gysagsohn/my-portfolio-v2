import '../../styles/HeroSection.css';

function HeroSection({ heading, subheading, tagline, imageSrc, children }) {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>{heading}</h1>
        <h2>{subheading}</h2>
        <p className="tagline">{tagline}</p>
        {children}
      </div>
      {imageSrc && <img src={imageSrc} alt="Gy Sohn portrait" className="hero-image" />}
    </section>
  );
}

export default HeroSection;
