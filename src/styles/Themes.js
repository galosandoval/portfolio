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

export const lightTheme = {
  body: `hsl(${colorWhite})`,
  primary: `hsl(${colorPrimaryLight})`, // saffron
  secondary: `hsl(${colorSecondaryLight})`, // spanish gray
  tertiary: `hsl(${colorTertiaryLight})`, //
  grey: `hsl(${colorSecondaryLight})`,
  shadowLight: `hsl(${colorShadowLightWhite})`,
  shadowDark: `hsl(${colorShadowDarkWhite})`,
  mode: "translateX(-44%)"
};
export const darkTheme = {
  body: `hsl(${colorBlack})`, // gunmetal
  primary: `hsl(${colorPrimaryDark})`,
  secondary: `hsl(${colorWhite})`,
  grey: `hsl(${colorSecondaryDark})`,
  tertiary: `hsl(${colorTertiaryDark})`, // Dim gray
  shadowLight: `hsl(${colorShadowLightBlack})`,
  shadowDark: `hsl(${colorShadowDarkBlack})`,
  mode: "translateX(44%)"
};
