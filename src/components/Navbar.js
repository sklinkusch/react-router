import React from 'react'
import { NavLink } from 'react-router-dom';
import "../styles/Navbar.css";
import { linkSync } from 'fs';

const links = [
  { url: "/home", name: "Home" },
  { url: "/about", name: "About" },
  { url: "/info", name: "Info" },
  { url: "/credits", name: "Credits" },
  { url: "/topics", name: "Topics" }
];

export default function Navbar() {
  return (
    <ul>
      {links.map(link => {
        return (<li><NavLink activeClassName="selected" to={link.url}>{link.name}</NavLink></li>);
      })}
    </ul>
  )
}
