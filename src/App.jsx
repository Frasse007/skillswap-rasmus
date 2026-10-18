import React from 'react';
import './App.css';

// Body content created in collaboration with AI chatbots
function App() {
  return (
    <div className="app-container">
      {/* Header containing site name and navigation placeholder */}
      <header>
        <div className="site-name">Skill Swap</div>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#tutors">Browse Tutors</a></li>
            <li><a href="#availability">Availability</a></li>
            <li><a href="#profile">My Profile</a></li>
          </ul>
        </nav>
      </header>

      {/* Main content container */}
      <main>
        {/* Hero Section */}
        <section className="hero-section">
          <h1>Learn, Teach, and Exchange Skills</h1>
          <p>Connect with peer tutors to master new subjects or share your own expertise.</p>
          <a href="#tutors" className="btn-primary">Find a Tutor</a>
        </section>

        {/* Placeholder content for skill offerings */}
        <section className="skill-offerings">
          <h2>Featured Skill Offerings</h2>
          <p>Browse available tutoring sessions in programming, mathematics, languages, and more.</p>
        </section>
      </main>

      {/* Footer containing placeholder footer content */}
      <footer>
        <p>&copy; 2026 Skill Swap Platform. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;