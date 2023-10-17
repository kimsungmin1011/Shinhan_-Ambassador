import React from 'react';
import './style/PersonCard.css';
import Insta from '../img/insta.png';

const PersonCard = ({ profileImage, name, school, major, role, intro, instagramUrl, color }) => {
  return (
    <div className="person-card" style={{ backgroundColor: color }}>
      <div className="image-container">
        <img src={profileImage} alt={name} />
      </div>
      <div className="info-container">
        <div className="header-container">
          <h2 className="info-title">{name}</h2>
          <div className="school-major">
            <p className="school">{school}</p>
            <p className="major">{major}</p>
          </div>
        </div>
        <p><strong>MBTI:</strong> {role}</p>
        <p><strong>한마디:</strong> {intro}</p>
      </div>
      <div className="social-container">
        <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
          <img src={Insta} alt="Instagram" />
        </a>
      </div>
    </div>
  );
};

export default PersonCard;