import React from "react";
import "./About.css";

const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>

        <p className="about-description">
          I am a passionate BCA student with strong interest in software 
          development, web technologies, and problem-solving. I enjoy building 
          real-world projects and continuously improving my technical skills.
        </p>

        <div className="about-grid">

          <div className="about-card">
            <h3>Technical Skills</h3>
            <ul>
              <li><strong>Languages:</strong> C, C++, Java, Python, JavaScript</li>
              <li><strong>Web:</strong> HTML, CSS, React.js, Node.js, Express.js</li>
              <li><strong>Database:</strong> MySQL, MongoDB</li>
              <li><strong>Tools:</strong> Git, GitHub</li>
              <li><strong>Other:</strong> Flutter, Django</li>
            </ul>
          </div>

          <div className="about-card">
            <h3>Projects</h3>
            <ul>
              <li>Student Management System</li>
              <li>E-commerce Website</li>
              <li>Expense Tracker</li>
              <li>Chatbot using Python</li>
              <li>Portfolio Website</li>
            </ul>
          </div>

          <div className="about-card">
            <h3>Certifications</h3>
            <ul>
              <li>Coursera Certification</li>
              <li>Udemy Certification</li>
              <li>Google IT Support / Data Analytics</li>
              <li>Microsoft Azure Fundamentals</li>
            </ul>
          </div>

          <div className="about-card">
            <h3>Internships</h3>
            <ul>
              <li>Web Developer Intern</li>
              <li>Software Developer Intern</li>
              <li>Data Analyst Intern</li>
              <li>IT Support Intern</li>
            </ul>
          </div>

          <div className="about-card">
            <h3>Soft Skills</h3>
            <ul>
              <li>Problem Solving</li>
              <li>Teamwork</li>
              <li>Communication</li>
              <li>Time Management</li>
              <li>Leadership</li>
            </ul>
          </div>

          <div className="about-card">
            <h3>Career Interests</h3>
            <ul>
              <li>Web Development</li>
              <li>Data Science</li>
              <li>Artificial Intelligence</li>
              <li>Cybersecurity</li>
              <li>App Development</li>
              <li>Cloud Computing</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;