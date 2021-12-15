import React from "react";
import { ThemeProvider } from "styled-components";
import AppStyles from "./App.styles";
import Landing from "./Landing/Landing";
import Navbar from "./Navigation/Navbar";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import { darkTheme, lightTheme } from "../styles/Themes";
import { GlobalStyle } from "../styles/GlobalStyles";
import { useDarkMode } from "../utils/useDarkMode";

function App() {
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  if (!mountedComponent) return <div />;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
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
