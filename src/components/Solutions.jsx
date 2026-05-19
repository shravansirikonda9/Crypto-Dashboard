import React, { useState, useEffect } from "react";
import "./Solutions.css";

const Solutions = () => {
  const [solutions, setSolutions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSolutions = async () => {
      try {
        const response = await fetch(
          "https://nxtwave-assessments-backend-nxtwave-media-static.s3-ap-south-1.amazonaws.com/topin_beta/media/content_loading/uploads/6700d26f-7f30-458e-a1e0-ff17612b1d96_solution.json",
        );
        const data = await response.json();

        if (Array.isArray(data)) {
          setSolutions(data);
        } else {
          const possibleArray = Object.values(data).find((val) =>
            Array.isArray(val),
          );
          setSolutions(possibleArray || []);
        }
      } catch (error) {
        console.error("Failed to fetch solutions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSolutions();
  }, []);

  return (
    <section id="solutions" className="solutions-section">
      <h2>Solutions</h2>
      {loading ? (
        <p className="loading-text">Loading solutions data...</p>
      ) : (
        <div className="solutions-grid">
          {solutions.map((item, index) => (
            <div className="solution-card" key={index}>
              <div className="card-header">
                <h3>{item.name || item.title || "Solution Tool"}</h3>
                <span className="badge">{index + 1}</span>
              </div>
              <p>
                {item.description ||
                  item.desc ||
                  "Explore our comprehensive blockchain solutions."}
              </p>
              <a href="#explore" className="explore-link">
                Explore More ↗
              </a>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Solutions;
