import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import hamburger and close icons

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={`menu ${isMenuOpen ? 'active' : ''}`}>
        <li><a href="#next18">Next18 Proteinについて</a></li>
        <li><a href="#products">商品紹介</a></li>
        <li><a href="#testimonials">お客様の声</a></li>
        <li><a href="#advice">専門家からのアドバイス</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
