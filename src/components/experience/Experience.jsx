import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2> My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Fronted Develoment</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill />
              <div>
                <h4>HTML</h4>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill />
              <div>
                <h4>CSS</h4>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill />
              <div>
                <h4>JavaScrit</h4>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill />
              <div>
                <h4>REACT</h4>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill />
              <div>
                <h4>Bootstrap</h4>
              </div>
            </article>
          </div>
        </div>

        {/* end of fronted */}

        <div className="experience__backend">
          <h3>Backend Develoment</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill />
              <div>
                <h4>Node JS</h4>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill />
              <div>
                <h4>MongoDB</h4>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill />
              <div>
                <h4>MySQL</h4>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill />
              <div>
                <h4>Posgrest</h4>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill />
              <div>
                <h4>Sequelize</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
