import React from "react";
import "./maz.css";
import { IoIosSearch } from "react-icons/io";

function Maz() {
  return (
    <div className="container">
      <header>
      <div className="logo">
          <img src="images/vcet.png" alt="VCET Logo" />
          </div>
        <h1>VELLAMMAL COLLEGE Of ENGINEERING & TECHNOLOGY,</h1>
        <h3>VIRAGANOOR,MADURAI-625 009</h3>
      </header>
      <nav>
        <ul>
          <li><a href="#Home">Home</a></li>
          <li><a href="#Domain">Domain</a></li>
          <li><a href="#About">About Us</a></li>
          <div className="search-box">
            <input type="text" placeholder="Quick finder" />
             <IoIosSearch className="search-icon" />
            </div>
        </ul>
        

      </nav>
      
    </div>
  );
}

export default Maz;
