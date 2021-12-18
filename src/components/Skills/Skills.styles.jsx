import styled from "styled-components/macro";
import { flex, flexCenter } from "../../styles/utility";
import { colorPrimaryLight } from "../../styles/GlobalVariables";

export const SkillsStyles = styled.section`
  ${flex}
  width: 100%;
  background-color: ${({ theme }) => theme.tertiary};
`;

export const StackContainer = styled.div`
  flex: 0 0 35%;
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
  flex: 0 0 65%;
  ${flexCenter}
  flex-direction: column;
  gap: 2.5rem;
  text-align: center;
  position: relative;
`;

export const Tech = styled.div`
  transition: all 0.8s ease;
  transform: ${(p) => (p.isVisible ? "translateX(0%)" : "translateX(30%)")};
  opacity: ${(p) => (p.isVisible ? 1 : 0)};
  position: absolute;
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 8rem;
    position: relative;

    & svg {
      background-color: ${({ theme }) => theme.tertiary};
    }

    & p {
    }
  }
`;

export const Tag = styled.p`
  position: absolute;
  z-index: -1;
  opacity: ${(p) => (p.transform ? 1 : 0)};
  transform: ${(p) => (p.transform ? "translateY(300%)" : "translateY(0)")};
  transition: all 0.3s 0.8s ease;
`;
