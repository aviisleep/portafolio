import React from "react";
import "./about.css";
import ME from "../../assests/avii-about.jpg";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Javier Moreno" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>
                10+ Years in Graphic Design <br />
                <span>3+ Years as Full Stack Developer</span>
              </small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>50+ Completed Projects</small>
            </article>
          </div>

          <p>
            I am a proactive and passionate professional dedicated to continuous
            learning and growth. With over{" "}
            <strong>10 years of experience</strong> in graphic design,
            specializing in printed advertising, I have honed my creativity and
            attention to detail.
            <br />
            <br />
            In addition, I have over <strong>3 years of experience</strong> as a
            Full Stack Developer, focusing on creating dynamic, responsive, and
            user-friendly websites. My expertise includes HTML, CSS, JavaScript,
            React, Node.js, Express, MySQL, PostgreSQL, MongoDB, and API
            integration. I am always eager to learn and improve every day.
          </p>

          <a href="#contacts" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
