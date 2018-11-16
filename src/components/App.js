import React, { Fragment } from "react";
import { HashRouter } from "react-router-dom";
import Menu from "./Menu.js";
import Footer from "./Footer.js";
import Hero from "./Hero.js";
import Purple from "./Purple.js";
import Black from "./Black.js";
import Gray from "./Gray.js";
import PurpleTwo from "./PurpleTwo.js";
import Partners from "./Partners.js";
import Clients from "./Clients.js";

export default function App() {
  return (
    <HashRouter>
      <Fragment>
        <Menu />
        <Hero />
        <Purple />
        <Black />
        <Gray />
        <PurpleTwo />
        <Partners />
        <Clients />
        <Footer />
      </Fragment>
    </HashRouter>
  );
}
