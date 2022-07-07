import React from "react";
import "./footer.css";
import { FaFacebook } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">
        Avii Sleep
      </a>
      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portafolio">Portfolio</a>
        </li>
        <li>
          <a href="#contacts">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/aviisleep">
          <FaFacebook />
        </a>
        <a href="https://www.facebook.com/aviisleep">
          <FiInstagram />
        </a>
        <a href="https://www.facebook.com/aviisleep">
          <IoLogoTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Avii Sleep Portfolio 2022 All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
