import React from "react";
import styled from "styled-components/macro";
import { ThemeProvider } from "styled-components";

import Landing from "./Landing/Landing";
import Navbar from "./Navigation/Navbar";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import { darkTheme, lightTheme } from "../styles/Themes";
import { GlobalStyle } from "../styles/GlobalStyles";
import { useDarkMode } from "../utils/useDarkMode";
import { GlobalVariables } from "../styles/GlobalVariables";

import { flexCenter } from "../styles/utility";

const AppStyles = styled.div`
  ${flexCenter}
  flex-direction: column;
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
        <Landing />
        <Navbar theme={theme} themeToggler={themeToggler} />
        <Projects />
        <Skills />
      </AppStyles>
    </ThemeProvider>
  );
}

export default App;
