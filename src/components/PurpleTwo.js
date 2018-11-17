import React from "react";
import DesignP from "../assets/design_programmatically.gif";
import ArrowRight from "../assets/right-arrow.png";

export default function Purple() {
  return (
    <div className="feature-blade purpletwo">
      <img src={DesignP} alt="picture" />
      <div className="text-container">
        <div className="text-container-intro">
          <h2>Design Programmatically</h2>
          <p>All of the tools you need to create dynamic, digital products.</p>
        </div>

        <ul>
          <li>
            <img className="arrow_right" src={ArrowRight} alt="arrow right" />
            Design responsively with constraints and grids
          </li>
          <li>
            <img className="arrow_right" src={ArrowRight} alt="arrow right" />
            Build cross-team design systems
          </li>
          <li>
            <img className="arrow_right" src={ArrowRight} alt="arrow right" />
            Export SVG and CSS directly from design files
          </li>
        </ul>
        <div className="author_section">
          <p>
            Figma has made the future. Finally, someone has designed a modern
            approach to product design.
          </p>
          <div className="author">
            <p>Brad Artziniega, Medium</p>
          </div>
        </div>
      </div>
    </div>
  );
}
