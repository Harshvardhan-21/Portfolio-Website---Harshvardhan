const Projects = () => {
  return (
    <section id="projects" className="section gray">
      <h2>Projects</h2>
      <div className="projects-grid">
        <div className="project-card">
          <h3>Portfolio Website</h3>
          <p>Built with React & TypeScript.</p>
        </div>
        <div className="project-card">
          <h3>Task Manager App</h3>
          <p>CRUD app with local storage.</p>
        </div>
        <div className="project-card">
          <h3>E-commerce UI</h3>
          <p>Modern responsive design.</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;