import React, { Component } from "react";
import NavHeader from "./NavHeader";

import "./Nav.css";

export default class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scrolled: false
    };
  }

  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll);
  };

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.handleScroll);
  };

  handleScroll = e => {
    if (!this.state.scrolled && document.documentElement.scrollTop > 30) {
      this.setState({ scrolled: true });
      console.log("scrolled");
    } else if (
      this.state.scrolled &&
      document.documentElement.scrollTop <= 30
    ) {
      this.setState({ scrolled: false });
      console.log("unscrolled");
    }
  };

  render() {
    return (
      <div className="nav">
        <NavHeader scrolled={this.state.scrolled} />
        <div className="container nav-main">
          <a
            href="http://localhost:3000"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              className={
                "nav-main-logo" + (this.state.scrolled ? "-scrolled" : "")
              }
            >
              Logo
            </div>
          </a>

          <ul className="nav-main-menu">
            <li>
              <a
                className="nav-main-menu-link services-link"
                href="http://localhost:3000"
                target="_blank"
                rel="noopener noreferrer"
              >
                Services
              </a>
            </li>
            <li>
              <a
                className="nav-main-menu-link portfolio-link"
                href="http://localhost:3000"
                target="_blank"
                rel="noopener noreferrer"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                className="nav-main-menu-link blogs-link"
                href="http://localhost:3000"
                target="_blank"
                rel="noopener noreferrer"
              >
                Blogs
              </a>
            </li>
            <li>
              <a
                className="nav-main-menu-link contact-link"
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
}
