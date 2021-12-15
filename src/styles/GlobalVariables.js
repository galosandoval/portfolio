import { createGlobalStyle } from "styled-components/macro";

export const GlobalVariables = createGlobalStyle`
  :root {
    /* colors */
    --color-primary: 354 16% 23%;
    --color-secondary: 358 79% 57%;
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
export const colorDark = "230 35% 7%";
export const colorLight = "231 77% 90%";
export const colorWhite = " 0 0% 100%";
export const colorBackground = "0 0% 21%";

/**
 * Font Families
 */
export const ffSerif = '"Bellefair", serif';
export const ffSansCond = '"Barlow Condensed", sans-serif';
export const ffSansNormal = '"Barlow", sans-serif';
