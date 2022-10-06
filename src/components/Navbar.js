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
      <Link to="/" style={linkStyle}>Home</Link>
    </li>
    <li className="ListItem">
      <Link to="/Links" style={linkStyle}>Artifacts</Link>
    </li>
    <li className="ListItem">
      <Link to="/Team" style={linkStyle}>Team</Link>
    </li>
  </ul>
  );
}
export default navbar;