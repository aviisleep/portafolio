import React from "react";
import "./about.css";
import ME from "../../assests/avii-about.jpg";
import { FaAward } from "react-icons/fa";
// import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const about = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Avii Sleep" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>
                10+ Years Graphic Design <br>Fronted Developer 3+ years</br>
              </small>
            </article>

            {/* <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>200+ Wordwide</small>
            </article> */}

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>50+ Complete</small>
            </article>
          </div>

          <p>
            I am an active person looking for new knowledge. I have 9 years of
            experience in the labor field as a graphic designer. I currently
            have more than 3 years specializing as a Full Stack developer,
            handling HTML, CSS, Javascript, React. and improving every day
            learning.
          </p>

          <a href="#contacts" className="btn btn-primary">
            {" "}
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default about;
