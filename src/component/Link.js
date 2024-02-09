import React from "react";

const Link = ({ href, target, className, text, icon }) => {
  return (
    <li>
      <a href={href} target={target} className={className} rel="noreferrer">
        {text}
        {icon != null ? <i className={icon}></i> : ""}
      </a>
    </li>
  );
};

export default Link;
