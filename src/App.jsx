// src/App.jsx
import React from 'react';

// Import your components (we'll create these files next)
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';

function App() {
  return (
    <div className="portfolio-app">
      {/* The main navigation bar */}
      <Navbar />

      {/* Main content area */}
      <main>
        {/* The introductory hero section */}
        <Hero />

        {/* Placeholder for other sections */}
        {<About />}
        {<Skills />}
        {<Projects />}
        {<Certifications />}
      </main>

      {/* The footer section */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;