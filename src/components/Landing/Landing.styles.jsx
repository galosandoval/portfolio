import styled from "styled-components/macro";

export const LandingStyles = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  align-items: start;
  height: 100vh;
  width: 70%;
  padding-top: 1rem;
  font-size: 1rem;
`;

export const Title = styled.h1`
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.title};
`;

export const RedContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.backgroundColor};
  font-size: 0.8rem;
`;

export const AccentFont = styled.span`
  color: ${({ theme }) => theme.tertiary};
`;
