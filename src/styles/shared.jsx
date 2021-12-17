import styled from "styled-components/macro";
import { flexCenter } from "./utility";

export const Container = styled.div`
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${({ theme }) => theme.primary};
`;

export const Button = styled.a`
  border-radius: 5px;
  ${flexCenter}
  transition: .3s all ease-in;
  padding: 1.5rem 5.5rem;
  cursor: pointer;
  box-shadow: 6px 6px 10px ${({ theme }) => theme.primary3},
    -6px -4px 10px ${({ theme }) => theme.primary2};
  color: ${({ theme }) => theme.title};

  &:hover {
    background-color: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.primary};
  }
`;

export const Title = styled.h1`
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.title};
  font-size: 1.4rem;
`;

export const SubTitle = styled.h2`
  margin-left: 1rem;
  color: ${({ theme }) => theme.title};
  font-size: 1.2rem;
`;

export const AccentFont = styled.span`
  color: ${({ theme }) => theme.title};
  margin-left: ${(props) => (props.ml ? props.ml + "rem" : "0")};
`;
