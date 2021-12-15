import {
  colorBackground,
  colorBackgroundFont,
  colorBackgroundFontLight,
  colorFontPink,
  colorPrimary,
  colorPrimary2,
  colorPrimary3,
  colorPrimaryLight,
  colorPrimaryLight2,
  colorPrimaryLight3,
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
  primary: `hsl(${colorPrimaryLight})`,
  primary2: `hsl(${colorPrimaryLight2})`,
  primary3: `hsl(${colorPrimaryLight3})`,
  title: `hsl(${colorSecondaryLight})`,
  tertiary: `hsl(${colorTertiaryLight})`,
  backgroundFont: `hsl(${colorBackgroundFontLight})`
};
export const darkTheme = {
  body: "#363537",
  text: `hsl(${colorFontPink})`,
  toggleBorder: "#6B8096",
  background: colorBackground,
  primary: `hsl(${colorPrimary})`,
  primary2: `hsl(${colorPrimary2})`,
  primary3: `hsl(${colorPrimary3})`,
  title: `hsl(${colorSecondary})`,
  tertiary: `hsl(${colorTertiary})`,
  backgroundFont: `hsl(${colorBackgroundFont})`
};
