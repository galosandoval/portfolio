import {
  frontendSVG,
  JavascriptSVG,
  htmlSVG,
  cssSVG,
  reactSVG,
  sassSVG,
  nodeSVG,
  postgresSVG,
  dbSVG,
  toolsSVG,
  knexLogo,
  gitSVG,
  agileSVG,
  figmaSVG,
  trelloSVG,
  styledSVG
} from "./svgs";

export const stack = [
  {
    name: "Tools",
    id: "bottom",
    transform: 180,
    icon: toolsSVG
  },
  {
    name: "Backend",
    id: "middle",
    transform: 150,
    icon: dbSVG
  },
  {
    name: "Frontend",
    id: "top",
    transform: 135,
    icon: frontendSVG
  }
];

export const frontend = [
  { name: "JavaScript", icon: JavascriptSVG },
  { name: "HTML5", icon: htmlSVG },
  { name: "CSS3", icon: cssSVG },
  { name: "React.js", icon: reactSVG },
  { name: "SCSS", icon: sassSVG },
  { name: "Styled-Components", icon: styledSVG }
];
export const backend = [
  { name: "Node.js", icon: nodeSVG },
  { name: "PostgreSQL", icon: postgresSVG },
  { name: "Knex", icon: knexLogo },
  { name: "SQL", icon: dbSVG }
];
export const tools = [
  { name: "Git", icon: gitSVG },
  { name: "Agile", icon: agileSVG },
  { name: "Figma", icon: figmaSVG },
  { name: "Trello", icon: trelloSVG }
];
