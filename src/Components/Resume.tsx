const Resume = () => {
    return (
      <section id="resume" className="resume-section">
        <div className="resume-container">
          <h2>My Resume</h2>
  
          <p>You can download my resume below.</p>
  
          <a href="/resume.pdf" download className="btn">
            Download Resume
          </a>
        </div>
      </section>
    );
  };
  
  export default Resume;