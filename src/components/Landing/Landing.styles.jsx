import styled from "styled-components/macro";
import { Center, flexCenter } from "../../styles/utility";

export const LandingStyles = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  align-items: start;
  height: 100vh;
  width: 88%;
  padding-top: 1rem;
  font-size: 1rem;
`;

export const Title = styled.h1`
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.title};
  font-size: 1.4rem;
`;

export const RedContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.primary};
  font-size: 0.7rem;
  font-weight: 600;
  border-radius: 5px;
  display: flex;
  overflow: hidden;
`;

export const LandingCarouselStyles = styled.div`
  flex: 0 0 100%;
  padding: 0.3rem 0.5rem;
  transform: ${(p) => `translateX(-${p.translateX}%)`};
  transition: all 0.8s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const IndentP = styled.p`
  margin-left: 0.8rem;
`;

export const NewLineP = styled.p`
  margin-top: 1rem;
`;

export const AccentFont = styled.span`
  color: ${({ theme }) => theme.tertiary};
  margin-left: ${(props) => (props.ml ? props.ml + "rem" : "0")};
`;

export const GreyFont = styled.p`
  color: ${({ theme }) => theme.backgroundFont};
  font-size: 0.7rem;
  margin-top: 1rem;
  font-weight: 600;
`;

export const ContainerButton = styled.a.attrs(() => ({
  href: "#projects"
}))`
  width: 5rem;
  height: 3rem;
  border-radius: 5px;
  ${flexCenter}
  transition: .3s all ease-in;
  padding: 1.5rem 5.5rem;
  cursor: pointer;
  scroll-behavior: smooth;

  &:hover {
    box-shadow: 6px 6px 10px ${({ theme }) => theme.primary3},
      -6px -4px 10px ${({ theme }) => theme.primary2};
    color: ${({ theme }) => theme.title};
  }
`;

export const CenterCTA = styled(Center)`
  font-size: 2rem;
`;
