import React from 'react';

export default function About() {
  return (
    <section>
      <h2>About Me</h2>
      
      <p>
        A little bit about myself: I enjoy designing websites, building computers, hiking, working out, and spending time with friends.
      </p>
      <ul>
        <li><strong>Soft Skills:</strong> Commitment to learning mindset, attention to detail, problem-solving, analytical thinker</li>
        <li><strong>Professional Interests:</strong> Network Security, Data Analysis, Ethical Hacking</li>
        <li><strong>Certifications:</strong> Currently pursuing COMPTIA Security+ and Network+</li>
      </ul>
      <a
        href="/Max_Gleason_Resume_07_09_2025.docx"
        download
        style={{ color: "#00bcd4", fontWeight: "bold", display: "inline-block", marginTop: "1rem" }}
      >
        Download My Resume
      </a>
    </section>
  );
}

