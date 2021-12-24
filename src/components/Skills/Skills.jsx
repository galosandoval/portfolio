import React, { useRef, useState } from "react";
import { backend, frontend, stack, tools } from "../../assets/skillsData.js";
import { useObserver } from "../../utils/useObserver.js";
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
  const skillsRef = useRef(null);
  const [stackRef, stackIsVisible] = useObserver();
  const [infoRef, infoIsVisible] = useObserver();

  const handleMouseOver = (event) => {
    const { id } = event.currentTarget;

    setIsVisible((state) => ({ ...state, info: false }));

    if (id === "top") {
      setIsVisible((state) => ({ ...state, frontend: true }));
    } else if (id === "middle") {
      setIsVisible((state) => ({ ...state, backend: true }));
    } else if (id === "bottom") {
      setIsVisible((state) => ({ ...state, tools: true }));
    }
  };

  return (
    <SkillsStyles ref={skillsRef}>
      <StackContainer ref={stackRef} isVisible={stackIsVisible}>
        <Stack>
          {stack.map((s) => (
            <Slice
              key={s.id}
              onMouseOver={handleMouseOver}
              onMouseOut={() => setIsVisible(initialState)}
              id={s.id}
              move={s.transform}
            >
              {s.icon}
              <SliceName>{s.name}</SliceName>
            </Slice>
          ))}
        </Stack>
      </StackContainer>
      <Info ref={infoRef} isVisible={infoIsVisible}>
        <Tech isVisible={isVisible.info} as="p">
          {skillsRef.current && skillsRef.current.clientWidth < 1199.98 ? (
            <>
              Wanna see some skills?<br></br>Tap a piece of the stack above.
            </>
          ) : (
            <>
              Wanna see some skills?<br></br>
              Hover over a piece of the stack to the left.
            </>
          )}
        </Tech>
        <Tech isVisible={isVisible.frontend}>
          {frontend.map((tech) => (
            <div key={tech.name}>
              {tech.icon}
              <Tag move={isVisible.frontend}>{tech.name}</Tag>
            </div>
          ))}
        </Tech>
        <Tech isVisible={isVisible.backend}>
          {backend.map((tech) => (
            <div key={tech.name}>
              {tech.icon}
              <Tag move={isVisible.backend}>{tech.name}</Tag>
            </div>
          ))}
        </Tech>
        <Tech isVisible={isVisible.tools}>
          {tools.map((tech) => (
            <div key={tech.name}>
              {tech.icon}
              <Tag move={isVisible.tools}>{tech.name}</Tag>
            </div>
          ))}
        </Tech>
      </Info>
    </SkillsStyles>
  );
};

export default Skills;
