import React from "react";
import Power from "../assets/power_of_mobile.gif";
import ArrowRight from "../assets/right-arrow.png";

export default function Black() {
  return (
    <div className="feature-blade black">
      <div className="text-container black">
        <div className="text-container-intro">
          <h2 className="dark-background">Tap the power of mobile</h2>
        </div>
        <ul>
          <li>
            <img className="arrow_right" src={ArrowRight} alt="arrow right" />
            Mirror designs to mobile with live device preview
          </li>
          <li>
            <img className="arrow_right" src={ArrowRight} alt="arrow right" />
            Interact with prototypes on mobile for more reliable user testing
          </li>
          <li>
            <img className="arrow_right" src={ArrowRight} alt="arrow right" />
            Drive the presentation of designs effortlessly from your phone
          </li>
        </ul>
      </div>
      <img src={Power} alt="derp" />
    </div>
  );
}
