import React, { useEffect, useState } from "react";
import AboutMe from "../AboutMe/AboutMe.jsx";
import { GreyFont, LandingStyles, RedContainer, Title } from "./Landing.styles.jsx";
import LandingCarousel from "./LandingCarousel.jsx";

const CAROUSEL_TIMER = 3000;

const Landing = () => {
  const [translateX, setTranslateX] = useState(0);
  const [isOn, setIsOn] = useState(true);
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const carouselContent = [
    {
      id: 1,
      p: "src\\pages\\App.jsx",
      indentP: "Line 420:69 : Uh oh, something went wrong!",
      accentFont: "no-restricted-globals",
      newLineP: "Search for the ",
      accentFont2: "keywords",
      newLineP2: " to learn more about each error."
    },
    {
      id: 2,
      surprise: "JK XD"
    },
    {
      id: 3,
      cta: "Check out my"
    }
  ];

  useEffect(() => {
    setIsOn(false);
    if (isOn && count < 2) {
      setCount((state) => state + 1);
      setTimeout(() => {
        setTranslateX((state) => state + 100);
        setIsOn(true);
        if (count === 1) setIsVisible(true);
      }, CAROUSEL_TIMER);
    }
  }, [isOn, count]);

  return (
    <LandingStyles>
      <Title>Failed to compile</Title>
      <RedContainer>
        {carouselContent.map((c) => (
          <LandingCarousel key={c.id} translateX={translateX} content={c} />
        ))}
      </RedContainer>
      <GreyFont>This error occurred during the build time and cannot be dismissed.</GreyFont>
      <AboutMe isVisible={isVisible} />
    </LandingStyles>
  );
};

export default Landing;
