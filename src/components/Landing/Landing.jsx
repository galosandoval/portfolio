import React, { useEffect, useState } from "react";
import { AccentFont, Title } from "../../styles/shared.jsx";
import AboutMe from "../AboutMe/AboutMe.jsx";
import { GreyFont, Header, LandingStyles, RedContainer } from "./Landing.styles.jsx";

const Landing = () => {
  return (
    <LandingStyles>
      <Header>
        <h1>
          Hi, I'm <AccentFont>Galo.</AccentFont>
        </h1>
        <h1> I'm a web developer.</h1>
      </Header>
    </LandingStyles>
  );
};

export default Landing;
