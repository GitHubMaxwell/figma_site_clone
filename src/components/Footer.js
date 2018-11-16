import React from "react";
// change footer to class component to handle state
export default function Footer() {
  return (
    <footer className="footer">
      <ul className="footer__list">
        <li className="footer__list__header footer__list__header__logo">
          Figma
        </li>
        <li>
          <i className="fab fa-instagram" /> Instagram
        </li>
        <li>
          <i className="fab fa-facebook" /> Facebook
        </li>
        <li>
          <i className="fab fa-twitter" /> Twitter
        </li>
        <li>
          <i className="fab fa-medium" /> Medium
        </li>
      </ul>
      <ul className="footer__list">
        <li className="footer__list__header">Use Cases</li>
        <li>UI Design</li>
        <li>UX Design</li>
        <li>Prototyping</li>
        <li>Graphic Design</li>
        <li>Wireframing</li>
        <li>Brainstorming</li>
      </ul>
      <ul className="footer__list">
        <li className="footer__list__header">Explore</li>
        <li>Figma</li>
        <li>Customers</li>
        <li>Why I Love Figma</li>
        <li>Blog</li>
        <li>Pricing</li>
        <li>Features</li>
        <li>Contact</li>
        <li>Learn Design</li>
      </ul>
      <ul className="footer__list">
        <li className="footer__list__header">Resources</li>
        <li>Support</li>
        <li>Education</li>
        <li>Developers</li>
        <li>Downloads</li>
        <li>Releases</li>
        <li>Careers</li>
        <li>Legal</li>
        <li>Design Directory</li>
      </ul>
      <ul className="footer__list">
        <li className="footer__list__header">Compare</li>
        <li>Sketch</li>
        <li>Adobe XD</li>
        <li>Invision Studios</li>
        <li>Framer</li>
        <li>Design on Windows</li>
      </ul>
    </footer>
  );
}
