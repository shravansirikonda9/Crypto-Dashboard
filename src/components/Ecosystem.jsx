import "./Ecosystem.css";

const Ecosystem = () => {
  return (
    <section id="ecosystem" className="ecosystem-section">
      <h2>Ecosystem Components</h2>
      <div className="ecosystem-flex">
        <div className="eco-card">
          <h4>Protoken</h4>
          <p>The native utility token empowering the network transactions.</p>
        </div>
        <div className="eco-card">
          <h4>Stake UPRO</h4>
          <p>Lock your assets securely and earn passive rewards.</p>
        </div>
        <div className="eco-card">
          <h4>UPRO Bazaar</h4>
          <p>Decentralized marketplace for seamless and safe trading.</p>
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
