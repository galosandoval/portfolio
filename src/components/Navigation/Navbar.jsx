import React from "react";
import { contactSVG, githubSVG, linkedInSVG } from "../../styles/svgs.jsx";
import Toggle from "../../utils/Toggler";
import { NavbarStyles, NavA } from "./Navbar.styles.jsx";

const Navbar = ({ theme, themeToggler }) => {
  return (
    <NavbarStyles>
      <li>
        <NavA href="#about">Me</NavA>
      </li>
      <li>
        <NavA href="#projects">Projects</NavA>
      </li>
      <li>
        <NavA href="#skills">Skills</NavA>
      </li>
      <li>
        <NavA href="#contact">{contactSVG }</NavA>
      </li>
      <li>
        <NavA href="https://github.com/galosandoval">{githubSVG}</NavA>
      </li>
      <li>
        <NavA href="https://www.linkedin.com/in/galo-sandoval/">{linkedInSVG}</NavA>
      </li>
      <li>
        <Toggle theme={theme} toggleTheme={themeToggler} />
      </li>
    </NavbarStyles>
  );
};

export default Navbar;
