import "./Hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <h1>Pinnacle of Crypto Communities</h1>
        <p>
          Embark on a Financial Revolution with Ultrapro Blockchain. Join a
          global network shaping the future of decentralized finance and web3
          innovation.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary">Contact Us</button>
          <button className="btn-secondary">Learn More</button>
        </div>

        <div className="stats-container">
          <div className="stat-box">
            <h3>200,000+</h3>
            <span>Transaction per second</span>
          </div>
          <div className="stat-box">
            <h3>36+</h3>
            <span>Countries</span>
          </div>
          <div className="stat-box">
            <h3>1M+</h3>
            <span>Trade per day</span>
          </div>
        </div>
      </div>

      <div className="hero-illustration">
        <div className="mock-statue">
          <span>🏛️</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
