import React from "react";
import {
  aboutMeSVG,
  contactSVG,
  githubSVG,
  linkedInSVG,
  moonSVG,
  projectsSVG,
  stackSVG,
  sunSVG
} from "../../assets/svgs.jsx";
import { Toggle } from "../../utils/Toggle";
import { NavbarStyles, NavA, Item } from "./Navbar.styles.jsx";

const Navbar = ({ theme, themeToggler }) => {
  return (
    <NavbarStyles>
      <Item>
        <NavA href="#about">{aboutMeSVG}</NavA>
        <span>Me</span>
      </Item>
      <Item>
        <NavA href="#projects">{projectsSVG}</NavA>
        <span>Projects</span>
      </Item>
      <Item>
        <NavA href="#skills">{stackSVG}</NavA>
        <span>Stack</span>
      </Item>
      <Item>
        <NavA href="#contact">{contactSVG}</NavA>
        <span>Contact</span>
      </Item>
      <Item>
        <NavA href="https://github.com/galosandoval" target="_blank">
          {githubSVG}
        </NavA>
        <span>Github</span>
      </Item>
      <Item>
        <NavA href="https://www.linkedin.com/in/galo-sandoval/" target="_blank">
          {linkedInSVG}
        </NavA>
        <span>LinkedIn</span>
      </Item>
      <li>
        <Toggle onClick={themeToggler}>
          <span>{theme === "dark" ? moonSVG : sunSVG}</span>
        </Toggle>
      </li>
    </NavbarStyles>
  );
};

export default Navbar;
