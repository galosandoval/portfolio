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
    --color-black: 213 10% 18%;
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

export const colorWhite = "206 23% 94%";
export const colorBlack = "213 10% 18%";

export const colorPrimaryLight = "47 81% 56%";
export const colorSecondaryLight = "198 4% 55%";
export const colorTertiaryLight = "355 73% 97%";
export const colorPrimaryDark = "4 21% 74%";
export const colorSecondaryDark = "218, 4%, 42%";
export const colorTertiaryDark = "47 81% 56%";

export const colorBackgroundFontLight = "203 5% 66%";

export const colorShadowDarkWhite = "217 30% 86%";
export const colorShadowLightWhite = "0 0% 100%";
export const colorShadowDarkBlack = "223 9% 15%";
export const colorShadowLightBlack = "216  9% 21%";

export const colorFontGrey = "0 0% 77%";
/**
 * Font Families
 */
export const ffSerif = '"Bellefair", serif';
export const ffSansCond = '"Barlow Condensed", sans-serif';
export const ffSansNormal = '"Barlow", sans-serif';
