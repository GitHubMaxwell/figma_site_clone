import React from "react";
import Slack from "../assets/logos/slack.png";
import BrainTree from "../assets/logos/braintree_logo.png";
import ClassPass from "../assets/logos/classpass_logo.png";
import Gusto from "../assets/logos/gusto_logo.png";
import Looker from "../assets/logos/looker_logo.png";
import Medium from "../assets/logos/medium.png";
import Microsoft from "../assets/logos/microsoft.png";
import Pivotal from "../assets/logos/pivotal_logo.png";
import Uber from "../assets/logos/uber.png";
import Upthere from "../assets/logos/upthere_logo.png";
export default function Clients() {
  return (
    <div className="client-wrapper">
      <div className="client-container">
        <h2>You're in Good Company</h2>
        <div className="logo-container">
          <img src={Medium} alt="picture" />
          <img src={Microsoft} alt="picture" />
          <img src={Slack} alt="picture" />
          <img src={Uber} alt="picture" />
          <img src={Pivotal} alt="picture" />
          <img src={Looker} alt="picture" />
          <img src={ClassPass} alt="picture" />
          <img src={Upthere} alt="picture" />
          <img src={Gusto} alt="picture" />
          <img src={BrainTree} alt="picture" />
        </div>
      </div>
    </div>
  );
}
