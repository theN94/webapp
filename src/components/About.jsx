import React from "react";

const About = () => {
  return (
    <div className = "about-container">
      <div className="about-section">
        <h1>About the Project</h1>
        <p>
          This project allows users to extract Aadhaar, PAN, and other Personally
          identifiable information (PII) from uploaded PDF, Image and Text files.
          It uses a machine learning model running on a Flask backend to parse the
          data, underline important information, and return underlined PDF and
          extracted data images.
        </p>
        <div className="about-team-container">
          <h3>Team</h3>
          <ul className="list-styling">
            <li>
              Samyak Sanganeria<span style={{ color: "green" }}> (Lead)</span>
            </li>
            <li>
              Naga Srinath<span style={{ color: "red" }}> (Backend)</span>
            </li>
            <li>
              Himagiri Nandan<span style={{ color: "blue" }}> (Frontend)</span>
            </li>
            <li>
              Kaushik Shinde<span style={{ color: "pink" }}> (Regex Engineer)</span>
            </li>
            <li>Shashikant <span style={{color: "violet"}}>(UI/UX Designer)</span></li>
            <li>Chaitanya Medaboina</li>
          </ul>
        </div>
      </div>
    </div>
    
  );
};

export default About;
