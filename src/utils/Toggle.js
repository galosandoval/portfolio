import styled from "styled-components/macro";
import { flexCenter } from "../styles/utility";

export const Toggle = styled.button`
  color: ${({ theme }) => theme.secondary};
  border-radius: 30px;
  cursor: pointer;
  font-size: 0.8rem;
  padding: 0.6rem;
  position: relative;
  height: 2.5rem;
  width: 4.5rem;
  border: 2px solid ${({ theme }) => theme.secondary};
  ${flexCenter}
  transition: 0.5s ease all;

  &:hover {
    color: ${({ theme }) => theme.primary};
    border: 2px solid ${({ theme }) => theme.primary};
  }

  span {
    height: 2rem;
    width: 2rem;
    position: absolute;
    border-radius: 50%;
    /* border: 2px solid ${({ theme }) => theme.secondary}; */
    transform: ${({ theme }) => theme.mode};
    background-color: transparent;
    transition: 0.5s ease transform;
    ${flexCenter}

    svg {
      height: 1.7rem;
    }
  }
`;
