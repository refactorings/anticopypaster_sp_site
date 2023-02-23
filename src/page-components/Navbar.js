import React from 'react';
import '../styles/Navbar.css';
import {  Link } from "react-router-dom";


const navbar= () =>{
  return (
  <ul className="UL">
    <li className="ListItem">
      <Link to="/anticopypaster/" className="LinkStyle">Home</Link>
    </li>
    <li className="ListItem">
      <Link to="/anticopypaster/Documentation" className="LinkStyle">Documentation</Link>
    </li>
    <li className="ListItem">
      <Link to="/anticopypaster/FourUps" className="LinkStyle">Four Ups</Link>
    </li>
    <li className="ListItem">
      <Link to="/anticopypaster/TimeTracking" className="LinkStyle">Time Tracking</Link>
    </li>
    <li className="ListItem">
      <Link to="/anticopypaster/Team" className="LinkStyle">Team</Link>
    </li>
    <li className="ListItem">
      <Link to="/anticopypaster/Sponsor" className="LinkStyle">Sponsor</Link>
    </li>
  </ul>
  );
}
export default navbar;