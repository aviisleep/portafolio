import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Design Graphic</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Creación de logotipos</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Flyers</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Banners</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Papeleria</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Y muchos más</p>
            </li>
          </ul>
        </article>

        {/* end UI/UX Design */}

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Landing page</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Design morderno</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Dominio</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Create an interective user experience</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>API integrations</p>
            </li>
          </ul>
        </article>

        {/* end WEB DEVELOPMENT */}

        <article className="service">
          <div className="service__head">
            <h3>Full Stack Developer</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Service project with react</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Javascript service</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Curs in live with me</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>

        {/* end Content Creation */}
      </div>
    </section>
  );
};

export default Services;
