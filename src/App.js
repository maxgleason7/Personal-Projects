import React from "react";

const name = "Your Name"; // <-- Replace with your name
const github = "https://github.com/maxgleason7"; // <-- Replace with your GitHub
const linkedin = "https://linkedin.com/in/max-gleason-500045222"; // <-- Replace with your LinkedIn
const phone = "202-413-2347"; // <-- Replace with your phone number
const resumeUrl = "resume.pdf"; // <-- Place your resume PDF in the public folder

function App() {
    const handleResumeClick = () => {
        window.open(resumeUrl, "_blank");
    };

    return (
        <div id="main-card">
            <h1>{name}</h1>
            <div className="links">
                <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
            <button className="resume-btn" onClick={handleResumeClick}>View Resume</button>
            <div id="contact">
                <span>📞 {phone}</span>
            </div>
        </div>
    );
}

export default App;