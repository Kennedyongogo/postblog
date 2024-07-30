import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faTools, faInfoCircle, faPhone  } from '@fortawesome/free-solid-svg-icons'; // Importing necessary icons

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  
  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

 
  return (
    <nav>
      <div className="head">
        <h1>Carl Car Collection</h1>
      </div>
      <div className="toggle-btn" onClick={handleToggle}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={`body ${isMenuOpen ? 'show' : ''}`}>
        <ul>
          <li className='active'><a href="/"><FontAwesomeIcon icon={faHome}/> Home</a></li>
          <li><a href="/services"><FontAwesomeIcon icon={faTools}/> Services</a></li>
          <li><a href="/about"><FontAwesomeIcon icon={faInfoCircle}/> About Us</a></li>
          <li><a href="/contact"><FontAwesomeIcon icon={faPhone}/> Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;