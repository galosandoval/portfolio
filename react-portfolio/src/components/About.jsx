import { init } from "ityped";
import { useEffect } from "react";
import $ from "jquery";
import aboutPic from "../assets/pic6.jpeg";
import resumePic from "../assets/resume.png";
import "./Components.css";

export const About = () => {
  const handleClick = () => {
    $(".resume-container").toggleClass("show");
  };

  useEffect(() => {
    const typedWords = document.querySelector(".text-4");
    init(typedWords, { strings: ["Web Developer.", "Los Angelean.", "Coffee nerd.", "Golfer.", "Rock climber."] });
  }, []);

  return (
    <section className="about" id="about">
      <div className="max-width">
        <h2 className="title">About</h2>
        <div className="about-content">
          <div className="column left">
            <img src={aboutPic} alt="About me profile" />
          </div>
          <div className="column right">
            <div className="text">
              I'm Galo and I'm a <span className="text-4"></span>
            </div>
            <p>
              I grew up in sunny Southern California. I began attending a local
              community college where I took mostly business and music classes.
              I also started working at a local cafe while putting myself
              through college. The more I worked at the cafe, the more I grew to
              love coffee and customer service.
            </p>
            <p>
              Over the next 7 years I grew as a coffee service professional. I
              was promoted at every cafe I worked at. Towards the end of my
              coffee career, I managed one of the best coffee shops in the world
              in Downtown Los Angeles.
            </p>
            <p>
              In 2020, I decided to close the shop I was managing because of the
              pandemic. Now that I wasn't managing a coffee shop, I had time to
              learn something new. I began looking into web development and
              started learning javascript on Codacademy. I turned out to be
              pretty good at it.
            </p>
            <p>
              It didn't take long after that for me to start looking into Web
              Development Bootcamps. A friend that worked at google suggested a
              program called Lambda School for Fullstack Web Development.
            </p>
            <p>
              Lambda is a 6 month program that taught me Javascript, HTML/CSS,
              Node.js, Python. I also worked on several projects in teams of 4-6
              people. One of my favorite experiences in Lambda was getting the
              chance to mentor students.
            </p>
            <p>
              Not long after graduating Lambda School I got accepted to a
              recruiting company called Cook Systems. There, I worked with a
              team of talented individuals to learn enterprise level web
              development.
            </p>
            <p>
              Outside of tech, I just got into playing golf! It feels like the
              perfect sport because you get to hang out with some of your
              favorite friends and work on something that is challenging and
              rewarding.
            </p>
            <div onClick={handleClick} className="about-btn">
              Resume
            </div>
            <div onClick={handleClick} className="resume-container">
              <img className="resume" src={resumePic} alt="my resume" />
              <a
                target="blank"
                href="https://docs.google.com/document/d/1oWIqe0xZAjrVPe06YduN7kZXM7OeGlU-7WkANZuCJj0/edit?usp=sharing"
              >
                Link
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
