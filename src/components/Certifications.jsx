// src/components/Certifications.jsx
import React from 'react';
import './Certifications.css';

function Certifications() {
  const certificationsData = [
    {
      id: 1,
      title: 'IEUK 2023: Technology',
      organization: 'Bright Network',
      date: 'June 2023',
      description: 'Completed an immersive virtual experience program where I focused on core software engineering principles and the project development lifecycle. Gained practical understanding of current industry trends and contributed to a project goal within a tight 2-week timeframe by collaborating effectively with a diverse team of 4 students.',
      technologies: ['Software Engineering Principles', 'Project Development Lifecycle', 'Team Collaboration'],
    },
    {
      id: 2,
      title: 'Intensive Cloud Computing Training',
      organization: 'Independent Study/Labs', // Or specific provider if there was one
      date: 'October 2023',
      description: 'Engaged in 6 hands-on labs across leading cloud platforms (AWS, Azure, and GCP), gaining practical skills in cloud architecture, identity and access management, and deployment pipelines. Designed and launched a functional cloud-based application, prioritizing both stringent security measures and intuitive usability for end-users.',
      technologies: ['AWS', 'Azure', 'GCP', 'Cloud Architecture', 'IAM', 'Deployment Pipelines', 'Cloud Security'],
    },
    {
      id: 3,
      title: 'Walmart Advanced Software Engineering Virtual Experience Program',
      organization: 'Forage',
      date: 'June 2023',
      description: 'Applied advanced design principles to backend architecture and relational databases, specifically solving complex problems in real-world use cases. Focused on enhancing software scalability and developing efficient data structures, applying best practices for writing clean, maintainable code, particularly in optimizing data retrieval efficiency in simulated environments.',
      technologies: ['Backend Architecture', 'Relational Databases', 'Data Structures', 'Software Scalability', 'Clean Code'],
    },
    {
      id: 4,
      title: 'Accenture Developer Virtual Experience Program',
      organization: 'Forage',
      date: 'June 2023',
      description: 'Practiced essential unit testing, comprehensive debugging, and strategic software lifecycle planning within a simulated client project environment. This program significantly improved my problem-solving abilities and enhanced technical documentation skills through a series of structured and challenging tasks.',
      technologies: ['Unit Testing', 'Debugging', 'Software Lifecycle Planning', 'Technical Documentation'],
    },
  ];

  return (
    <section id="certifications" className="certifications-section section-padding">
      <div className="container">
        <h2 className="section-title text-center">Certifications & Professional Development</h2>

        <div className="certifications-grid">
          {certificationsData.map((cert) => (
            <div className="certification-card" key={cert.id}>
              <h3>{cert.title}</h3>
              <p className="certification-meta">{cert.organization} | {cert.date}</p>
              <p className="certification-description">{cert.description}</p>
              <div className="certification-tech-stack">
                {cert.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;