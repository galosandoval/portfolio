import React from "react";
import { checkSVG, codeSVG, webSVG } from "../../assets/svgs.jsx";
import {
  ProjectStyles,
  ProjectContainer,
  ProjectContent,
  Stack,
  ButtonContainer,
  ProjectButton,
  ListItem,
  List
} from "./Projects.styles.jsx";
import { SubTitle, Title } from "../../styles/shared.jsx";
import { projects } from "../../assets/projectsData.js";
import ProjectVideo from "./ProjectVideo.jsx";

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
              <SubTitle>Highlights</SubTitle>
              <List>
                {project.highlights.map((h) => (
                  <ListItem key={h}>
                    <span>{checkSVG}</span>
                    {h}
                  </ListItem>
                ))}
              </List>
            </Stack>
            <div>
              <ProjectVideo project={project} />
              <ButtonContainer>
                <ProjectButton href={project.github}>{codeSVG}</ProjectButton>
                {project.web && <ProjectButton href={project.web}>{webSVG}</ProjectButton>}
              </ButtonContainer>
            </div>
          </ProjectContent>
        </ProjectContainer>
      ))}
    </ProjectStyles>
  );
};

export default Projects;
