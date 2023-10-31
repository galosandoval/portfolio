import React from "react";
import { AccentFont } from "../../styles/shared.jsx";
import { useObserver } from "../../utils/useObserver.js";
import styled from "styled-components/macro";
import { FromLeftAnimation } from "../../styles/animation";
import { device } from "../../styles/mediaQueries";
import { Button } from "../../styles/shared";

const LandingStyles = styled.section`
  display: flex;
  justify-content: start;
  flex-direction: column;
  align-items: start;
  height: 85vh;
  width: 83%;
  padding-top: 10rem;
  @media ${device.phone} {
    display: revert;
  }
`;

const Header = styled.div`
  font-size: 3.5rem;
  ${FromLeftAnimation}

  svg {
    height: 3.5rem;
    width: 3.5rem;
  }

  @media ${device.phone} {
    font-size: 2.5rem;

    h1 {
      text-align: center;
    }
  }
`;

const LandingButton = styled(Button)`
  margin-top: 1rem;
`;

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
