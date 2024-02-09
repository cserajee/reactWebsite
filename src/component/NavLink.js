import React from "react";
import Link from "./Link";

const NavLink = ({ links, className, innerClassName }) => {
  return (
    <ul className={className} id="nav-links">
      {links.map((nav) => {
        return <Link {...nav} key={nav.id} className={innerClassName} />;
      })}
    </ul>
  );
};

export default NavLink;
