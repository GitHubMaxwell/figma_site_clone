import React, { Component, Fragment } from "react";
import { HashRouter, Route } from "react-router-dom";
import Menu from "./Menu.js";
// import Footer from "./Footer.js";
import Hero from "./Hero.js";
import Purple from "./Purple.js";
// maybe the code splitting in index.js messing up routes?

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: "????"
    };
  }
  render() {
    return (
      <HashRouter>
        <Fragment>
          <Menu />
          <Hero />
          <Purple />
          {/* <Route exact path="/" component={Hero} /> */}
          {/* <Footer /> */}
        </Fragment>
      </HashRouter>
    );
  }
}
