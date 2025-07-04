// src/components/About.jsx
import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about-section section-padding">
      <div className="container">
        <h2 className="section-title text-center">About Me</h2>

        <div className="about-content">
          <div className="about-profile">
            <p className="about-description">
              Driven Computer Science graduate with an integrated master's degree from the University of Leicester. Proven ability in full-stack development and delivering secure, scalable, and intuitive applications using Java Spring Boot and modern front-end technologies. Proficient in Agile methodology, user-focused design, and complex problem-solving. Seeking to leverage expertise in software development to create innovative and impactful solutions.
            </p>
            <p className="about-description">
              My journey into computer science was fueled by a fascination for creating solutions that impact real-world problems. I thrive in dynamic environments where I can continuously learn and apply new technologies to build robust and user-friendly applications.
            </p>
          </div>

          <div className="about-details">
            <h3>Education</h3>
            <div className="education-item">
              <h4>MComp Computer Science</h4>
              <p>University of Leicester | 2021-2025</p>
              <p>Grade: 2:1</p>
            </div>
            <div className="education-item">
              <h4>A-Levels: Computer Science (B), Electronics (B), Applied Science (Distinction)</h4>
              <p>Wyggeston and Queen Elizabeth I (WQE) College | Leicester | 2019-2021</p>
            </div>
            <div className="education-item">
              <h4>GCSES: 9-4 including Mathematics (6) and English (5)</h4>
              <p>Soar Valley College | Leicester | 2014-2019</p>
            </div>

            <h3>Professional Strengths</h3>
            <ul className="strengths-list">
              <li>Analytical Thinking</li>
              <li>Problem-Solving</li>
              <li>Communication</li>
              <li>Teamwork</li>
              <li>User-Focused Design</li>
              <li>Technical Documentation</li>
            </ul>
          </div>

          {/* You can optionally add a "Work Experience" subsection here if you want to highlight it separately from projects.
              For a portfolio, often project details cover more ground, but quick highlights can be useful.
          <h3>Work Experience Highlights</h3>
          <div className="experience-item">
            <h4>IEUK 2023: Technology</h4>
            <p>Bright Network | June 2023</p>
            <p>Completed an immersive virtual experience program focusing on software engineering principles, project development lifecycle, and current industry trends.</p>
          </div>
          */}
        </div>
      </div>
    </section>
  );
}

export default About;