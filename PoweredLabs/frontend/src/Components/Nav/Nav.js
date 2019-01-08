import React from "react";
import NavHeader from "./NavHeader";

import "./Nav.css";

export default function Nav() {
  return (
    <div className="nav">
      <NavHeader />
      <div className="container nav-main">
        <a
          href="http://localhost:3000"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="nav-main-logo">Logo</div>
        </a>

        <ul className="nav-main-menu">
          <li>
            <a
              href="http://localhost:3000"
              target="_blank"
              rel="noopener noreferrer"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="http://localhost:3000"
              target="_blank"
              rel="noopener noreferrer"
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="http://localhost:3000"
              target="_blank"
              rel="noopener noreferrer"
            >
              Blogs
            </a>
          </li>
          <li>
            <a
              href="http://localhost:3000"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
