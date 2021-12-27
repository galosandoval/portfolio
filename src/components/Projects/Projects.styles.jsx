import styled from "styled-components/macro";
import { FromLeftAnimation, FromRightAnimation, FromTopAnimation } from "../../styles/animation";
import { device } from "../../styles/mediaQueries";
import { Button, Container, Title } from "../../styles/shared";
import { flexCenter } from "../../styles/utility";

export const ProjectStyles = styled.div.attrs(() => ({
  id: "projects"
}))`
  width: 88%;
`;

export const ProjectContainer = styled(Container)`
  padding: 5rem 0;

  @media ${device.phone} {
    padding: 1.5rem 0;
  }
`;

export const ProjectTitle = styled(Title)`
  ${FromTopAnimation}

  @media ${device.phone} {
    font-size: 2rem;
    margin-bottom: 0;
  }
`;

export const ProjectContent = styled.div`
  display: flex;
  flex-direction: ${(p) => (p.reverse ? "row-reverse" : "row")};

  @media ${device.tabLand} {
    flex-direction: column-reverse;
  }
`;

export const Stack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0 1rem;
  ${FromLeftAnimation}
  font-size: 1.2rem;

  p {
    padding: 1rem;
    font-style: italic;
  }
  @media ${device.phone} {
    font-size: 1.4rem;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const List = styled.ul`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const ListItem = styled.li`
  width: 100%;
  display: flex;
  align-items: flex-start;

  span {
    margin-right: 0.5rem;
    color: ${({ theme }) => theme.primary};
  }
  & > span > svg {
    height: 1.5rem;
    width: 1.5rem;
  }
`;

export const HighlightLink = styled.a.attrs(() => ({
  target: "_blank"
}))`
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  &:hover {
    color: ${({ theme }) => theme.primary};

    &::after {
      width: 100%;
    }
  }
  &::after {
    content: "";
    height: 1px;
    width: 0;
    background: ${({ theme }) => theme.primary};
    position: absolute;
    transition: all 0.5s ease;
    bottom: 0;
    left: 0;
  }
`;

export const MediaContainer = styled.div`
  ${FromRightAnimation}
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 2rem 0;
  align-items: center;
  gap: 4rem;

  @media ${device.phone} {
    padding: 0;
    margin-top: -1rem;
    flex-direction: column;
    gap: 1.7rem;
  }
`;

export const ProjectButton = styled(Button).attrs((p) => ({
  href: p.href,
  target: "_blank",
  rel: "noreferrer"
}))``;

/**
 * Project Video
 */

export const Frame = styled.div`
  ${flexCenter}
  background: ${({ theme }) => theme.body};
  box-shadow: inset 18px 18px 30px ${({ theme }) => theme.shadowDark},
    inset -18px -18px 30px ${({ theme }) => theme.shadowLight};
  border-radius: 10px;

  @media ${device.tabPort} {
    box-shadow: none;
  }
`;

export const VideoContainer = styled.div`
  ${flexCenter}
  padding: 3rem 3rem;
  flex: 0 0 50%;
  flex-direction: column;
  position: relative;

  video {
    border-radius: 5px;
    position: relative;

    @media ${device.tabLand} {
      width: 42rem;
    }
    @media ${device.tabPort} {
      border: 2px solid ${({ theme }) => theme.secondary};
    }
    @media ${device.phone} {
      border: none;
      height: 12rem;
      width: 25rem;
    }
  }

  &:hover button {
    opacity: 0.85;
    transform: translateY(0);

    &:active {
      transform: translateY(1px);
    }
  }

  @media ${device.tabLand} {
    button {
      opacity: 0.85;
      transform: translateY(0);
      padding: 0;
    }
  }

  @media ${device.phone} {
    width: 100%;
  }
`;

export const ImgContainer = styled.div`
  ${flexCenter}
  flex: 0 0 50%;
  img {
    height: 23.8rem;
    border: 2px solid ${({ theme }) => theme.secondary};
  }
`;

export const ThemeImage = styled.div`
  background-size: contain;
  background-image: url(${({ theme }) => theme.image});
  height: 26rem;
  width: 50rem;
  background-repeat: no-repeat;
  margin: 3rem;

  @media ${device.tabPort} {
    height: 20rem;
    margin: 0;
  }
  @media ${device.phone} {
    height: 14rem;
  }
`;

export const VideoButton = styled.button`
  position: absolute;
  bottom: 4.5rem;
  right: 4rem;
  z-index: 2;
  background-color: ${({ theme }) => theme.primary};
  border-radius: 50%;
  padding: 0.5rem;
  height: 3.3rem;
  width: 3.3rem;
  ${flexCenter}
  box-shadow: 0 .1rem .2rem black;
  opacity: 0;
  transform: translateY(10%);
  transition: transform ease 0.3s, opacity ease 0.3s, transform 0.1s ease;

  @media ${device.phone} {
    right: 1.5rem;
    bottom: 6rem;
    height: 6rem;
    width: 6rem;
  }
`;
