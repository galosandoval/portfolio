import "./Components.css";
export const Services = () => {
  return (
    <section className="services" id="services">
      <div className="max-width">
        <h2 className="title">Portfolio</h2>
        <div className="serv-content">
          <a
            target="blank"
            style={{ textDecoration: "none", color: "#fff" }}
            href="https://github.com/fasttrackd-student-work/spring-assessment-social-media-team-red"
          >
            <div className="card">
              <div className="box">
                <div className="text">Twitter API</div>
                <p>
                  Worked together on a team of 4 backend developers to create a
                  clone of Twitter's API.
                </p>
                <p>Java || Springboot || Lombok</p>
                <p>- Implemented 11 endpoints.</p>
                <p>- Followed Kanban principles to organize responsiblites.</p>
                <p>- Tested endpoints using Postman.</p>
              </div>
            </div>
          </a>
          <a
            target="blank"
            style={{ textDecoration: "none", color: "#fff" }}
            href="https://github.com/galosandoval/human-rights-first-fe-e"
          >
            <div className="card">
              <div className="box">
                <div className="text">Human Rights First</div>
                <p>
                  A React web application that consolidates instances of police
                  use of force onto a map and graph of the US.
                </p>
                <p>Javascript || React || Victory Charts</p>
                <p>
                  - Collaborated with a team of 1 other frontend developer and 3
                  data scientists to rebuild a web application in just a few
                  weeks.{" "}
                </p>
                <p>
                  - Responsible for creating a new graph to display data
                  retrieved from data scientists.
                </p>
                <p>
                  - Molded the way the 1000+ dataset would be implemented into
                  the app.
                </p>
              </div>
            </div>
          </a>
          <a
            target="blank"
            style={{ textDecoration: "none", color: "#fff" }}
            href="https://slack-clone-57afa.web.app/"
          >
            <div className="card">
              <div className="box">
                <div className="text">Slack Clone</div>
                <p>
                  This is a project I did on my own. I really enjoy the UI for
                  slack and I thought it would be good practice to see if I
                  could recreate it. I turned out great!
                </p>
                <p>React || Material UI || CSS || Redux</p>
                <p>- Implemented Firebase for the database and deployment.</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
