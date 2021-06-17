import "./Components.css";

export const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="max-width">
        <h2 className="title">Skills</h2>
        <div className="skills-content">
          <div className="column left">
            <div className="text">Skills and experience</div>
            <p>
              Most of my experience in web development has been spent on React and Javascript. I'm proficient in creating a backend with Java. Python has been useful for me when studying algorithms and data structures.
            </p>
            <a target="blank" href="https://www.linkedin.com/in/galo-sandoval/">Read More</a>
          </div>
          <div className="column right">
            <div className="bars">
              <div className="info">
                <span>HTML</span>
                <span>75%</span>
              </div>
              <div className="line html"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>CSS</span>
                <span>75%</span>
              </div>
              <div className="line css"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>Javascript</span>
                <span>63.5%</span>
              </div>
              <div className="line javascript"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>Python</span>
                <span>15%</span>
              </div>
              <div className="line python"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>Java</span>
                <span>10%</span>
              </div>
              <div className="line java"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
