// src/components/Skills.jsx
import React from 'react';
import './Skills.css';

function Skills() {
  const skillsData = {
    'Software Development': ['Java', 'Python', 'C++', 'C#', 'JavaScript', 'SQL', 'OOP'],
    'Web Technologies': ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'jQuery', 'Leaflet.js', 'React.js'], // Added React.js as you're using it
    'Development Tools': ['IntelliJ IDEA', 'Eclipse', 'Visual Studio', 'Git', 'GitHub', 'MySQL'],
    'Cloud Platforms': ['AWS', 'Azure', 'GCP (hands-on exposure)'],
  };

  return (
    <section id="skills" className="skills-section section-padding">
      <div className="container">
        <h2 className="section-title text-center">My Skills</h2>

        <div className="skills-grid">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div className="skills-category-card" key={category}>
              <h3>{category}</h3>
              <ul className="skills-list">
                {skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;