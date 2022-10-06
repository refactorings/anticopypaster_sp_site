import React from 'react';
import '../styles/Navbar.css';
import {  Link } from "react-router-dom";


const linkStyle = {
    display: "block",
    color: "white",
    padding: "14px 16px",
    textDecoration: "none",
    textAlign: "center"
}

const navbar= () =>{
  return (
  <ul className="UL">
    <li className="ListItem">
      <Link to="/anticopypaster/" style={linkStyle}>Home</Link>
    </li>
    <li className="ListItem">
      <Link to="/anticopypaster/Documentation" style={linkStyle}>Documentation</Link>
    </li>
    <li className="ListItem">
      <Link to="/anticopypaster/FourUps" style={linkStyle}>Four Ups</Link>
    </li>
    <li className="ListItem">
      <Link to="/anticopypaster/TimeTracking" style={linkStyle}>Time Tracking</Link>
    </li>
    <li className="ListItem">
      <Link to="/anticopypaster/Team" style={linkStyle}>Team</Link>
    </li>
    <li className="ListItem">
      <Link to="/anticopypaster/Sponsor" style={linkStyle}>Sponsor</Link>
    </li>
  </ul>
  );
}
export default navbar;