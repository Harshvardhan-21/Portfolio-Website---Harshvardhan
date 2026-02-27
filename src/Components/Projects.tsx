const Projects = () => {
  return (
    <section id="projects" className="section gray">
      <h2>Projects</h2>

      <div className="projects-grid">

        <div className="project-card">
          <h3>Spam Email Classifier</h3>
          <p>ML based spam detection using Python & Scikit-Learn.</p>
          <a 
            href="https://github.com/Harshvardhan-21/CODTECH-python-Task-4"
            target="_blank"
          >
            View Code
          </a>
        </div>

        <div className="project-card">
          <h3>Password Generator Desktop App</h3>
          <p>GUI application built using Python Tkinter.</p>
          <a 
            href="https://github.com/Harshvardhan-21/staxtech-project-2"
            target="_blank"
          >
            View Code
          </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;