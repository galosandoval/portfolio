import listy from "../assets/listy-video.mp4";
import breathing from "../assets/breathing-video.mp4";
import miscProjects from "../assets/misc-projects.mp4";

export const projects = [
  {
    id: "listy",
    name: "Listy",
    stack: ["React", "SCSS", "Node.js", "Express", "React-query", "sqlite3", "Knex"],
    highlights: [
      "Carousel",
      "JWT",
      "Lazy Loading",
      "React-query instead of state management",
      "Tasks managed by Trello"
    ],
    description:
      "Web App I made to save recipes and make lists for grocery shopping. The main feature of the app is it parses instructions and ingredients from your favorite recipes and saves them to your account.",
    video: listy,
    web: "https://awesome-jackson-9126be.netlify.app/",
    github: "https://github.com/galosandoval/listy-frontend"
  },
  {
    id: "breathing-app",
    name: "4-7-8 Breathing Helper",
    stack: ["React", "JavaScript", "CSS"],
    highlights: [
      "useEffect with timers",
      "Animation with keyframes",
      "Saves user's preference in local storage"
    ],
    description:
      "Breathing exercises can improve your well-being. With the 4-7-8 Breathing Helper, control your cravings and sleep faster. You'll find links to more information in the app.",
    video: breathing,
    web: "https://478-breathing.vercel.app/",
    github: "https://github.com/galosandoval/478-breathing",
    reverse: true
  },
  {
    id: "portfolio",
    name: "Portolio",
    stack: ["React", "Styled-Components", "JavaScript", "Emailjs-com"],
    highlights: [
      "Debounce",
      "Dark Mode Custom Hook",
      "Intersection Observer Custom Hook",
      "Planned using Figma",
      "Lazy Loading"
    ],
    description:
      "Made using figma to make wireframes, to plan out components, colors, and layout. Yes, it's the site you're currently on.",
    video: null,
    web: null,
    github: "https://github.com/galosandoval",
    hasScreenShots: true
  },
  {
    id: "misc-projects",
    name: "Misc Projects",
    stack: [
      "Java",
      "Docker",
      "SCSS",
      "Styled-Components",
      "Redux",
      "Angular",
      "Python",
      "Firebase"
    ],
    highlights: ["AWS Certificate", "Badges from IBM"],
    description:
      "Variety of small projects I've worked on from courses with my apprenticeship at IBM or a technology I wanted to learn on the side.",
    video: miscProjects,
    web: null,
    github: "https://github.com/galosandoval",
    reverse: true
  }
];
