import React from "react";
import { fileSVG, githubSVG, linkedInSVG } from "../../assets/svgs";
import { Item, NavA } from "../Navigation/Navbar.styles";
import { FooterStyles, IconContainer } from "./Footer.styles";

const Footer = () => {
  return (
    <FooterStyles>
      <IconContainer>
        <Item>
          <NavA href="https://github.com/galosandoval">{githubSVG}</NavA>
        </Item>
        <Item>
          <NavA href="https://www.linkedin.com/in/galo-sandoval/" target="_blank">
            {linkedInSVG}
          </NavA>
        </Item>

        {fileSVG}
      </IconContainer>
    </FooterStyles>
  );
};

export default Footer;
