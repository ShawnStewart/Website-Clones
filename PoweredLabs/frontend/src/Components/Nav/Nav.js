import React, { Component } from "react";
import NavHeader from "./NavHeader";

import "./Nav.css";

export default class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeMenuItem: "",
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
    } else if (
      this.state.scrolled &&
      document.documentElement.scrollTop <= 30
    ) {
      this.setState({ scrolled: false });
    }
  };

  handleMenuItemClick = name => {
    console.log(name);
    this.setState({ activeMenuItem: name });
  };

  render() {
    return (
      <div className="nav">
        <NavHeader scrolled={this.state.scrolled} />
        <div className="container nav-main">
          <a href="#" onClick={() => this.handleMenuItemClick("")}>
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
                className={
                  "nav-main-menu-link services-link" +
                  (this.state.activeMenuItem === "services" ? "-active" : "")
                }
                href="#"
                onClick={() => this.handleMenuItemClick("services")}
              >
                Services
              </a>
            </li>
            <li>
              <a
                className={
                  "nav-main-menu-link portfolio-link" +
                  (this.state.activeMenuItem === "portfolio" ? "-active" : "")
                }
                href="#"
                onClick={() => this.handleMenuItemClick("portfolio")}
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                className={
                  "nav-main-menu-link blogs-link" +
                  (this.state.activeMenuItem === "blogs" ? "-active" : "")
                }
                href="#"
                onClick={() => this.handleMenuItemClick("blogs")}
              >
                Blogs
              </a>
            </li>
            <li>
              <a
                className={
                  "nav-main-menu-link contact-link" +
                  (this.state.activeMenuItem === "contact" ? "-active" : "")
                }
                href="#"
                onClick={() => this.handleMenuItemClick("contact")}
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
