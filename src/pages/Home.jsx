import React from 'react';
import About from './About';

export default function Home() {
  return (
    <section className="home">
      <div className="profile-pic">
        <img src="max.jpeg" alt="Your portrait" />
      </div>
      <div className="intro">
        <h1>Max William Gleason</h1>
        <h2>Recent Graduate from WVU</h2>
        <p>
          Welcome to my website! My name is Max Gleason, I am a recent graduate from West Virginia University with a BSBAD in General Business and a minor in Business Cybersecurity.<br />
          I am passionate about IT, cybersecurity, and continuous learning. I am seeking an entry-level opportunity where I can apply my skills, grow professionally, and contribute to a dynamic team.
        </p>
        <div className="about-me-section about-me-margin">
          <About />
        </div>
      </div>
    </section>
  );
}
