import "./Components.css";
import { ProjectModal } from "./ProjectModal";
export const Projects = () => {
  const projectData = [
    {
      gitHubURL: "https://github.com/galosandoval/cooksysfinalFE",
      youtubeURL: "https://www.youtube.com/watch?v=Nf-cwwIQqIs",
      deployedURL: "https://cooksysfinal.vercel.app/",
      data: (
        <div className="card">
          <div className="box">
            <div className="text">Project Manager</div>
            <p>
              Web app designed for users to keep track of the people on their
              team, projects their team are working, and a users profile
              information.
            </p>
            <p>Javascript || React || Styled Components</p>
            <p>
              - Frontend developer of project with a team of 3 other FE
              developers and 4 Backend Developers
            </p>
            <p>
              - Acted as the leader of the FE team and communicated with the
              leader of the BE team to discuss any progress or problems
            </p>
          </div>
        </div>
      ),
    },
    {
      gitHubURL: "https://github.com/galosandoval/human-rights-first-fe-e",
      data: (
        <div className="card">
          <div className="box">
            <div className="text">Human Rights First</div>
            <p>
              A React web application that consolidates instances of police use
              of force onto a map and graph of the US.
            </p>
            <p>Javascript || React || Victory Charts</p>
            <p>
              - Collaborated with a team of 1 other frontend developer and 3
              data scientists to rebuild a web application in just a few weeks.{" "}
            </p>
            <p>
              - Responsible for creating a new graph to display data retrieved
              from data scientists.
            </p>
            <p>
              - Molded the way the 1000+ dataset would be implemented into the
              app.
            </p>
          </div>
        </div>
      ),
    },
    {
      gitHubURL: "https://github.com/galosandoval/slack-app",
      youtubeURL: "https://youtu.be/HXxW7tyYkPI",
      deployedURL: "https://slack-clone-57afa.web.app/",
      data: (
        <div className="card">
          <div className="box">
            <div className="text">Slack Clone</div>
            <p>
              This is a project I did on my own. I really enjoy the UI for slack
              and I thought it would be good practice to see if I could recreate
              it.
            </p>
            <p>React || Material UI || CSS || Redux</p>
            <p>- Implemented Firebase for the deployment.</p>
          </div>
        </div>
      ),
    },
  ];
  return (
    <section className="services" id="services">
      <div className="max-width">
        <h2 className="title">Portfolio</h2>
        <div className="serv-content">
          {projectData.map((project, index) => (
            <ProjectModal
              deployed={projectData[index]?.deployedURL}
              github={projectData[index]?.gitHubURL}
              url={projectData[index]?.youtubeURL}
              data={projectData[index].data}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
