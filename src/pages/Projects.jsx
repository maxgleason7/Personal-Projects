import React from 'react';

export default function Projects() {
  return (
    <section>
      <h2>Projects</h2>
      <ul className="projects-list">
        <li>
          <h3>Basic Network Scanner</h3>
          <p>
            A simple network scanner built with Python that scans a range of IP addresses and reports active hosts.
            <br />
            <a href="https://github.com/maxgleason7/Personal-Projects/blob/main/network_scanner.py" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </p>
          <div className="project-screenshots">
            <img src="bscimg.png" alt="Network Scanner in Use" style={{maxWidth: "350px", marginRight: "1rem"}} />
            <img src="scanresultimg.png" alt="The Result File" style={{maxWidth: "350px"}} />
          </div>
        </li>
      </ul>
    </section>
  );
}

