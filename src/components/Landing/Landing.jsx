import React from "react";
import { AccentFont, LandingStyles, RedContainer, Title } from "./Landing.styles.jsx";

const Landing = () => {
  return (
    <LandingStyles gap={0}>
      <Title>Failed to compile</Title>
      <RedContainer>
        <p>src\pages\App.jsx</p>
        <p>
          line 420:69 : Uh oh, something went wrong!<AccentFont>no-restricted-globals</AccentFont>
        </p>
      </RedContainer>
      <p>THIS ERROR OCCURRED DURING THE BUILD TIME AND CANNOT BE DISMISSED.</p>
    </LandingStyles>
  );
};

export default Landing;
