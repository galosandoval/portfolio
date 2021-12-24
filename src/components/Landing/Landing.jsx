import React from "react";
import { AccentFont } from "../../styles/shared.jsx";
import { useObserver } from "../../utils/useObserver.js";
import { Header, LandingButton, LandingStyles } from "./Landing.styles.jsx";

const Landing = () => {
  const [containerRef, isVisible] = useObserver();

  return (
    <LandingStyles>
      <Header isVisible={isVisible} ref={containerRef}>
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
