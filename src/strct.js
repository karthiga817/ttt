import React from "react";
import "./sty.css";
const hod = {
  id: 1,
  name: "Mr. Perumal Raja",
  position: "HoD",
  image: "images/HOD.jpg",
  subordinates: [
    { id: 2, name: "Coordinator 1", image: "images/KR.SENTHIL MURUGAN.jpg" },
    { id: 3, name: "Company representative", image: "https://via.placeholder.com/80" },
    { id: 4, name: "Company representative", image: "https://via.placeholder.com/80" },
    { id: 8, name: "New Representative", image: "https://via.placeholder.com/80" },
    { id: 5, name: "Company representative", image: "https://via.placeholder.com/80" },
    { id: 6, name: "Company representative", image: "https://via.placeholder.com/80" },
    { id: 7, name: "Coordinator 2", image: "images/Murali.png" },
  ],
};

const domains = [
  { id: 9, name: "Domain 1" },
  { id: 10, name: "Domain 2" },
  { id: 11, name: "Domain 3"},
  { id: 12, name: "Domain 4"},
  { id: 13, name: "Domain 5"},
  { id: 14, name: "Domain 6"},
  { id: 15, name: "Domain 7"},
];

const faculty = [
  { id: 9, name: "Domain 1", image: "image/cloud/fm.PNG" },
  { id: 10, name: "Domain 2", image: "https://via.placeholder.com/80" },
  { id: 11, name: "Domain 3", image: "https://via.placeholder.com/80" },
  { id: 12, name: "Domain 4", image: "https://via.placeholder.com/80" },
  { id: 13, name: "Domain 5", image: "https://via.placeholder.com/80" },
  { id: 14, name: "Domain 6", image: "https://via.placeholder.com/80" },
  { id: 15, name: "Domain 7", image: "https://via.placeholder.com/80" },
];
const tl = [
  { id: 9, name: "Domain 1", image: "https://via.placeholder.com/80" },
  { id: 10, name: "Domain 2", image: "https://via.placeholder.com/80" },
  { id: 11, name: "Domain 3", image: "https://via.placeholder.com/80" },
  { id: 12, name: "Domain 4", image: "https://via.placeholder.com/80" },
  { id: 13, name: "Domain 5", image: "https://via.placeholder.com/80" },
  { id: 14, name: "Domain 6", image: "https://via.placeholder.com/80" },
  { id: 15, name: "Domain 7", image: "https://via.placeholder.com/80" },
];


const OrgChart = () => {
  return (
    <div className="organization-chart">
      <div className="hod-node">
        <div className="hod-content">
          <img src={hod.image} alt={hod.name} className="hod-img" />
          <p>{hod.name}</p>
          <p className="position">{hod.position}</p>
        </div>
        <div className="horizontal-line"></div>
      </div>
      
      <div className="subordinates-container">
        {hod.subordinates.map((sub) => (
          <div key={sub.id} className="subordinate-node">
            <div className="vertical-line"></div>
            <div className="subordinate-content">
              <img src={sub.image} alt={sub.name} className="subordinate-img" />
              <p>{sub.name}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="domain-section">
        <div className="domain-line-left"></div>
        <p className="domain-text">DOMAINS</p>
        <div className="domain-line-right"></div>
      </div>
      
      <div className="domains-container">
        {domains.map((domain) => (
          <div key={domain.id} className="domain-node">
            <div className="domain-content">
              <img src={domain.image} alt={domain.name} className="domain-img" />
              <p>{domain.name}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="faculty-section">
      </div>
      
      <div className="faculty-container">
        {faculty.map((member) => (
          <div key={member.id} className="faculty-node">
            <div className="faculty-content">
              <img src={member.image} alt={member.name} className="faculty-img" />
              <p>{member.name}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="tl-section">
      </div>
      
      <div className="tl-container">
        {tl.map((tl) => (
          <div key={tl.id} className="tl-node">
            <div className="tl-content">
              <img src={tl.image} alt={tl.name} className="tl-img" />
              <p>{tl.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default OrgChart;
