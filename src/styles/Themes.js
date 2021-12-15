import {
  colorBackground,
  colorFontPink,
  colorPrimary,
  colorPrimaryLight,
  colorSecondary,
  colorSecondaryLight,
  colorTertiary,
  colorTertiaryLight
} from "./GlobalVariables";

export const lightTheme = {
  body: "#FFF",
  text: "#363537",
  toggleBorder: "#FFF",
  background: "#363537",
  backgroundColor: `hsl(${colorPrimaryLight})`,
  title: `hsl(${colorSecondaryLight})`,
  tertiary: `hsl(${colorTertiaryLight})`
};
export const darkTheme = {
  body: "#363537",
  text: `hsl(${colorFontPink})`,
  toggleBorder: "#6B8096",
  background: colorBackground,
  backgroundColor: `hsl(${colorPrimary})`,
  title: `hsl(${colorSecondary})`,
  tertiary: `hsl(${colorTertiary})`
};
