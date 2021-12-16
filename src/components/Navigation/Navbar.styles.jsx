import styled from "styled-components/macro";
import { flexCenter } from "../../styles/utility";

export const NavbarStyles = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 88%;
  height: 100vh;
`;

export const Item = styled.li`
  position: relative;
  ${flexCenter}

  span {
    transition: all ease-out 0.3s;
    position: absolute;
    z-index: -1;
    opacity: 0;
  }

  &:hover > span {
    transform: translateY(-330%);
    opacity: 1;
  }
`;

export const NavA = styled.a.attrs((props) => ({
  href: props.href,
  target: "_blank"
}))`
  cursor: pointer;
  color: ${({ theme }) => theme.text};
  padding: 2rem;
  border-radius: 50%;
  transition: all 0.3s ease-out;
  ${flexCenter}
  background-color: ${({ theme }) => theme.body};

  &:hover {
    background-color: ${({ theme }) => theme.primary};
  }
`;
