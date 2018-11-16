import React from "react";
import Power from "../assets/power_of_mobile.gif";
export default function Black() {
  return (
    <div className="black-container">
      <div className="text">
        <h2>Tap the power of mobile</h2>
        <ul>
          <li>Mirror designs to mobile with live device preview</li>
          <li>
            Interact with prototypes on mobile for more reliable user testing
          </li>
          <li>
            Drive the presentation of designs effortlessly from your phone
          </li>
        </ul>
      </div>
      <img src={Power} alt="derp" />
    </div>
  );
}
