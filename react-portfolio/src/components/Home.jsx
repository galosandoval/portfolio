import { Fragment, useEffect } from "react";
import "./Components.css";
import { init } from "ityped";

export const Home = () => {
  useEffect(() => {
    const typedWords = document.querySelector(".text-5");
    init(typedWords, { strings: ["Web Developer.", "Los Angelean.", "Coffee nerd.", "Golfer.", "Rock climber."] });
  }, []);
  return (
    <Fragment>
      <section className="home" id="home">
        <div className="max-width">
          <div className="home-content">
            <div className="text-1">Hello, my name is</div>
            <div className="text-2">Galo Sandoval</div>
            <div className="text-3">
              and I am a <span className="text-5"></span>
            </div>
            {/* <a href="#">Hire</a> */}
          </div>
        </div>
      </section>
    </Fragment>
  );
};
