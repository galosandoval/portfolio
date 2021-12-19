import styled from "styled-components/macro";
import { Button } from "../../styles/shared";

export const LandingStyles = styled.section`
  display: flex;
  justify-content: start;
  flex-direction: column;
  align-items: start;
  height: 85vh;
  width: 83%;
  padding-top: 10rem;
`;

export const Header = styled.div`
  font-size: 3.5rem;

  svg {
    height: 3.5rem;
    width: 3.5rem;
  }
`;

export const LandingButton = styled(Button)`
  margin-top: 1rem;
`;
