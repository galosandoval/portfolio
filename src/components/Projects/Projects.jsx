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
import listy from "../../assets/listy-screenshot.png";
import { SubTitle, Title } from "../../styles/shared.jsx";

const Projects = () => {
  return (
    <ProjectStyles>
      <Title>listy</Title>
      <ProjectContainer>
        <ProjectContent>
          <Stack>
            <p>
              Web App I made to save recipes and make lists for grocery shopping. The main feature
              of the app is it parses instructions and ingredients from your favorite recipes and
              saves them to your account.
            </p>
            <SubTitle>Stack</SubTitle>
            <List>
              <ListItem>
                <span>{checkSVG}</span>React
              </ListItem>
              <ListItem>
                <span>{checkSVG}</span>SCSS
              </ListItem>
              <ListItem>
                <span>{checkSVG}</span>Node.js
              </ListItem>
              <ListItem>
                <span>{checkSVG}</span>Express
              </ListItem>
              <ListItem>
                <span>{checkSVG}</span>React-Query
              </ListItem>
              <ListItem>
                <span>{checkSVG}</span>sqlite3
              </ListItem>
              <ListItem>
                <span>{checkSVG}</span>Knex
              </ListItem>
            </List>
          </Stack>
          <VideoContainer>
            <img src={listy} alt="listy dashboard" />
          </VideoContainer>
        </ProjectContent>
        <ButtonContainer>
          <ProjectButton href="https://github.com/galosandoval/listy-frontend">
            {codeSVG}
          </ProjectButton>
          <ProjectButton href="https://awesome-jackson-9126be.netlify.app/">{webSVG}</ProjectButton>
        </ButtonContainer>
      </ProjectContainer>
      <Title>listy</Title>
      <ProjectContainer>
        <ProjectContent>
          <Stack>
            <p>
              Web App I made to save recipes and make lists for grocery shopping. The main feature
              of the app is it parses instructions and ingredients from your favorite recipes and
              saves them to your account.
            </p>
            <SubTitle>Stack</SubTitle>
            <List>
              <ListItem>
                <span>{checkSVG}</span>React
              </ListItem>
              <ListItem>
                <span>{checkSVG}</span>SCSS
              </ListItem>
              <ListItem>
                <span>{checkSVG}</span>Node.js
              </ListItem>
              <ListItem>
                <span>{checkSVG}</span>Express
              </ListItem>
              <ListItem>
                <span>{checkSVG}</span>React-Query
              </ListItem>
              <ListItem>
                <span>{checkSVG}</span>sqlite3
              </ListItem>
              <ListItem>
                <span>{checkSVG}</span>Knex
              </ListItem>
            </List>
          </Stack>
          <VideoContainer>
            <img src={listy} alt="listy dashboard" />
          </VideoContainer>
        </ProjectContent>
        <ButtonContainer>
          <ProjectButton href="https://github.com/galosandoval/listy-frontend">
            {codeSVG}
          </ProjectButton>
          <ProjectButton href="https://awesome-jackson-9126be.netlify.app/">{webSVG}</ProjectButton>
        </ButtonContainer>
      </ProjectContainer>
      <Title>listy</Title>
      <ProjectContainer>
        <ProjectContent>
          <Stack>
            <p>
              Web App I made to save recipes and make lists for grocery shopping. The main feature
              of the app is it parses instructions and ingredients from your favorite recipes and
              saves them to your account.
            </p>
            <SubTitle>Stack</SubTitle>
            <List>
              <ListItem>
                <span>{checkSVG}</span>React
              </ListItem>
              <ListItem>
                <span>{checkSVG}</span>SCSS
              </ListItem>
              <ListItem>
                <span>{checkSVG}</span>Node.js
              </ListItem>
              <ListItem>
                <span>{checkSVG}</span>Express
              </ListItem>
              <ListItem>
                <span>{checkSVG}</span>React-Query
              </ListItem>
              <ListItem>
                <span>{checkSVG}</span>sqlite3
              </ListItem>
              <ListItem>
                <span>{checkSVG}</span>Knex
              </ListItem>
            </List>
          </Stack>
          <VideoContainer>
            <img src={listy} alt="listy dashboard" />
          </VideoContainer>
        </ProjectContent>
        <ButtonContainer>
          <ProjectButton href="https://github.com/galosandoval/listy-frontend">
            {codeSVG}
          </ProjectButton>
          <ProjectButton href="https://awesome-jackson-9126be.netlify.app/">{webSVG}</ProjectButton>
        </ButtonContainer>
      </ProjectContainer>
    </ProjectStyles>
  );
};

export default Projects;
