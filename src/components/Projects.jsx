// src/components/Projects.jsx
import React from 'react';
import './Projects.css';

function Projects() {
  const projectsData = [
    {
      id: 1,
      title: 'Placement Management System (Java Spring Boot)',
      description: 'Engineered a comprehensive full-stack placement management system with Java Spring Boot and MySQL. This system was designed to streamline workflows for students and placement providers by enabling discrepancy flagging, real-time application tracking, and automating communications. It integrated a calendar and scheduling features for site visits and follow-ups, and used Leaflet.js for route guidance. The architecture was built to be scalable and secure, processing a high volume of applications and supporting diverse user roles.',
      technologies: ['Java', 'Spring Boot', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Leaflet.js'],
      githubLink: 'https://github.com/hardik30703/PlacementManagementTool-Java', // Placeholder: **REPLACE WITH ACTUAL GITHUB LINK**
    },
    {
      id: 2,
      title: 'E-Parking Solution',
      description: 'Developed a full-stack parking management platform using Java Spring Boot for robust backend services and MySQL for data storage. The front-end, built with HTML, CSS, and JavaScript (including Bootstrap and Leaflet.js), allows users to efficiently locate and reserve parking spaces with real-time availability and interactive map functionalities. It also integrated the Stripe API for secure payment processing and automated email confirmations, while providing distinct user portals for drivers, parking owners, and administrators.',
      technologies: ['Java', 'Spring Boot', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Leaflet.js', 'Stripe API', 'Bootstrap'],
      githubLink: 'https://github.com/hardik30703/E-ParkingSolution',
    },
    {
      id: 3,
      title: 'Voting System',
      description: 'Engineered a robust online election system using Java Spring Boot for the core logic and MySQL for efficient data operations. The system features distinct dashboards, allowing voters to securely submit votes and officials to monitor real-time results. It was developed as an end-to-end solution with a responsive UI (HTML, CSS, JavaScript) and a modular back-end architecture, prioritizing user authentication, authorization, and data integrity for a transparent and tamper-proof voting process.',
      technologies: ['Java', 'Spring Boot', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
      githubLink: 'https://github.com/hardik30703/Voting-System',
    },
    {
      id: 4,
      title: 'Task Management System',
      description: 'Built a web-based productivity tool using HTML, CSS, JavaScript, jQuery, and Bootstrap to help users organize and prioritize daily tasks. Core functionalities included task creation, editing, deletion, and calendar-based organization, all designed to enhance productivity and workflow management. The focus was on a clean, intuitive user interface for task tracking and assignment, receiving positive feedback for its usability.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap'],
      githubLink: 'https://github.com/hardik30703/Task-Management-Tool',
    },
    {
      id: 5,
      title: 'Placement Management System (PHP)',
      description: 'Developed an earlier iteration of a placement management system using PHP for server-side scripting and MySQL for data persistence, alongside HTML, CSS, and JavaScript for the front-end. This digital system streamlined student placement forms, tracking, and scheduling, significantly reducing manual administrative workload. The project applied Agile development methodologies with frequent sprint-based releases, demonstrating foundational web development skills and an understanding of MVC architecture and basic web security principles.',
      technologies: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
      githubLink: 'https://github.com/hardik30703/Placement-Management-Tool',
    },
  ];

  return (
    <section id="projects" className="projects-section section-padding">
      <div className="container">
        <h2 className="section-title text-center">My Projects</h2>

        <div className="projects-grid">
          {projectsData.map((project) => (
            <a
              href={project.githubLink && project.githubLink !== '#' ? project.githubLink : null}
              target="_blank"
              rel="noopener noreferrer"
              className={`project-card-link ${project.githubLink && project.githubLink !== '#' ? '' : 'no-link'}`}
              key={project.id}
              style={{ cursor: project.githubLink && project.githubLink !== '#' ? 'pointer' : 'default' }}
            >
              <div className="project-card">
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech-stack">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  {(!project.githubLink || project.githubLink === '#') && (
                    <span className="no-link-message">Links coming soon!</span>
                  )}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;