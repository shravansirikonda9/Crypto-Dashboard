import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="navbar">
      <div className="logo">
        <span className="text-orange">🦅 UPRO</span>
      </div>

      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <span className={isOpen ? "bar open" : "bar"}></span>
        <span className={isOpen ? "bar open" : "bar"}></span>
        <span className={isOpen ? "bar open" : "bar"}></span>
      </div>

      <nav className={`nav-links ${isOpen ? "active" : ""}`}>
        <a href="#home" onClick={closeMenu}>
          Home
        </a>
        <a href="#features" onClick={closeMenu}>
          Features
        </a>
        <a href="#solutions" onClick={closeMenu}>
          Solutions
        </a>
        <a href="#ecosystem" onClick={closeMenu}>
          Ecosystem
        </a>
        <a href="#whitepaper" onClick={closeMenu}>
          White paper
        </a>
      </nav>
      <button className="btn-contact">Contact Us</button>
    </header>
  );
};

export default Navbar;
