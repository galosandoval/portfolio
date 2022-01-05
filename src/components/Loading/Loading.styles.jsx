import styled, { keyframes } from "styled-components/macro";

export const StyledLoading = styled.div`
  background-color: ${({ theme }) => theme.body};
  text-align: center;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoadingTitle = styled.h1`
  color: ${({ theme }) => theme.primary};
  font-size: 4em;
`;

export const DotsLight = keyframes`
  20% {
    color: rgba(0,0,0,0);
    text-shadow:
      .25em 0 0 rgba(0,0,0,0),
      .5em 0 0 rgba(0,0,0,0);
  }
  40% {
    color: #eac234;
    text-shadow:
      .25em 0 0 rgba(0,0,0,0),
      .5em 0 0 rgba(0,0,0,0);
  }
  60% {
    text-shadow:
      .25em 0 0 #eac234,
      .5em 0 0 rgb(0,0,0,0);
  }
  100% {
    color: #eac234;
    text-shadow:
      .25em 0 0 #eac234,
      .5em 0 0 #eac234;}
    `;

export const DotsDark = keyframes`
  20% {
    color: rgba(0,0,0,0);
    text-shadow:
      .25em 0 0 rgba(0,0,0,0),
      .5em 0 0 rgba(0,0,0,0);
  }
  40% {
    color: #cbb1af;
    text-shadow:
      .25em 0 0 rgba(0,0,0,0),
      .5em 0 0 rgba(0,0,0,0);
  }
  60% {
    text-shadow:
      .25em 0 0 #cbb1af,
      .5em 0 0 rgb(0,0,0,0);
  }
  100% {
    color: #cbb1af;
    text-shadow:
      .25em 0 0 #cbb1af,
      .5em 0 0 #cbb1af;}
    `;

export const LoadingDots = styled.span`
  animation: ${({ theme }) => theme.loadingScreen} 2s infinite;
`;
