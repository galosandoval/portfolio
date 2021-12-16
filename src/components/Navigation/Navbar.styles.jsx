import styled from "styled-components/macro";

export const NavbarStyles = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 88%;
  height: 100vh;
`;

export const NavA = styled.a.attrs((props) => ({
  href: props.href,
  target: "_blank"
}))`
  background-color: ${({ theme }) => theme.primary};
  cursor: pointer;
  color: hsl(--var(--color-font-pink));

  > svg {
    height: 2rem;
    width: 2rem;
  }
`;
