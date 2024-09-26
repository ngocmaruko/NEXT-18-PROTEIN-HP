import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <header className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div
        className="menu-toggle"
        onClick={toggleMenu}
        aria-expanded={isMenuOpen}
        role="button"
        tabIndex={0}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            toggleMenu();
          }
        }}
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={`menu ${isMenuOpen ? "active" : ""}`} onClick={() => setIsMenuOpen(false)}>
        <li>
          <Link to="#next18">Next18 Proteinについて</Link>
        </li>
        <li>
          <Link to="#products">商品紹介</Link>
        </li>
        <li>
          <Link to="#testimonials">お客様の声</Link>
        </li>
        <li>
          <Link to="#advice">専門家からのアドバイス</Link>
        </li>
        <li>
          <Link to="/contact">お問い合わせ</Link>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
