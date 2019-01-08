import React from "react";

export default function NavHeader(props) {
  return (
    <div className={"nav-header" + (props.scrolled ? "-scrolled" : "")}>
      <a
        className="nav-header-link"
        href="localhost:3000"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>1.800.555.1234</span>
      </a>
      <a
        className="nav-header-link"
        href="localhost:3000"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>email@emailaddress.com</span>
      </a>
      <span className="nav-header-social-icons">
        <a
          className="nav-header-social-link"
          href="localhost:3000"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>F</span>
        </a>
        <a
          className="nav-header-social-link"
          href="localhost:3000"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>T</span>
        </a>
        <a
          className="nav-header-social-link"
          href="localhost:3000"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>G+</span>
        </a>
      </span>
    </div>
  );
}
