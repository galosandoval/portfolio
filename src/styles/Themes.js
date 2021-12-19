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
  shadowLight: `hsl(${colorShadowLightWhite})`,
  shadowDark: `hsl(${colorShadowDarkWhite})`
};
export const darkTheme = {
  body: `hsl(${colorBlack})`, // gunmetal
  primary: `hsl(${colorPrimaryDark})`,
  secondary: `hsl(${colorSecondaryDark})`,
  tertiary: `hsl(${colorTertiaryDark})`, // Dim gray
  shadowLight: `hsl(${colorShadowLightBlack})`,
  shadowDark: `hsl(${colorShadowDarkBlack})`
};
