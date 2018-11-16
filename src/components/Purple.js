import React, { Fragment } from "react";
import Design from "../assets/central_design.png";
export default function Purple() {
  return (
    <Fragment>
      <div className="purple-container">
        <div className="down-arrow">
          <i className="fas fa-sort-down" />
        </div>

        <div className="two-up-container">
          <img src={Design} alt="picture" />
          <div className="text-container">
            <h2>Everything In One Place</h2>
            <p>
              Figma is the first interface design tool based in the browser,
              making it easier for teams to create software.
            </p>
            <ul>
              <li>Never upload, download, or worry about versions again</li>
              <li>Present and prototype in the same tool where you design</li>
              <li>One single source of truth for design files</li>
            </ul>
            <p>
              In the past versioning and maintaining assets was a huge headache.
              With Figma, we can spend more time on users’ problems.
            </p>
            <div className="author">
              {/* <img src="" alt="whatevz"/> */}
              <p>Robin Rendle, Gusto</p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
