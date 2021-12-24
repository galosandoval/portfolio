import React, { lazy, Suspense } from "react";
import styled from "styled-components/macro";
import { ThemeProvider } from "styled-components";

import Landing from "./Landing/Landing";
import Navbar from "./Navigation/Navbar";
import ScrollToTop from "../utils/ScrollToTop";
import { darkTheme, lightTheme } from "../styles/Themes";
import { GlobalStyle } from "../styles/globalStyles";
import { useDarkMode } from "../utils/useDarkMode";
import { GlobalVariables } from "../styles/GlobalVariables";
import { flexCenter } from "../styles/utility";
const Skills = lazy(() => import("./Skills/Skills"));
const ContactMe = lazy(() => import("./ContactMe/ContactMe"));
const Footer = lazy(() => import("./Footer/Footer"));
const Projects = lazy(() => import("./Projects/Projects"));
const AboutMe = lazy(() => import("./AboutMe/AboutMe"));

const AppStyles = styled.main`
  ${flexCenter}
  flex-direction: column;
  overflow: hidden;
`;

function App() {
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  if (!mountedComponent) return <div />;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <GlobalVariables />
      <AppStyles>
        <Navbar theme={theme} themeToggler={themeToggler} />
        <Landing />
        <ScrollToTop />
        <Suspense fallback={<div>Loading...</div>}>
          <AboutMe />
          <Projects />
          <Skills />
          <ContactMe />
          <Footer />
        </Suspense>
      </AppStyles>
    </ThemeProvider>
  );
}

export default App;
