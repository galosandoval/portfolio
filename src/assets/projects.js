import listy from "../assets/listy-screenshot.png";

export const projects = [
  {
    name: "Listy",
    stack: ["React", "SCSS", "Node.js", "Express", "React-query", "sqlite3", "Knex"],
    description:
      "Web App I made to save recipes and make lists for grocery shopping. The main feature of the app is it parses instructions and ingredients from your favorite recipes and saves them to your account.",
    video: listy,
    web: "https://awesome-jackson-9126be.netlify.app/",
    github: "https://github.com/galosandoval/listy-frontend"
  },
  {
    name: "4-7-8 Breathing Helper",
    stack: ["React", "JavaScript", "CSS"],
    description:
      "I read a book about how breathing exercises can improve your well-being. With the 4-7-8 Breathing Helper, control your cravings and sleep faster. You'll find links to more information in the app.",
    video: listy,
    web: "https://478-breathing.vercel.app/",
    github: "https://github.com/galosandoval/478-breathing",
    reverse: true
  },
  {
    name: "Misc Projects",
    stack: ["Java", "Docker", "SCSS", "Styled-Components", "Redux"],
    description:
      "Variety of small projects I've worked on from courses with my apprenticeship at IBM or a technology I wanted to learn on the side.",
    video: listy,
    web: null,
    github: "https://github.com/galosandoval"
  }
];
