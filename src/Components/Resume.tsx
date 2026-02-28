import resume from "../assets/resume.pdf"

const Resume = () => {
    return (
      <section id="resume" className="resume-section">
        <div className="resume-container">
          <h2>My Resume</h2>
  
          <p>You can download my resume below.</p>
  
          <a href={resume} download className="btn">
            Download Resume
          </a>

          
        </div>

         <div className="resume-preview">
        <a href={resume} target="_blank" rel="noopener noreferrer" className="btn">
  Preview Resume
</a>
      </div>
      </section>
    );
  };
  
  export default Resume;