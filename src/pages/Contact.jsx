import React from 'react';

export default function Contact() {
  return (
    <section>
      <h2><span className="contact-label contact-heading">Contact</span></h2>
      <p>
        <span className="contact-label">Email:</span> <a className="contact-link" href="mailto:maxwilliamgleason@gmail.com">maxwilliamgleason@gmail.com</a><br />
        <span className="contact-label">Phone:</span> <a className="contact-link" href="tel:+13041234567">(202) 413-2347</a><br />
        <span className="contact-label">LinkedIn:</span> <a className="contact-link" href="https://www.linkedin.com/in/max-gleason-500045222/" target="_blank" rel="noopener noreferrer">
          linkedin.com/in/max-gleason-500045222
        </a>
      </p>
    </section>
  );
}
