import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar-container">
      <div className="nav-item"><Link to="/#home">HOME</Link></div>
      <div className="nav-item"><Link to="/#about">ABOUT ME</Link></div>
      <div className="nav-item"><Link to="/#contact">CONTACT ME</Link></div>
      <div className="nav-item"><Link to="/projects">PROJECTS</Link></div>
      <div className="nav-item"><Link to="/gallery">GALLERY</Link></div>
      <div className="nav-item"><Link to="/education">EDUCATION</Link></div>
      <div className="nav-item"><Link to="/hobby">HOBBY</Link></div>
    </nav>
  );
}

export default Navbar;
