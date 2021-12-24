import styled from "styled-components/macro";
import { device } from "../../styles/mediaQueries";
import { Navigation } from "../../styles/shared";
import { flexCenter } from "../../styles/utility";
import { NavA } from "../Navigation/Navbar.styles";

export const FooterStyles = styled.footer`
  background-color: ${({ theme }) => theme.grey};
  color: ${({ theme }) => theme.primary};
  ${flexCenter}
  width: 100%;
  padding: 10rem 0;
  justify-content: space-evenly;

  @media ${device.phone} {
    flex-direction: column;
  }
`;

export const IconContainer = styled(Navigation)`
  justify-content: center;
`;

export const FooterLink = styled(NavA)`
  color: ${({ theme }) => theme.primary};
  background-color: transparent;
  transform: translateY(0);
  i svg {
    transition: all 0.3s ease;
    color: ${({ theme }) => theme.primary};
  }

  svg:hover {
    color: ${({ theme }) => theme.body};
  }
  &:hover {
    transform: translateY(-3px);
    background-color: transparent;
  }
`;

export const Legal = styled.div`
  ${flexCenter}
  flex-direction: column;
  justify-content: center;

  p > a {
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.body};
    }
  }
`;
