import styled from "styled-components/macro";
import { FromLeftAnimation, FromRightAnimation } from "../../styles/animation";
import { device } from "../../styles/mediaQueries";
import { flex, flexCenter } from "../../styles/utility";

export const SkillsStyles = styled.section.attrs(() => ({
  id: "skills"
}))`
  ${flex}
  width: 100%;
  background-color: ${({ theme }) => theme.tertiary};
  padding: 10rem 0;

  &:hover div > div > div:not(:first-child) {
    margin-bottom: 0rem;
  }

  @media ${device.tabLand} {
    flex-direction: column;
  }
`;

export const StackContainer = styled.div`
  flex: 0 0 35%;
  ${flexCenter};
  position: relative;
  height: 300px;
  align-self: center;

  ${FromLeftAnimation}

  @media ${device.tabLand} {
    padding-top: 7rem;
  }
`;

export const Stack = styled.div`
  position: absolute;
  ${flexCenter}
  flex-direction: column-reverse;
  margin: 4rem 0;
  transition: all 0.5s ease;

  & div:not(:first-child) {
    margin-bottom: -8rem;
  }
`;

export const Slice = styled.div.attrs((p) => ({
  id: p.id,
  onMouseOver: p.onMouseOver,
  onMouseOut: p.onMouseOut
}))`
  height: 10rem;
  width: 10rem;
  background-color: ${({ theme }) => theme.secondary};
  transition: all 0.3s ease;
  transform: rotate(45deg) skew(165deg, 165deg);
  border-radius: 10px;
  border: 4px solid ${({ theme }) => theme.tertiary};
  position: relative;
  z-index: 1000;

  ${flexCenter}

  & svg {
    transform: skew(-165deg, -165deg) rotate(-45deg);
    position: absolute;
  }

  & h3 {
    transform: skew(-165deg, -165deg) rotate(-45deg) translateX(140%);
  }

  &:hover {
    background-color: ${({ theme }) => theme.tertiary};
    /* color */
  }

  &:hover h3 {
    transform: skew(-165deg, -165deg) rotate(-45deg) translateX(${(p) => p.move}%);
    z-index: -1;
    opacity: 1;
  }
`;

export const SliceName = styled.h3`
  position: absolute;
  transition: 0.8s ease all;
  opacity: 0;
  z-index: -1;
  font-size: 1.5rem;
`;

export const Info = styled.article`
  flex: 0 0 65%;
  ${flexCenter}
  flex-direction: column;
  gap: 2.5rem;
  text-align: center;
  position: relative;

  ${FromRightAnimation}

  @media ${device.tabLand} {
    margin-top: 20rem;
  }
  @media ${device.phone} {
    padding-bottom: 7rem;
  }
`;

export const Tech = styled.div`
  transition: all 0.8s ease;
  transform: ${(p) => (p.isVisible ? "translateX(0%)" : "translateX(30%)")};
  opacity: ${(p) => (p.isVisible ? 1 : 0)};
  visibility: ${(p) => (p.isVisible ? "visible" : "hidden")};
  position: absolute;
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;

  @media ${device.tabPort} {
    font-size: 1.7rem;
  }
  @media ${device.phone} {
    flex-wrap: wrap;
    gap: 3rem;
    margin-top: 7rem;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 8rem;
    position: relative;

    & svg {
      background-color: ${({ theme }) => theme.tertiary};
    }
  }
`;

export const Tag = styled.p`
  position: absolute;
  z-index: -1;
  opacity: ${(p) => (p.move ? 1 : 0)};
  transform: ${(p) => (p.move ? "translateY(300%)" : "translateY(0)")};
  transition: all 0.5s 0.5s ease;
  width: max-content;
  font-size: 1rem;
`;
