import styled from "styled-components/macro";
import { flexCenter } from "./utility";

export const Navigation = styled.ul`
  display: flex;
  align-items: center;
`;

export const Container = styled.div`
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Button = styled.a`
  border-radius: 5px;
  ${flexCenter}
  transition: .3s all ease-in;
  padding: 1.5rem 5.5rem;
  cursor: pointer;
  box-shadow: 18px 18px 20px ${({ theme }) => theme.shadowDark},
    -18px -18px 20px ${({ theme }) => theme.shadowLight};
  color: ${({ theme }) => theme.primary};

  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.body};
  }
`;

export const Title = styled.h1`
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.primary};
  font-size: 1.4rem;
`;

export const SubTitle = styled.h2`
  margin-left: 1rem;
  color: ${({ theme }) => theme.primary};
  font-size: 1.2rem;
`;

export const AccentFont = styled.span`
  color: ${({ theme }) => theme.primary};
  margin-left: ${(props) => (props.ml ? props.ml + "rem" : "0")};
`;
