import styled from "styled-components/macro";
import resume from "../../assets/resume.pdf";
import { FromLeftAnimation, FromRightAnimation } from "../../styles/animation";
import { device } from "../../styles/mediaQueries";
import { Button, Container } from "../../styles/shared";

export const AboutMeStyles = styled.div`
  width: 100%;
  transition: transform ease 1.5s 0.5s, opacity 1.5s ease 0.5s;
`;

export const RedAbout = styled(Container)`
  font-size: 1.2rem;
  font-weight: 400;
  flex-direction: row;
  margin: 5rem 0;

  @media ${device.tabLand} {
    flex-direction: column;
  }
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

  @media ${device.tabPort} {
    font-size: 1.4rem;
  }
  @media ${device.phone} {
    padding: 2rem;
  }
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

  @media ${device.tabPort} {
    margin-top: 1rem;
    width: 100%;
    padding: 3rem 0;
  }
`;
