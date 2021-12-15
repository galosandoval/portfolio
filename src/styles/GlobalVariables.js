import { createGlobalStyle } from "styled-components/macro";

export const GlobalVariables = createGlobalStyle`
  :root {
    /* colors */
    --color-primary: 354 16% 23%;
    --color-primary-2: 354 16% 25%;
    --color-primary-3: 354 16% 20%;
    --color-primary-light: 354 71% 97%;
    --color-primary-light-2: 354 71% 100%;
    --color-primary-light-3: 354 71% 93%;
    --color-secondary: 358 79% 57%;
    --color-secondary-light: 353 80% 45%;
    --color-tertiary: 4 52% 58%;
    --color-tertiary-light: 0 100% 39%;

    --color-background: 0 0% 21%;
    --color-dark: 230 35% 7%;
    --color-light: 231 77% 90%;
    --color-white: 0 0% 100%;
    
    --color-font-pink: 4 21% 74%;
    --color-font-grey: 0 0% 77%;

    /* font-sizes */
    --fs-900: clamp(5rem, 8vw + 1rem, 9.375rem);
    --fs-800: 3.5rem;
    --fs-700: 1.5rem;
    --fs-600: 1rem;
    --fs-500: 1rem;
    --fs-400: 0.9375rem;
    --fs-300: 1rem;
    --fs-200: 0.875rem;
    
    @media (min-width: 35em) {
        --fs-800: 5rem;
        --fs-700: 2.5rem;
        --fs-600: 1.5rem;
        --fs-500: 1.25rem;
        --fs-400: 1rem;
    }
    
    @media (min-width: 45em) {
            /* font-sizes */
            --fs-800: 6.25rem;
            --fs-700: 3.5rem;
            --fs-600: 2rem;
            --fs-500: 1.75  rem;
            --fs-400: 1.125rem;
    }
}

`;
export const colorPrimary = "354 16% 23%";
export const colorPrimary2 = "354 16% 25%";
export const colorPrimary3 = "354 16% 20%";
export const colorPrimaryLight = "354 71% 97%";
export const colorPrimaryLight2 = "354 71% 99%";
export const colorPrimaryLight3 = "354 71% 94%";
export const colorSecondary = "358 79% 57%";
export const colorSecondaryLight = "353 80% 45%";
export const colorTertiary = "4 52% 58%";
export const colorTertiaryLight = "0 100% 39%";
export const colorBackgroundFont = "198 4% 55%";
export const colorBackgroundFontLight = "203 5% 66%";

export const colorDark = "230 35% 7%";
export const colorLight = "231 77% 90%";
export const colorWhite = " 0 0% 100%";
export const colorBackground = "0 0% 21%";

export const colorFontPink = "4 21% 74%";
export const colorFontGrey = "0 0% 77%";

/**
 * Font Families
 */
export const ffSerif = '"Bellefair", serif';
export const ffSansCond = '"Barlow Condensed", sans-serif';
export const ffSansNormal = '"Barlow", sans-serif';
