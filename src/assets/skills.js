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
  knexLogo
} from "./svgs";

export const frontend = [
  { name: "JavaScript", icon: JavascriptSVG },
  { name: "HTML5", icon: htmlSVG },
  { name: "CSS3", icon: cssSVG },
  { name: "React.js", icon: reactSVG },
  { name: "SCSS", icon: sassSVG }
];
export const backend = [
  { name: "Node.js", icon: nodeSVG },
  { name: "PostgreSQL", icon: postgresSVG },
  { name: "Knex", icon: knexLogo }
];
export const tools = [{ name: "None", icon: nodeSVG }];

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
