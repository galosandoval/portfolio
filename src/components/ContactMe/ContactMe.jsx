import React from "react";
import { Title } from "../../styles/shared.jsx";
import {
  ContactForm,
  ContactMeContainer,
  ContactMeStyles,
  FormButton
} from "./ContactMe.styles.jsx";
import contactMe from "../../assets/contactMe.png";

const ContactMe = () => {
  return (
    <ContactMeStyles>
      <ContactMeContainer>
        <ContactForm>
          <Title>Let's Chat</Title>
          <label htmlFor="name">
            Name
            <input type="text" id="name" />
          </label>
          <label htmlFor="email">
            Email
            <input type="text" id="email" />
          </label>
          <label htmlFor="message">
            Message
            <input type="text" id="message" />
          </label>
          <FormButton as="button">Send</FormButton>
        </ContactForm>
        <img src={contactMe} alt="cartoon of sitting" />
      </ContactMeContainer>
    </ContactMeStyles>
  );
};

export default ContactMe;
