import React, { lazy, Suspense, useRef, useState } from "react";
import styled, { ThemeProvider } from "styled-components/macro";
import Landing from "./Landing/Landing";
import Navbar from "./Navigation/Navbar";
import ScrollToTop from "../utils/ScrollToTop";
import { darkTheme, lightTheme } from "../styles/Themes";
import { GlobalStyle } from "../styles/globalStyles";
import { useDarkMode } from "../utils/useDarkMode";
import { GlobalVariables } from "../styles/GlobalVariables";
import { flexCenter } from "../styles/utility";
import { device } from "../styles/mediaQueries";
import { navSVG } from "../assets/svgs";
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

export const NavButton = styled.button`
  display: none;
  @media ${device.phone} {
    display: block;
    align-self: flex-end;
    padding-right: 1rem;
  }
`;

function App() {
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  const navRef = useRef(null);
  const [navIsVisible, setNavIsVisible] = useState(false);

  console.log(navRef.current);
  if (!mountedComponent) return <div />;

  const handleShowNav = () => {
    navIsVisible ? setNavIsVisible(false) : setNavIsVisible(true);
  };

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <GlobalVariables />
      <AppStyles id="top" ref={navRef}>
        <NavButton onClick={handleShowNav}>{navSVG}</NavButton>
        <Navbar theme={theme} themeToggler={themeToggler} navIsVisible={navIsVisible} />
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
