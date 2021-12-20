import styled from "styled-components/macro";
import { flexCenter } from "../../styles/utility";
import { NavA, NavbarStyles } from "../Navigation/Navbar.styles";

export const FooterStyles = styled.footer`
  background-color: ${({ theme }) => theme.secondary};
  ${flexCenter}
  width: 100%;
  padding: 10rem 0;
  justify-content: space-evenly;
`;

export const IconContainer = styled(NavbarStyles)`
  justify-content: center;
  width: revert;

  svg {
    color: ${({ theme }) => theme.body};
  }
`;

export const FooterLink = styled(NavA)`
  background-color: transparent;
  transform: translateY(0);

  svg {
    transition: all 0.3s ease;
  }

  svg:hover {
    color: ${({ theme }) => theme.primary};
  }
  &:hover {
    transform: translateY(-3px);
    background-color: transparent;
  }
`;

export const Legal = styled.div`
  color: ${({ theme }) => theme.body};
  ${flexCenter}
  flex-direction: column;
  justify-content: center;

  p > a {
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.primary};
    }
  }
`;
