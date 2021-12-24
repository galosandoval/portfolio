import React, { useState } from "react";
import { send } from "emailjs-com";

import { Title } from "../../styles/shared.jsx";
import {
  ContactForm,
  ContactImg,
  ContactMeContainer,
  ContactMeStyles,
  FormButton
} from "./ContactMe.styles.jsx";
import contactMe from "../../assets/contactMe.png";
import { useObserver } from "../../utils/useObserver.js";

const initialState = { from_name: "", to_name: "Galo", reply_to: "", message: "" };

const SERVICE_ID = "service_0mgnl82";
const TEMPLATE_ID = "template_hhr0fyj";
const USER_ID = "user_17N9BCgToblTIGskYnvgI";

const ContactMe = () => {
  const [toSend, setToSend] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const [formRef, formIsVisible] = useObserver();
  const [imgRef, imgIsVisible] = useObserver();

  const handleChange = (event) => {
    setToSend((state) => ({ ...state, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setIsLoading(true);

    send(SERVICE_ID, TEMPLATE_ID, toSend, USER_ID)
      .then((response) => {
        if (response.status === 200) setIsSuccess(true);
        setToSend(initialState);
      })
      .catch((error) => {
        console.log("Error", error);
        setIsError(true);
      });

    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(false);
      setIsError(false);
    }, 3000);
  };

  return (
    <ContactMeStyles>
      <ContactMeContainer>
        <ContactForm ref={formRef} isVisible={formIsVisible} onSubmit={handleSubmit}>
          <Title>Let's Chat</Title>
          <label>
            Name
            <input
              required
              type="text"
              name="from_name"
              value={toSend.from_name}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="email">
            Email
            <input
              required
              type="email"
              name="reply_to"
              value={toSend.reply_to}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="message">
            Message
            <input
              required
              type="text"
              name="message"
              value={toSend.message}
              onChange={handleChange}
            />
          </label>
          <FormButton as="button">
            {isError
              ? "Something went wrong"
              : isSuccess
              ? "Message Sent"
              : isLoading
              ? "Sending..."
              : "Send"}
          </FormButton>
        </ContactForm>
        <ContactImg ref={imgRef} isVisible={imgIsVisible} src={contactMe} alt="cartoon of me" />
      </ContactMeContainer>
    </ContactMeStyles>
  );
};

export default ContactMe;
