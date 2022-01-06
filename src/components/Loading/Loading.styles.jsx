import styled from "styled-components/macro";

export const StyledLoading = styled.div`
  background-color: ${({ theme }) => theme.body};
  text-align: center;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  position: absolute;
  inset: 0;

  visibility: ${(p) => (p.isLoading ? "visible" : "hidden")};
  transform: ${(p) => (p.isLoading ? "translateY(0)" : "translateY(20%)")};
  opacity: ${(p) => (p.isLoading ? 1 : 0)};
`;

export const LoadingTitle = styled.h1`
  color: ${({ theme }) => theme.primary};
  font-size: 4em;
`;

export const LoadingDots = styled.span`
  animation: ${({ theme }) => theme.loadingScreen} 1.5s infinite;
`;
