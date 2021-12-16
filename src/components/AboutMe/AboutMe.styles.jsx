import styled from "styled-components/macro";
import { ContainerButton } from "../Landing/Landing.styles";
import resume from "../../assets/resume.pdf";
import { css } from "styled-components";
import { Container } from "../../styles/shared";

export const AboutMeStyles = styled.div`
  margin-top: 2rem;
  width: 100%;
  transform: translatex(-50%);
  opacity: 0;
  transition: transform ease 1.5s 0.5s, opacity 1.5s ease 0.5s;
  div > img {
    height: 60vh;
    border-radius: 20px;
    padding: 1rem;
    filter: brightness(0.8);
    align-self: center;
  }

  ${({ isVisible }) =>
    isVisible &&
    css`
      transform: translateX(0);
      opacity: 1;
    `}
`;

export const RedAbout = styled(Container)`
  font-size: 1.2rem;
  font-weight: 400;
  flex-direction: row;
`;

export const Content = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 4rem 5rem 2rem 5rem;
`;

export const AboutButton = styled(ContainerButton).attrs(() => ({
  href: resume,
  target: "_blank",
  rel: "noreferrer"
}))`
  margin: auto;
  width: 20rem;
  height: 4rem;
`;
