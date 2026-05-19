import React from "react";
import {
  FaTwitter,
  FaDiscord,
  FaGithub,
  FaTelegramPlane,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>UPRO</h2>
        <p className="footer-desc">
          The UPRO network is all about community. It's made up of people from
          all different backgrounds and interests.
        </p>
        <p className="address">
          <strong>Address:</strong> PTA Dubai Silicon Oasis, Dubai, United Arab
          Emirates
        </p>

        <div className="social-icons">
          <a href="#twitter" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="#discord" aria-label="Discord">
            <FaDiscord />
          </a>
          <a href="#github" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="#telegram" aria-label="Telegram">
            <FaTelegramPlane />
          </a>
        </div>

        <div className="newsletter">
          <h4>Newsletter</h4>
          <p>
            Subscribe to our Newsletter to get Important News, Amazing Offers &
            Inside Scoops:
          </p>
          <form
            className="newsletter-form"
            onSubmit={(e) => e.preventDefault()}
          >
            <input type="email" placeholder="Enter your email" required />
            <button type="submit" className="btn-subscribe">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
