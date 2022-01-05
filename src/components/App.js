import React, { lazy, Suspense, useRef, useState } from "react";
import styled, { ThemeProvider } from "styled-components/macro";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import Landing from "./Landing/Landing";
import Navbar from "./Navigation/Navbar";
import ScrollToTop from "../utils/ScrollToTop";
import { darkTheme, lightTheme } from "../styles/Themes";
import { GlobalStyle } from "../styles/globalStyles";
import { useDarkMode } from "../utils/useDarkMode";
import { flexCenter } from "../styles/utility";
import { device } from "../styles/mediaQueries";
import { closeSVG, navSVG } from "../assets/svgs";
import Loading from "./Loading/Loading";
const Skills = lazy(() => import("./Skills/Skills"));
const ContactMe = lazy(() => import("./ContactMe/ContactMe"));
const Footer = lazy(() => import("./Footer/Footer"));
const Projects = lazy(() => import("./Projects/Projects"));
const AboutMe = lazy(() => import("./AboutMe/AboutMe"));

const AppStyles = styled.main`
  ${flexCenter}
  flex-direction: column;
  overflow: hidden;

  display: ${(p) => (p.isLoading ? "none" : "flex")};
`;

export const NavButton = styled.button`
  display: none;
  @media ${device.phone} {
    display: block;
    align-self: flex-end;
    padding: 1rem;
    position: relative;
    z-index: 99999;
  }
`;

function App() {
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  const navRef = useRef(null);
  const [navIsVisible, setNavIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const myRef = useRef(null);

  const handleShowNav = () => {
    const windowWidth = window.screen.width;
    if (windowWidth <= 575) {
      const nav = document.querySelector("#nav");
      if (navIsVisible) {
        enableBodyScroll(nav);
        setNavIsVisible(false);
      } else {
        disableBodyScroll(nav);
        setNavIsVisible(true);
      }
    }
  };

  if (!mountedComponent) return <div />;
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <Loading isLoading={isLoading} />
      <AppStyles isLoading={isLoading} id="top" ref={navRef}>
        <NavButton onClick={handleShowNav}>{navIsVisible ? closeSVG : navSVG}</NavButton>
        <Navbar
          handleShowNav={handleShowNav}
          theme={theme}
          themeToggler={themeToggler}
          navIsVisible={navIsVisible}
        />
        <Landing />
        <ScrollToTop />
        <Suspense fallback={<div>Loading...</div>}>
          <AboutMe />
          <Projects setIsLoading={setIsLoading} myRef={myRef} />
          <Skills />
          <ContactMe />
          <Footer />
        </Suspense>
      </AppStyles>
    </ThemeProvider>
  );
}

export default App;
