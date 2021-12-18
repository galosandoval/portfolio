import styled from "styled-components/macro";
import { flex, flexCenter } from "../../styles/utility";
import { colorPrimaryLight } from "../../styles/GlobalVariables";

export const SkillsStyles = styled.section`
  ${flex}
  width: 100%;
  background-color: ${({ theme }) => theme.tertiary};
`;

export const StackContainer = styled.div`
  flex: 0 0 50%;
  ${flexCenter};
  position: relative;
  height: 300px;
  align-self: center;
  &:hover > div {
    gap: 2rem;
  }
`;

export const Stack = styled.div`
  position: absolute;
  ${flexCenter}
  flex-direction: column;
  margin: 4rem 0;
  gap: 1rem;
  transition: gap 0.5s ease;
`;

export const Slice = styled.div.attrs((p) => ({
  id: p.id,
  onMouseOver: p.onMouseOver,
  onMouseOut: p.onMouseOut
}))`
  height: 2rem;
  width: 9rem;
  background-color: ${({ theme }) => theme.secondary};
  border-radius: 10px;
  transition: all 0.3s ease;

  &:hover {
    background-color: hsl(${colorPrimaryLight});
  }
`;

export const Info = styled.article`
  flex: 0 0 50%;
  ${flexCenter}
  flex-direction: column;
  gap: 2.5rem;
  text-align: center;
`;
