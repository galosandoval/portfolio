import styled from "styled-components/macro";
import { FromLeftAnimation, FromRightAnimation } from "../../styles/animation";
import { device } from "../../styles/mediaQueries";
import { Button, Container } from "../../styles/shared";
import { flexCenter } from "../../styles/utility";

export const ContactMeStyles = styled.section.attrs(() => ({
  id: "contact"
}))`
  width: 88%;
  margin: 7rem 0;

  @media ${device.tabPort} {
    font-size: 1.4rem;
  }
`;

export const ContactMeContainer = styled(Container)`
  ${flexCenter}
  flex-direction: row;
  justify-content: space-evenly;

  @media ${device.tabLand} {
    flex-direction: column-reverse;
  }
`;

export const ContactImg = styled.img`
  object-fit: contain;
  height: 30rem;
  width: 30rem;

  ${FromRightAnimation}
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 45%;
  ${FromLeftAnimation}

  @media ${device.tabLand} {
    width: 80%;
  }

  label {
    display: flex;
    justify-content: space-between;
    width: 100%;
    background-color: ${({ theme }) => theme.secondary};
    border-radius: 10px;
    padding: 0.5rem 1rem;
    color: ${({ theme }) => theme.body};
    border: 2px solid ${({ theme }) => theme.secondary};
    box-shadow: 0 1px 2px ${({ theme }) => theme.body};

    &:focus-within {
      border: 3px solid ${({ theme }) => theme.tertiary};
      box-shadow: 0 1px 2px ${({ theme }) => theme.tertiary};
    }

    input {
      width: 50%;
    }
  }
`;

export const FormButton = styled(Button)`
  font-size: 1.5rem;
`;
