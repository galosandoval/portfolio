import styled from "styled-components";

export const NavbarStyles = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 88%;
`;

export const NavA = styled.a.attrs((props) => ({
  href: props.href,
  target: "_blank"
}))`
  background-color: ${({ theme }) => theme.primary};
  cursor: pointer;
`;
