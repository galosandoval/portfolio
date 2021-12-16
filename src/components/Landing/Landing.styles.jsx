import styled from "styled-components/macro";
import { Container } from "../../styles/shared";
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

export const RedContainer = styled(Container)`
  font-size: 0.7rem;
  font-weight: 600;
  overflow: hidden;
  height: 5rem;
`;

export const LandingCarouselStyles = styled.div`
  flex: 0 0 100%;
  padding: 0.3rem 0.5rem;
  transform: ${(p) => `translateY(-${p.translateX}%)`};
  transition: all 1s ease;
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
  box-shadow: 6px 6px 10px ${({ theme }) => theme.primary3},
    -6px -4px 10px ${({ theme }) => theme.primary2};
  color: ${({ theme }) => theme.title};
  margin-left: 1rem;

  &:hover {
    background-color: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.primary};
  }
`;

export const CenterCTA = styled(Center)`
  font-size: 2rem;
`;
