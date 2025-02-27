import React from "react";
import "./tit.css"; // Import the CSS for styling
//import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaPhone } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";

const TitleBar = () => {
  return (
    <div>
      {/* Top bar with logo, search, and social icons */}
      <div className="top-bar">
        <div className="logo">
          <img src="images/vcet.png" alt="VCET Logo" />
          <span>VELLAMMAL COLLEGE OF ENGINEERINGA & TECHNOLOGY</span>
        </div>

        <div className="search-box">
          <input type="text" placeholder="Quick finder" />
          <IoIosSearch className="search-icon" />
        </div>

      </div>

      {/* Navigation bar */}
      <nav className="nav-bar">
        <ul>
        <li><a href="titl.js">Home</a></li>
          <li><a href="titl.js">Domain</a></li>
          <li><a href="titl.js">About</a></li>
          
        </ul>
      </nav>
    </div>
  );
};

export default TitleBar;
