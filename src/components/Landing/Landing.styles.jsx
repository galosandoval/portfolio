import styled from "styled-components/macro";
import { FromLeftAnimation } from "../../styles/animation";
import { device } from "../../styles/mediaQueries";
import { Button } from "../../styles/shared";

export const LandingStyles = styled.section`
  display: flex;
  justify-content: start;
  flex-direction: column;
  align-items: start;
  height: 85vh;
  width: 83%;
  padding-top: 10rem;
  @media ${device.phone} {
    display: revert;
  }
`;

export const Header = styled.div`
  font-size: 3.5rem;
  ${FromLeftAnimation}

  svg {
    height: 3.5rem;
    width: 3.5rem;
  }

  @media ${device.phone} {
    font-size: 2.5rem;

    h1 {
      text-align: center;
    }
  }
`;

export const LandingButton = styled(Button)`
  margin-top: 1rem;
`;
