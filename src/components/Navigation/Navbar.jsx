import React from "react";
import Toggle from "../../utils/Toggler";
import NavbarStyles from "./Navbar.styles";

const Navbar = ({ theme, themeToggler }) => {
  return (
    <NavbarStyles>
      <li>About Me</li>
      <li>Projects</li>
      <li>Skills</li>
      
      <li>
        <Toggle theme={theme} toggleTheme={themeToggler} />
      </li>
    </NavbarStyles>
  );
};

export default Navbar;
