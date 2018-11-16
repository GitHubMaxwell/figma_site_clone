import React, { Fragment, Component } from "react";
import Design from "../assets/central_design.png";
import Arrow from "../assets/down_arrow.png";
export default class Purple extends Component {
  componentDidMount() {
    let scrollpos = window.scrollY;
    const arrow_down = document.querySelector(".arrow_down");
    const sign_up = document.querySelector(".sign_up");

    const add_class_on_scroll = () => {
      arrow_down.classList.add("down_arrow_visible");
    };

    const remove_class_on_scroll = () => {
      arrow_down.classList.remove("down_arrow_visible");
    };

    const add_signin_slidedown = () => {
      sign_up.classList.add("signin_slidedown");
    };

    const remove_signin_slidedown = () => {
      sign_up.classList.remove("signin_slidedown");
    };

    window.addEventListener("scroll", function() {
      scrollpos = window.scrollY;
      if (scrollpos > 100) {
        remove_class_on_scroll();
      } else {
        add_class_on_scroll();
      }
      if (scrollpos > 800) {
        add_signin_slidedown();
      } else {
        remove_signin_slidedown();
      }
    });
  }

  render() {
    return (
      <Fragment>
        <div className="purple-container">
          <div className="sign_up">Sign Up</div>
          <div className="down-arrow">
            <img
              className="arrow_down down_arrow_visible"
              src={Arrow}
              alt="arrow down"
            />
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
                In the past versioning and maintaining assets was a huge
                headache. With Figma, we can spend more time on users’ problems.
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
}
