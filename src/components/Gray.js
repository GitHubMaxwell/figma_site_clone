import React from "react";
import Empower from "../assets/empower_your_team.gif";
import ArrowRight from "../assets/right-arrow.png";
import Laurent from "../assets/laurent-baumann.png";

export default function Gray() {
  return (
    <div className="feature-blade gray">
      <div className="text-container">
        <div className="text-container-intro">
          <h2 className="dark-background">Empower your team</h2>
          <p>
            Remove the friction of working together so you can get more done.
          </p>
        </div>

        <ul>
          <li>
            <img className="arrow_right" src={ArrowRight} alt="arrow right" />
            Engineers can inspect, export, and copy CSS, iOS, and Android code
          </li>
          <li>
            <img className="arrow_right" src={ArrowRight} alt="arrow right" />
            Give marketing the ability to edit copy
          </li>
          <li>
            <img className="arrow_right" src={ArrowRight} alt="arrow right" />
            Quickly communicate ideas by sharing interactive prototypes with a
            link
          </li>
        </ul>
        <div className="author_section">
          <p>
            Giving Marketing the ability to update copy along the way has
            allowed us to test and iterate faster.
          </p>
          <div className="author">
            <img src={Laurent} alt="whatevz" />
            <p>Laurent Baumann, Upthere</p>
          </div>
        </div>
      </div>
      <img src={Empower} alt="derp" />
    </div>
  );
}
