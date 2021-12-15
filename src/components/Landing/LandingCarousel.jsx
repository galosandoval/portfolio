import React from "react";
import {
  AccentFont,
  NewLineP,
  LandingCarouselStyles,
  IndentP,
  ContainerButton,
  CenterCTA
} from "./Landing.styles.jsx";

const LandingCarousel = ({ content, translateX }) => {
  return (
    <LandingCarouselStyles translateX={translateX}>
      {content.surprise ? (
        <CenterCTA>
          <h1>{content.surprise}</h1>
        </CenterCTA>
      ) : content.cta ? (
        <CenterCTA>
          <h1>{content.cta}</h1>
          <ContainerButton>Projects</ContainerButton>
        </CenterCTA>
      ) : (
        <>
          <p>{content.p}</p>
          <IndentP>
            {content.indentP}
            <AccentFont ml={1}>{content.accentFont}</AccentFont>
          </IndentP>
          <NewLineP>
            {content.newLineP}
            <AccentFont>{content.accentFont2}</AccentFont>
            {content.newLineP2}
          </NewLineP>
        </>
      )}
    </LandingCarouselStyles>
  );
};

export default LandingCarousel;
