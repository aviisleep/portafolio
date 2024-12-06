import React from "react";
import { BiCheck } from "react-icons/bi";
import "./services.css";

const Services = () => {
  // Función para generar el enlace de WhatsApp con mensaje personalizado
  const generateWhatsAppLink = (service) => {
    const baseURL = "https://wa.me/573028687107?text=";
    let message = "";
    switch (service) {
      case "Graphic Design":
        message = "Hello, I am interested in Graphic Design services.";
        break;
      case "Web Development":
        message = "Hello, I need a consultation for Web Development.";
        break;
      case "Full Stack Development":
        message =
          "Hello, I would like to discuss Full Stack Development services.";
        break;
      default:
        message = "Hello, I would like to request a consultation.";
    }
    return `${baseURL}${encodeURIComponent(message)}`;
  };

  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        {/* Graphic Design Service */}
        <article className="service">
          <div className="service__head">
            <h3>Graphic Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Logo Creation</p>
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
              <p>Stationery</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>And much more</p>
            </li>
          </ul>

          <div className="service__additional-info">
            <div className="service__consultation">
              <h4>Free Consultation</h4>
              <p>
                Contact me for a free consultation and get personalized advice
                for your project.
              </p>
              <a
                href={generateWhatsAppLink("Graphic Design")}
                className="btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Request Consultation
              </a>
            </div>
            <div className="service__faq">
              <h4>Frequently Asked Questions</h4>
              <div className="faq-item">
                <p>How long does a logo design take?</p>
                <p>
                  It takes approximately 1-2 weeks depending on the complexity
                  of the design.
                </p>
              </div>
              <div className="faq-item">
                <p>What do I need to get started?</p>
                <p>
                  Just your ideas! We'll work together to bring your vision to
                  life.
                </p>
              </div>
            </div>
          </div>
        </article>

        {/* Web Development Service */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Landing Pages</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Modern Design</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Domain Setup</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Interactive User Experience</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>API Integrations</p>
            </li>
          </ul>

          <div className="service__additional-info">
            <div className="service__consultation">
              <h4>Free Consultation</h4>
              <p>
                Contact me for a free consultation and get personalized advice
                for your project.
              </p>
              <a
                href={generateWhatsAppLink("Web Development")}
                className="btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Request Consultation
              </a>
            </div>
            <div className="service__faq">
              <h4>Frequently Asked Questions</h4>
              <div className="faq-item">
                <p>How long does a web development project take?</p>
                <p>It depends on the complexity, but typically 2-6 weeks.</p>
              </div>
              <div className="faq-item">
                <p>Do you provide ongoing support after the project?</p>
                <p>Yes, I offer ongoing support and maintenance packages.</p>
              </div>
            </div>
          </div>
        </article>

        {/* Full Stack Development Service */}
        <article className="service">
          <div className="service__head">
            <h3>Full Stack Developer</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>React Project Services</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>JavaScript Services</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Live Courses</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>E-commerce</p>
            </li>
          </ul>

          <div className="service__additional-info">
            <div className="service__consultation">
              <h4>Free Consultation</h4>
              <p>
                Contact me for a free consultation and get personalized advice
                for your project.
              </p>
              <a
                href={generateWhatsAppLink("Full Stack Development")}
                className="btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Request Consultation
              </a>
            </div>
            <div className="service__faq">
              <h4>Frequently Asked Questions</h4>
              <div className="faq-item">
                <p>What is included in Full Stack development?</p>
                <p>
                  It includes front-end and back-end development, as well as
                  integration with databases.
                </p>
              </div>
              <div className="faq-item">
                <p>Do you offer code reviews?</p>
                <p>
                  Yes, I offer code reviews and debugging services as part of
                  ongoing support.
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>

      <div className="cta-banner">
        <h3>Ready to start your project?</h3>
        <p>
          Let me help you build your vision. Contact me today and let's make it
          happen.
        </p>
        <a
          href="https://wa.me/573028687107?text=Hello,%20I%20would%20like%20to%20discuss%20starting%20a%20project."
          className="btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Start Your Project
        </a>
      </div>
    </section>
  );
};

export default Services;
