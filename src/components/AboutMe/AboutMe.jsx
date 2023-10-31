import React from "react";
import {
  AboutButton,
  AboutMeStyles,
  Content,
  MeImg,
  RedAbout,
} from "./AboutMe.styles";
import profilePic from "../../assets/mepng.png";
import { AccentFont } from "../../styles/shared";
import { useObserver } from "../../utils/useObserver";

const AboutMe = () => {
  const [imgRef, imgIsVisible] = useObserver();
  const [contentRef, contentIsVisible] = useObserver();
  return (
    <AboutMeStyles id="about">
      <RedAbout>
        <MeImg
          ref={imgRef}
          isVisible={imgIsVisible}
          src={profilePic}
          alt="My Mugshot"
        />
        <Content ref={contentRef} isVisible={contentIsVisible}>
          <p>
            I am <AccentFont>Galo Sandoval</AccentFont>. I enjoy developing
            websites in <AccentFont>JavaScript</AccentFont>, working on both
            <AccentFont> frontend</AccentFont> and{" "}
            <AccentFont>backend</AccentFont>. I am always striving to learn and
            develop new skills and become a better{" "}
            <AccentFont>software engineer</AccentFont>.
          </p>
          <p>
            My primary experience is in <AccentFont>React</AccentFont> and{" "}
            <AccentFont>Node </AccentFont>
            interacting with relational databases. More recently I have been
            studying NoSql databases, specifically Mongodb. My next project will
            be made using the MERN stack.
          </p>
          <AboutButton>Resume</AboutButton>
        </Content>
      </RedAbout>
    </AboutMeStyles>
  );
};

export default AboutMe;
