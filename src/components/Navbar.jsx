import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo">
        <span className="text-orange">🦅 UPRO</span>
      </div>
      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#upro">UPRO ▾</a>
        <a href="#blog">Blog</a>
        <a href="#wallet">Canopus Wallet</a>
        <a href="#trade">Trade ▾</a>
        <a href="#asset">Asset ▾</a>
        <a href="#whitepaper">White paper</a>
      </nav>
      <button className="btn-contact">Contact Us</button>
    </header>
  );
};

export default Navbar;
