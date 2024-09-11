import React from 'react';
import '../styles/Recommendations.css';

const recommendations = [
  { name: "ANDY'S", description: "Diversitate Înaltă", logo: '/path-to-andys-logo' },
  { name: "Saperavi", description: "Descriere scurtă", logo: '/path-to-saperavi-logo' },
  { name: "GrillHouse", description: "Descriere scurtă", logo: '/path-to-grillhouse-logo' },
  { name: "McDonald's", description: "Descriere scurtă", logo: '/path-to-mcdonalds-logo' }
];

const Recommendations = () => {
  return (
    <div className="recommendations">
      <h2>Recomandăm !</h2>
      <div className="recommendations-list">
        {recommendations.map((item, index) => (
          <div className="recommendation-item" key={index}>
            <img src={item.logo} alt={item.name} />
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommendations;
