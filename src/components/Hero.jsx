// src/components/Hero.jsx
import React from 'react';
import './Hero.css'; // Import the component's specific CSS

function Hero() {
  return (
    <section id="hero" className="hero-section section-padding">
      <div className="hero-content container">
        <h1 className="hero-title">
          Hardik Cumandrai
        </h1>
        <p className="hero-tagline">
          MComp Computer Science Graduate | Full-Stack Developer
        </p>
        <p className="hero-description">
          Proven ability to deliver secure, scalable, and intuitive applications using Java Spring Boot and modern front-end technologies.
        </p>
        <div className="hero-buttons">
           <a href="#projects" className="btn btn-primary">
            View My Projects
          </a>
          {/* Replace with your actual LinkedIn URL */}
          <a href="https://www.linkedin.com/in/hardik-cumandrai/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            Get in Touch
          </a>
          <a
            href="https://drive.google.com/file/d/1Nca3ExXudss6pIyVacitm3_zr9DNgDI8/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            View My Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;