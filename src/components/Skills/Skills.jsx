import React, { useState } from "react";
import { backend, frontend, stack, tools } from "../../assets/skills.js";
import {
  SkillsStyles,
  Stack,
  Info,
  StackContainer,
  Slice,
  Tech,
  Tag,
  SliceName
} from "./Skills.styles.jsx";

const initialState = {
  frontend: false,
  backend: false,
  tools: false,
  info: true
};

const Skills = () => {
  const [isVisible, setIsVisible] = useState(initialState);
  const handleMouseOver = (event) => {
    const { id } = event.currentTarget;

    setIsVisible((state) => ({ ...state, info: false }));

    console.log({ isVisible });

    if (id === "top") {
      setIsVisible((state) => ({ ...state, frontend: true }));
    } else if (id === "middle") {
      setIsVisible((state) => ({ ...state, backend: true }));
    } else if (id === "bottom") {
      setIsVisible((state) => ({ ...state, tools: true }));
    }
  };

  return (
    <SkillsStyles>
      <StackContainer>
        <Stack>
          {stack.map((s) => (
            <Slice
              key={s.id}
              onMouseOver={handleMouseOver}
              onMouseOut={() => setIsVisible(initialState)}
              id={s.id}
              transform={s.transform}
            >
              {s.icon}
              <SliceName>{s.name}</SliceName>
            </Slice>
          ))}
        </Stack>
      </StackContainer>
      <Info>
        <Tech isVisible={isVisible.info}>
          Wanna see some skills? <br></br> Hover over a piece of the stack on the left.
        </Tech>
        <Tech isVisible={isVisible.frontend}>
          {frontend.map((tech) => (
            <div key={tech.name}>
              {tech.icon}
              <Tag transform={isVisible.frontend}>{tech.name}</Tag>
            </div>
          ))}
        </Tech>
        <Tech isVisible={isVisible.backend}>
          {backend.map((tech) => (
            <div key={tech.name}>
              {tech.icon}
              <Tag transform={isVisible.backend}>{tech.name}</Tag>
            </div>
          ))}
        </Tech>
        <Tech isVisible={isVisible.tools}>
          {tools.map((tech) => (
            <div key={tech.name}>
              {tech.icon}
              <Tag transform={isVisible.tools}>{tech.name}</Tag>
            </div>
          ))}
        </Tech>
      </Info>
    </SkillsStyles>
  );
};

export default Skills;
