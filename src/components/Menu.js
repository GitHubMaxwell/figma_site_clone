import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import figma from "../assets/figma_logo.png";
export default function Menu() {
  return (
    <Fragment>
      <div className="menu-logo">
        <img src={figma} alt="menu logo" />
      </div>
      <nav className="menu-container">
        <div className="menu-right-container">
          <ul>
            <li>
              <Link to="/">Features</Link>
            </li>
            <li>
              <Link to="/">Pricing</Link>
            </li>
            <li>
              <Link to="/">Careers</Link>
            </li>
            <li>
              <Link to="/">Blog</Link>
            </li>
            <li>
              <Link to="/">Sign In</Link>
            </li>
          </ul>
          <div className="signup">Sign Up</div>
        </div>
      </nav>
    </Fragment>
  );
}
