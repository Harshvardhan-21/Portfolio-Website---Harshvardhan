import logo from "../assets/Images/logo.png"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        
      <img src= {logo}></img>
    
      </div>

      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#resume">Resume</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;