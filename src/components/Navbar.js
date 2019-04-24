import React from 'react'
import { NavLink } from 'react-router-dom';
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <ul>
      <li>
        <NavLink activeClassName="selected" to="/home">Home</NavLink>
      </li>
      <li>
        <NavLink activeClassName="selected" to="/about">About</NavLink>
      </li>
      <li>
        <NavLink activeClassName="selected" to="/info">Info</NavLink>
      </li>
      <li>
        <NavLink activeClassName="selected" to="/credits">Credits</NavLink>
      </li>
      <li>
        <NavLink activeClassName="selected" to="/topics">Topics</NavLink>
      </li>
    </ul>
  )
}
