import { css } from "styled-components/macro";

const SharedAnimation = css`
  transition: all 1s ease 0.3s;
  opacity: ${(p) => (p.isVisible ? 1 : 0)};
`;

export const FromRightAnimation = css`
  ${SharedAnimation}
  transform: ${(p) => (p.isVisible ? "translateX(0)" : "translateX(30px)")};
`;

export const FromLeftAnimation = css`
  ${SharedAnimation}
  transform: ${(p) => (p.isVisible ? "translateX(0)" : "translateX(-30px)")};
`;

export const FromTopAnimation = css`
  ${SharedAnimation}
  transform: ${(p) => (p.isVisible ? "translateY(0)" : "translateY(-30px)")};
`;

export const FromBottomAnimation = css`
  ${SharedAnimation}
  transform: ${(p) => (p.isVisible ? "translateY(0)" : "translateY(30px)")};
`;
