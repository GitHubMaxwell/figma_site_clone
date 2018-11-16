import React from "react";
import Empower from "../assets/empower_your_team.gif";
export default function Gray() {
  return (
    <div className="gray-container">
      <div className="text">
        <h2>Empower your team</h2>
        <p>Remove the friction of working together so you can get more done.</p>
        <ul>
          <li>
            Engineers can inspect, export, and copy CSS, iOS, and Android code
          </li>
          <li>Give marketing the ability to edit copy</li>
          <li>
            Quickly communicate ideas by sharing interactive prototypes with a
            link
          </li>
        </ul>
        <p>
          Giving Marketing the ability to update copy along the way has allowed
          us to test and iterate faster.
        </p>
        <div className="author">
          {/* <img src="" alt="whatevz"/> */}
          <p>Laurent Baumann, Upthere</p>
        </div>
      </div>
      <img src={Empower} alt="derp" />
    </div>
  );
}
