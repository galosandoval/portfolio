import React from "react";
import { AboutButton, AboutMeStyles, Content, RedAbout } from "./AboutMe.styles";
import profilePic from "../../assets/profile.jpg";
import { AccentFont, Title } from "../Landing/Landing.styles";

const AboutMe = ({ isVisible }) => {
  return (
    <AboutMeStyles isVisible={isVisible}>
      <Title>Me</Title>
      <RedAbout>
        <img src={profilePic} alt="My Mugshot" />
        <Content>
          <p>
            I am <AccentFont>Galo Sandoval</AccentFont>. I enjoy developing websites in{" "}
            <AccentFont>JavaScript</AccentFont>, working on both
            <AccentFont> frontend</AccentFont> and <AccentFont>backend</AccentFont>. I am always
            striving to learn and develop new skills and become a better{" "}
            <AccentFont>software engineer</AccentFont>.
          </p>
          <p>
            My primary experience is in <AccentFont>React</AccentFont> and{" "}
            <AccentFont>Node </AccentFont>
            interacting with relational databases. More recently I have been studying NoSql
            databases, specifically Mongodb. My next project will be made using the MERN stack.
          </p>
          <AboutButton>Resume</AboutButton>
        </Content>
      </RedAbout>
    </AboutMeStyles>
  );
};

export default AboutMe;
