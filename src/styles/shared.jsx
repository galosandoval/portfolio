import styled from "styled-components";

export const Container = styled.div`
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${({ theme }) => theme.primary};
`;
