import React from "react";
import { navLinks, socialLinks } from "../data";
import NavLink from "./NavLink";
import logo from "../images/logo.svg";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <NavLink
          links={navLinks}
          className="nav-links"
          innerClassName="nav-link"
        />
        <NavLink
          links={socialLinks}
          className="nav-icons"
          innerClassName="nav-icon"
        />
      </div>
    </nav>
  );
};

export default NavBar;
