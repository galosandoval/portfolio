import {
  colorBlack,
  colorPrimaryDark,
  colorPrimaryLight,
  colorSecondaryLight,
  colorShadowDarkBlack,
  colorShadowDarkWhite,
  colorShadowLightBlack,
  colorShadowLightWhite,
  colorSecondaryDark,
  colorTertiaryLight,
  colorWhite,
  colorTertiaryDark
} from "./GlobalVariables";
import portfolioSideA from "../assets/dark-theme.png";
import portfolioSideB from "../assets/light-theme.png";
import { keyframes } from "styled-components";

export const lightTheme = {
  body: `hsl(${colorWhite})`,
  primary: `hsl(${colorPrimaryLight})`, // saffron
  secondary: `hsl(${colorSecondaryLight})`, // spanish gray
  tertiary: `hsl(${colorTertiaryLight})`, //
  grey: `hsl(${colorSecondaryLight})`,
  shadowLight: `hsl(${colorShadowLightWhite})`,
  shadowDark: `hsl(${colorShadowDarkWhite})`,
  mode: "translateX(-44%)",
  image: portfolioSideB,
  loadingScreen: keyframes` 20% {
    color: rgba(0,0,0,0);
    text-shadow:
      .25em 0 0 rgba(0,0,0,0),
      .5em 0 0 rgba(0,0,0,0);
  }
  40% {
    color: #eac234;
    text-shadow:
      .25em 0 0 rgba(0,0,0,0),
      .5em 0 0 rgba(0,0,0,0);
  }
  60% {
    text-shadow:
      .25em 0 0 #eac234,
      .5em 0 0 rgb(0,0,0,0);
  }
  100% {
    color: #eac234;
    text-shadow:
      .25em 0 0 #eac234,
      .5em 0 0 #eac234;}`
};
export const darkTheme = {
  body: `hsl(${colorBlack})`, // gunmetal
  primary: `hsl(${colorPrimaryDark})`,
  secondary: `hsl(${colorWhite})`,
  tertiary: `hsl(${colorTertiaryDark})`, // blue
  grey: `hsl(${colorSecondaryDark})`,
  shadowLight: `hsl(${colorShadowLightBlack})`,
  shadowDark: `hsl(${colorShadowDarkBlack})`,
  mode: "translateX(44%)",
  image: portfolioSideA,
  loadingScreen: keyframes`  
  20% {
    color: rgba(0,0,0,0);
    text-shadow:
      .25em 0 0 rgba(0,0,0,0),
      .5em 0 0 rgba(0,0,0,0);
  }
  40% {
    color: #cbb1af;
    text-shadow:
      .25em 0 0 rgba(0,0,0,0),
      .5em 0 0 rgba(0,0,0,0);
  }
  60% {
    text-shadow:
      .25em 0 0 #cbb1af,
      .5em 0 0 rgb(0,0,0,0);
  }
  100% {
    color: #cbb1af;
    text-shadow:
      .25em 0 0 #cbb1af,
      .5em 0 0 #cbb1af;}`
};
