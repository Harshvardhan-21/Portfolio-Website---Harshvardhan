import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>

        <p className="about-description">
          I am a BCA student from Guru Kashi University with strong interest in 
          Web Development and Machine Learning. I build real-world projects 
          using React, Python and modern technologies.
        </p>

        <div className="about-grid">

          <div className="about-card">
            <h3>Technical Skills</h3>
            <ul>
              <li><strong>Languages:</strong> C, C++, Python, Java, HTML, CSS, PHP</li>
              <li><strong>Libraries:</strong> Pandas, NumPy, Scikit Learn</li>
              <li><strong>Tools:</strong> Git, GitHub, MS Office</li>
            </ul>
          </div>

          <div className="about-card">
            <h3>Internships</h3>
            <ul>
              <li>Email Support Executive Intern - Germanium Technologies</li>
              <li>Python Programming Intern - CodTech IT Solutions</li>
            </ul>
          </div>

          <div className="about-card">
            <h3>Education</h3>
            <ul>
              <li>BCA - Guru Kashi University (CGPA: 9.16)</li>
              <li>12th Science - 73%</li>
              <li>10th Science - 74%</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;