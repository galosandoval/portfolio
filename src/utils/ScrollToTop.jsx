import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import { upArrowSVG } from "../assets/svgs";
import { debounce } from "./debounce";
import { flexCenter } from "../styles/utility";

const RoundButton = styled.a`
  position: fixed;
  right: 4rem;
  bottom: 4rem;
  color: ${({ theme }) => theme.primary};
  border-radius: 50%;
  padding: 0.7rem;
  box-shadow: 0 0.1rem 0.2rem black;
  cursor: pointer;
  transition: all 0.5s ease;
  transform: ${(p) => (p.visible ? "translateY(0)" : "translateY(-20%)")};
  opacity: ${(p) => (p.visible ? 1 : 0)};
  height: 4.5rem;
  width: 4.5rem;
  ${flexCenter}
  backdrop-filter: blur(2px);
  z-index: 9999;

  &:hover {
    transform: translateY(-3px);
  }
`;

const ScrollToTop = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);

    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll, prevScrollPos, visible]);
  return (
    <RoundButton href="#top" visible={visible}>
      {upArrowSVG}
    </RoundButton>
  );
};

export default ScrollToTop;
