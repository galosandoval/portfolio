import React from "react";
import LandingStyles from "./Landing.styles";

const Landing = () => {
  return (
    <LandingStyles>
      <div>
        <h1>Failed to compile</h1>
      </div>
      <div>
        <p>src\pages\App.jsx</p>
        <p>line 420:69 : Uh oh, something went wrong!</p>
      </div>
      <p>THIS ERROR OCCURRED DURING THE BUILD IME AND CANNOT BE DISMISSED.</p>
    </LandingStyles>
  );
};

export default Landing;
