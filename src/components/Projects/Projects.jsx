import React from "react";
import { checkSVG, codeSVG, webSVG } from "../../assets/svgs.jsx";
import {
  ProjectStyles,
  ProjectContainer,
  ProjectContent,
  Stack,
  ButtonContainer,
  ProjectButton,
  VideoContainer,
  ListItem,
  List
} from "./Projects.styles.jsx";
import { SubTitle, Title } from "../../styles/shared.jsx";
import { projects } from "../../assets/projectsData.js";

const Projects = () => {
  return (
    <ProjectStyles>
      {projects.map((project) => (
        <ProjectContainer key={project.name}>
          <Title>{project.name}</Title>
          <ProjectContent reverse={project.reverse}>
            <Stack>
              <p>{project.description}</p>
              <SubTitle>Stack</SubTitle>
              <List>
                {project.stack.map((s) => (
                  <ListItem key={s}>
                    <span>{checkSVG}</span>
                    {s}
                  </ListItem>
                ))}
              </List>
            </Stack>
            <VideoContainer>
              <img src={project.video} alt={project.name} />
            </VideoContainer>
          </ProjectContent>
          <ButtonContainer>
            <ProjectButton href={project.github}>{codeSVG}</ProjectButton>
            {project.web && <ProjectButton href={project.web}>{webSVG}</ProjectButton>}
          </ButtonContainer>
        </ProjectContainer>
      ))}
    </ProjectStyles>
  );
};

export default Projects;
