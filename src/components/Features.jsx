import "./Features.css";

const Features = () => {
  return (
    <section id="features" className="features-section">
      <h2>Core Features</h2>
      <div className="features-grid">
        {["Vision", "Mission", "Values", "Security"].map((feature, idx) => (
          <div className="feature-card" key={idx}>
            <div className="feature-icon">✨</div>
            <h3>{feature}</h3>
            <p>
              Driving innovation and trust in the decentralized web through
              strong {feature.toLowerCase()} principles.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
