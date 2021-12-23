import React from "react";
import { AccentFont } from "../../styles/shared.jsx";
import { Header, LandingButton, LandingStyles } from "./Landing.styles.jsx";

const Landing = () => {
  return (
    <LandingStyles>
      <Header>
        <h1>
          Hi, I'm <AccentFont>Galo.</AccentFont>
        </h1>
        <h1> I'm a web developer.</h1>
        <LandingButton href="#projects">Projects</LandingButton>
      </Header>
    </LandingStyles>
  );
};

export default Landing;
