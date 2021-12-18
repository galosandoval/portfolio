import React, { useState } from "react";
import { SkillsStyles, Stack, Info, StackContainer, Slice } from "./Skills.styles.jsx";

const initialState = {
  frontend: false,
  backend: false,
  tools: false,
  info: true
};

const Skills = () => {
  const [isVisible, setIsVisible] = useState(initialState);
  const handleMouseOver = (event) => {
    const { id } = event.target;

    setIsVisible((state) => ({ ...state, info: false }));

    console.log({ isVisible });

    if (id === "top") {
      setIsVisible((state) => ({ ...state, frontend: true }));
    } else if (id === "middle") {
      setIsVisible((state) => ({ ...state, backend: true }));
    } else {
      setIsVisible((state) => ({ ...state, tools: true }));
    }
  };

  return (
    <SkillsStyles>
      <StackContainer>
        <Stack>
          <Slice
            onMouseOver={handleMouseOver}
            onMouseOut={() => setIsVisible(initialState)}
            id={"top"}
          ></Slice>
          <Slice
            onMouseOver={handleMouseOver}
            onMouseOut={() => setIsVisible(initialState)}
            id={"middle"}
          ></Slice>
          <Slice
            onMouseOver={handleMouseOver}
            onMouseOut={() => setIsVisible(initialState)}
            id={"bottom"}
          ></Slice>
        </Stack>
      </StackContainer>
      <Info>
        {isVisible.info ? (
          <>
            <p>Want to see my skill?</p>
            <p>Hover over a piece of the stack on the left.</p>
          </>
        ) : isVisible.frontend ? (
          <p>Frontend</p>
        ) : isVisible.backend ? (
          <p>Backend</p>
        ) : (
          <p>Tools</p>
        )}
      </Info>
    </SkillsStyles>
  );
};

export default Skills;
