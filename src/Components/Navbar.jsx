import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Styles/Navbar.css';

function Navbar() {
  const navigate = useNavigate();

  const handleNavAndScroll = (sectionId) => {
    navigate('/', { replace: true });
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.hash = sectionId;
      }
    }, 300); // Increased timeout for reliability
  };

  return (
    <nav className="navbar-container">
      <div className="nav-item">
        <Link to="/">HOME</Link>
      </div>
      <div className="nav-item">
        <a href="#about" onClick={e => { e.preventDefault(); handleNavAndScroll('about'); }}>ABOUT ME</a>
      </div>
      <div className="nav-item">
        <a href="#contact" onClick={e => { e.preventDefault(); handleNavAndScroll('contact'); }}>CONTACT ME</a>
      </div>
      <div className="nav-item"><Link to="/projects">PROJECTS</Link></div>
      <div className="nav-item"><Link to="/gallery">GALLERY</Link></div>
      <div className="nav-item"><Link to="/education">EDUCATION</Link></div>
      <div className="nav-item"><Link to="/hobby">HOBBY</Link></div>
    </nav>
  );
}

export default Navbar;
