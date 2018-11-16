import React from "react";
import PartnerLogos from "../assets/Group.png";
export default function Partners() {
  return (
    <div className="partner-wrapper">
      <div className="partner-container">
        <h2>Platform Partners</h2>
        <p>
          The tools you love right out of the box. Figma comes with the
          following integrations. More are on the way soon!
        </p>
        <img src={PartnerLogos} alt="picture" />
      </div>
    </div>
  );
}
