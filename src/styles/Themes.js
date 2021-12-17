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
  colorTertiaryLight,
  colorTitle,
  colorWhite
} from "./GlobalVariables";

export const lightTheme = {
  body: `hsl(${colorWhite})`,
  text: `hsl(${colorBackgroundFont})`, // spanish gray
  primary: `hsl(${colorPrimaryLight})`, // silver pink
  primary2: `hsl(${colorPrimaryLight2})`,
  primary3: `hsl(${colorPrimaryLight3})`,
  title: `hsl(${colorTitle})`, // saffron
};
export const darkTheme = {
  body: `hsl(${colorBackground})`,
  text: `hsl(${colorFontPink})`,
  primary: `hsl(${colorPrimary})`,
  primary2: `hsl(${colorPrimary2})`,
  primary3: `hsl(${colorPrimary3})`,
  title: `hsl(${colorSecondary})`,
};
