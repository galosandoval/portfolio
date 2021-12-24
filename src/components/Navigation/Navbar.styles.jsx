import styled from "styled-components/macro";
import { FromTopAnimation } from "../../styles/animation";
import { device } from "../../styles/mediaQueries";
import { Navigation } from "../../styles/shared";
import { flexCenter } from "../../styles/utility";


export const NavbarStyles = styled(Navigation).attrs(() => ({
  id: "nav"
}))`
  display: flex;
  justify-content: space-between;
  width: 88%;
  margin-top: 1rem;
  ${FromTopAnimation}

  @media ${device.tabPort} {
    width: revert;
  }
  @media ${device.phone} {
    flex-direction: column;
    position: fixed;
    inset: 0;
    background: ${({ theme }) => theme.body};
    z-index: 99999;
    transform: ${(p) => (p.navIsVisible ? "translateX(0)" : "translateX(105%)")};
  }
`;

export const Item = styled.li`
  position: relative;
  ${flexCenter}

  span {
    transition: all ease-out 0.5s, transform ease 0.3s, opacity ease 0.3s;
    position: absolute;
    z-index: -1;
    opacity: 0;
    transform: translateY(200%);
  }

  &:hover > span {
    transform: translateY(330%);
    opacity: 1;

    @media ${device.phone} {
      transform: none;
    }
  }

  @media ${device.tabLand} {
    span {
      transform: translateY(0);
      opacity: 1;
      position: relative;
    }
  }
  @media ${device.phone} {
    align-items: center;
    width: 72%;
    justify-content: flex-start;
  }
`;

export const NavA = styled.a.attrs((props) => ({
  href: props.href,
  target: props.target ? props.target : "_self"
}))`
  cursor: pointer;
  color: ${({ theme }) => theme.secondary};
  padding: 2rem;
  border-radius: 50%;
  transition: all 0.3s ease;
  ${flexCenter}
  background-color: transparent;
  position: relative;
  z-index: 1000;

  &:hover {
    background-color: ${({ theme }) => theme.tertiary};
  }
`;
