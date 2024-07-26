import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="head">
        <h1>Code Mafia</h1>
      </div>
      <div className="toggle-btn" onClick={handleToggle}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={`body ${isMenuOpen ? 'show' : ''}`}>
        <ul>
          <li className='active'><a href="/">Home</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;