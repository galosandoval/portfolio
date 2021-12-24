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
  List,
  MediaContainer,
  ProjectTitle
} from "./Projects.styles.jsx";
import { SubTitle } from "../../styles/shared.jsx";
import { projects } from "../../assets/projectsData.js";
import ProjectVideo from "./ProjectVideo.jsx";
import { useObserver } from "../../utils/useObserver.js";

const Projects = () => {
  const [stackRef1, stackIsVisible1] = useObserver();
  const [stackRef2, stackIsVisible2] = useObserver();
  const [stackRef3, stackIsVisible3] = useObserver();
  const [stackRef4, stackIsVisible4] = useObserver();
  const [titleRef1, titleIsVisible1] = useObserver();
  const [titleRef2, titleIsVisible2] = useObserver();
  const [titleRef3, titleIsVisible3] = useObserver();
  const [titleRef4, titleIsVisible4] = useObserver();
  const [videoRef1, videoIsVisible1] = useObserver();
  const [videoRef2, videoIsVisible2] = useObserver();
  const [videoRef3, videoIsVisible3] = useObserver();
  const [videoRef4, videoIsVisible4] = useObserver();

  const stackRefs = [stackRef1, stackRef2, stackRef3, stackRef4];
  const videoRefs = [videoRef1, videoRef2, videoRef3, videoRef4];
  const titleRefs = [titleRef1, titleRef2, titleRef3, titleRef4];

  const stackIsVisible = [stackIsVisible1, stackIsVisible2, stackIsVisible3, stackIsVisible4];
  const videoIsVisible = [videoIsVisible1, videoIsVisible2, videoIsVisible3, videoIsVisible4];
  const titleIsVisible = [titleIsVisible1, titleIsVisible2, titleIsVisible3, titleIsVisible4];

  return (
    <ProjectStyles>
      {projects.map((project, index) => (
        <ProjectContainer key={project.name}>
          <ProjectTitle ref={titleRefs[index]} isVisible={titleIsVisible[index]}>
            {project.name}
          </ProjectTitle>
          <ProjectContent reverse={project.reverse}>
            <Stack ref={stackRefs[index]} isVisible={stackIsVisible[index]}>
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
            <MediaContainer ref={videoRefs[index]} isVisible={videoIsVisible[index]}>
              <ProjectVideo project={project} />
              <ButtonContainer>
                <ProjectButton href={project.github}>{codeSVG}</ProjectButton>
                {project.web && <ProjectButton href={project.web}>{webSVG}</ProjectButton>}
              </ButtonContainer>
            </MediaContainer>
          </ProjectContent>
        </ProjectContainer>
      ))}
    </ProjectStyles>
  );
};

export default Projects;
