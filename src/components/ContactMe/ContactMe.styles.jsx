import styled from "styled-components/macro";
import { Button, Container } from "../../styles/shared";
import { flexCenter } from "../../styles/utility";

export const ContactMeStyles = styled.section.attrs(() => ({
  id: "contact"
}))`
  width: 88%;
  padding: 5rem 0;
`;

export const ContactMeContainer = styled(Container)`
  ${flexCenter}
  flex-direction: row;
  justify-content: space-evenly;
  img {
    object-fit: contain;
    height: 30rem;
    width: 30rem;
  }
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 45%;
  label {
    display: flex;
    justify-content: space-between;
    width: 100%;
    background-color: ${({ theme }) => theme.secondary};
    border-radius: 10px;
    padding: 0.5rem 1rem;
    color: ${({ theme }) => theme.body};
    border: 2px solid ${({ theme }) => theme.secondary};

    &:focus-within {
      border: 2px solid ${({ theme }) => theme.primary};
    }

    input {
      width: 50%;
    }
  }
`;

export const FormButton = styled(Button)``;
