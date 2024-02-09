import React from "react";
import { navLinks, socialLinks } from "../data";
import NavLink from "./NavLink";

const Footer = () => {
  return (
    <footer className="section footer">
      <NavLink
        links={navLinks}
        className="footer-links"
        innerClassName="footer-link"
      />
      <NavLink
        links={socialLinks}
        className="footer-icons"
        innerClassName="footer-icon"
      />
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
