import styled from "styled-components/macro";
import { NavbarStyles } from "../Navigation/Navbar.styles";

export const FooterStyles = styled(<NavbarStyles></NavbarStyles>)`
  background-color: ${({ theme }) => theme.secondary};
`;

export const IconContainer = styled.ul`
  svg {
    color: ${({ theme }) => theme.body};
  }
`;
