import React, { Fragment } from "react";
import DesignP from "../assets/design_programmatically.gif";
export default function Purple() {
  return (
    <Fragment>
      <div className="purple-two-container">
        <div className="two-up-container">
          <img src={DesignP} alt="picture" />
          <div className="text-container">
            <h2>Design Programmatically</h2>
            <p>
              All of the tools you need to create dynamic, digital products.
            </p>
            <ul>
              <li>Design responsively with constraints and grids</li>
              <li>Build cross-team design systems</li>
              <li>Export SVG and CSS directly from design files</li>
            </ul>
            <p>
              Figma has made the future. Finally, someone has designed a modern
              approach to product design.
            </p>
            <div className="author">
              {/* <img src="" alt="whatevz"/> */}
              <p>Brad Artziniega, Medium</p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
