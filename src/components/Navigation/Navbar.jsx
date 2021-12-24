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
import { useObserver } from "../../utils/useObserver.js";
import { NavbarStyles, NavA, Item } from "./Navbar.styles.jsx";

const Navbar = ({ theme, themeToggler, navIsVisible, handleShowNav }) => {
  const [containerRef, isVisible] = useObserver();

  return (
    <NavbarStyles ref={containerRef} isVisible={isVisible} navIsVisible={navIsVisible}>
      <Item>
        <NavA onClick={handleShowNav} href="#about">
          {aboutMeSVG}
          <span>Me</span>
        </NavA>
      </Item>
      <Item>
        <NavA onClick={handleShowNav} href="#projects">
          {projectsSVG}
          <span>Projects</span>
        </NavA>
      </Item>
      <Item>
        <NavA onClick={handleShowNav} href="#skills">
          {stackSVG}
          <span>Stack</span>
        </NavA>
      </Item>
      <Item>
        <NavA onClick={handleShowNav} href="#contact">
          {contactSVG}
          <span>Contact</span>
        </NavA>
      </Item>
      <Item>
        <NavA onClick={handleShowNav} href="https://github.com/galosandoval" target="_blank">
          {githubSVG}
          <span>Github</span>
        </NavA>
      </Item>
      <Item>
        <NavA
          onClick={handleShowNav}
          href="https://www.linkedin.com/in/galo-sandoval/"
          target="_blank"
        >
          {linkedInSVG}
          <span>LinkedIn</span>
        </NavA>
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
