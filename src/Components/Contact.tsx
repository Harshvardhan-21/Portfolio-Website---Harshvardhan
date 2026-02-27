const Contact = () => {
  return (
    <section id="contact" className="section">
      <h2>Contact Me</h2>

      <p>Email: harshvardhanraj332@gmail.com</p>
      <p>Phone: 9162038214</p>

      <div style={{marginTop:"20px"}}>
        <a 
          href="https://github.com/Harshvardhan-21"
          target="_blank"
          className="btn"
        >
          GitHub
        </a>

        <a 
          href="https://linkedin.com/in/harsh-vardhan-822140281"
          target="_blank"
          className="btn"
          style={{marginLeft:"10px"}}
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
};

export default Contact;