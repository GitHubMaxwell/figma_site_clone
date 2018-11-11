import React, { Fragment } from "react";
import { Link } from "react-router-dom";
export default function Menu() {
  return (
    <Fragment>
      <div className="menu-logo">
        <img src="https://picsum.photos/50/50" alt="menu logo" />
      </div>
      <nav className="menu-container">
        {/* <svg viewBox="0 0 38 57" className="menu-logo">
        <path
          fill="#1abcfe"
          d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z"
        />
        <path
          fill="#0acf83"
          d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z"
        />
        <path fill="#ff7262" d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" />
        <path
          fill="#f24e1e"
          d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z"
        />
        <path
          fill="#a259ff"
          d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z"
        />
      </svg> */}
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
