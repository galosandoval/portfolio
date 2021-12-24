import styled from "styled-components/macro";
import resume from "../../assets/resume.pdf";
import { FromLeftAnimation, FromRightAnimation } from "../../styles/animation";
import { Button, Container } from "../../styles/shared";

export const AboutMeStyles = styled.div.attrs(() => ({
  id: "about"
}))`
  width: 100%;
  transition: transform ease 1.5s 0.5s, opacity 1.5s ease 0.5s;
`;

export const RedAbout = styled(Container)`
  font-size: 1.2rem;
  font-weight: 400;
  flex-direction: row;
  margin: 5rem 0;
`;

export const MeImg = styled.img`
  height: 60vh;
  border-radius: 20px;
  padding: 1rem;
  filter: brightness(0.8);
  align-self: center;
  ${FromLeftAnimation}
`;

export const Content = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 4rem 5rem 2rem 5rem;
  ${FromRightAnimation}
`;

export const AboutButton = styled(Button).attrs(() => ({
  href: resume,
  target: "_blank",
  rel: "noreferrer"
}))`
  margin: auto;
  width: 20rem;
  height: 4rem;
  box-shadow: 18px 18px 20px ${({ theme }) => theme.shadowDark},
    -18px -18px 20px ${({ theme }) => theme.shadowLight};
`;
