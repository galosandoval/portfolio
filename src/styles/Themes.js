import {
  colorBackground,
  colorBackgroundFont,
  colorBackgroundFontLight,
  colorFontGrey,
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
  colorTertiaryLight,
  colorWhite
} from "./GlobalVariables";

export const lightTheme = {
  body: `hsl(${colorWhite})`,
  text: `hsl(${colorFontGrey})`,
  primary: `hsl(${colorPrimaryLight})`,
  primary2: `hsl(${colorPrimaryLight2})`,
  primary3: `hsl(${colorPrimaryLight3})`,
  title: `hsl(${colorSecondaryLight})`,
  tertiary: `hsl(${colorTertiaryLight})`,
  backgroundFont: `hsl(${colorBackgroundFontLight})`
};
export const darkTheme = {
  body: `hsl(${colorBackground})`,
  text: `hsl(${colorFontPink})`,
  primary: `hsl(${colorPrimary})`,
  primary2: `hsl(${colorPrimary2})`,
  primary3: `hsl(${colorPrimary3})`,
  title: `hsl(${colorSecondary})`,
  tertiary: `hsl(${colorTertiary})`,
  backgroundFont: `hsl(${colorBackgroundFont})`
};
