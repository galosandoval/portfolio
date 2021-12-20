import React from "react";
import { fileSVG, githubSVG, linkedInSVG } from "../../assets/svgs";
import { Item } from "../Navigation/Navbar.styles";
import { FooterStyles, IconContainer, FooterLink, Legal } from "./Footer.styles";
import resume from "../../assets/resume.pdf";

const Footer = () => {
  return (
    <FooterStyles>
      <IconContainer>
        <Item>
          <FooterLink href="https://github.com/galosandoval" target="_blank">
            {githubSVG}
          </FooterLink>
        </Item>
        <Item>
          <FooterLink href="https://www.linkedin.com/in/galo-sandoval/" target="_blank">
            {linkedInSVG}
          </FooterLink>
        </Item>
        <Item>
          <FooterLink href={resume} target="_blank">
            {fileSVG}
          </FooterLink>
        </Item>
      </IconContainer>
      <Legal>
        <div>
          <p>
            <a href="https://github.com/galosandoval/portfolio" target="_blank" rel="noreferrer">
              import * from "./galo_sandoval
            </a>
          </p>
          <p>
            <a href="https://freeicons.io/profile/714" target="_blank" rel="noreferrer">
              import icons from "./raj_dev"
            </a>
          </p>
          <p>
            <a href="https://www.pablostanley.com/" target="_blank" rel="noreferrer">
              import images from "./pablo_stanley"
            </a>
          </p>
        </div>
      </Legal>
    </FooterStyles>
  );
};

export default Footer;
