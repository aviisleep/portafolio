import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        {/* Frontend Skills */}
        <div className="experience__category">
          <h3>Frontend Development</h3>
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
                <h4>JavaScript</h4>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill />
              <div>
                <h4>React</h4>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill />
              <div>
                <h4>Redux</h4>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill />
              <div>
                <h4>Bootstrap</h4>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill />
              <div>
                <h4>Tailwind CSS</h4>
              </div>
            </article>
          </div>
        </div>

        {/* Backend Skills */}
        <div className="experience__category">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill />
              <div>
                <h4>Node.js</h4>
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
                <h4>PostgreSQL</h4>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill />
              <div>
                <h4>API Development</h4>
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

        {/* Graphic Design Skills */}
        <div className="experience__category">
          <h3>Graphic Design</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill />
              <div>
                <h4>Logo Design</h4>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill />
              <div>
                <h4>Brand Identity</h4>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill />
              <div>
                <h4>Illustrations</h4>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill />
              <div>
                <h4>Packaging Design</h4>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill />
              <div>
                <h4>UI/UX Design</h4>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill />
              <div>
                <h4>Typography</h4>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill />
              <div>
                <h4>Social Media Graphics</h4>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill />
              <div>
                <h4>Advertising Materials</h4>
              </div>
            </article>
          </div>

          <h4>Tools I Use:</h4>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill />
              <div>
                <h4>Adobe Photoshop</h4>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill />
              <div>
                <h4>Adobe Illustrator</h4>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill />
              <div>
                <h4>Adobe InDesign</h4>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill />
              <div>
                <h4>CorelDRAW</h4>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill />
              <div>
                <h4>Figma</h4>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill />
              <div>
                <h4>Canva</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
