import styled from "styled-components/macro";
import { flexCenter } from "../../styles/utility";

export const NavbarStyles = styled.ul.attrs(() => ({
  id: "nav"
}))`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 88%;
  margin-top: 1rem;
`;

export const Item = styled.li`
  position: relative;
  ${flexCenter}

  span {
    transition: all ease-out 0.5s, transform ease 0.3s, opacity ease 0.3s;
    position: absolute;
    z-index: -1;
    opacity: 0;
    transform: translateY(200%);
  }

  &:hover > span {
    transform: translateY(330%);
    opacity: 1;
  }
`;

export const NavA = styled.a.attrs((props) => ({
  href: props.href,
  target: props.target ? props.target : "_self"
}))`
  cursor: pointer;
  color: ${({ theme }) => theme.secondary};
  padding: 2rem;
  border-radius: 50%;
  transition: all 0.3s ease;
  ${flexCenter}
  background-color: transparent;
  position: relative;
  z-index: 1000;

  &:hover {
    background-color: ${({ theme }) => theme.tertiary};
  }
`;
