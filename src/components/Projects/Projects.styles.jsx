import styled from "styled-components/macro";
import { Button, Container } from "../../styles/shared";
import { flexCenter } from "../../styles/utility";

export const ProjectStyles = styled.div.attrs(() => ({
  id: "projects"
}))`
  /* height: 100vh; */
  width: 88%;
`;

export const ProjectContainer = styled(Container)`
  margin-bottom: 5rem;
`;

export const ProjectContent = styled.div`
  display: flex;
  flex-direction: ${(p) => (p.reverse ? "row-reverse" : "row")};
`;

export const Stack = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  p {
    padding: 1rem;
    font-style: italic;
  }
`;

export const List = styled.ul`
  padding: 1rem;
  display: flex;
  margin-left: 4rem;
  flex-direction: column;
  flex-wrap: wrap;
  height: 10rem;
`;

export const ListItem = styled.li`
  width: 50%;
  display: flex;
  align-items: center;
  span {
    margin-right: 0.5rem;
    color: ${({ theme }) => theme.primary};
  }
  & > span > svg {
    height: 1.5rem;
    width: 1.5rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 2rem;
`;

export const ProjectButton = styled(Button).attrs((p) => ({
  href: p.href,
  target: "_blank",
  rel: "noreferrer"
}))``;

export const VideoContainer = styled.div`
  ${flexCenter}
  padding: 2rem 1rem;
  flex: 0 0 50%;

  img {
    border-radius: 5px;
  }
`;
