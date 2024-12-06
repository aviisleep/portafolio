import React, { useState } from "react";
import { BiCheck } from "react-icons/bi";
import "./services.css";

const Services = () => {
  const [showFAQ, setShowFAQ] = useState({
    graphicDesign: false,
    webDevelopment: false,
    fullStack: false,
  });

  // Función para alternar la visibilidad de las FAQ
  const toggleFAQ = (service) => {
    setShowFAQ((prevState) => ({
      ...prevState,
      [service]: !prevState[service],
    }));
  };

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
              <a
                href={generateWhatsAppLink("Graphic Design")}
                className="btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Request Consultation
              </a>
              <p
                onClick={() => toggleFAQ("graphicDesign")}
                className="service__faq-toggle"
              >
                {showFAQ.graphicDesign ? "Hide FAQ" : "View FAQ"}
              </p>
              {showFAQ.graphicDesign && (
                <div className="service__faq-content">
                  <p>How long does a logo design take?</p>
                  <p>
                    It takes approximately 1-2 weeks depending on the complexity
                    of the design.
                  </p>
                  <p>What do I need to get started?</p>
                  <p>
                    Just your ideas! We'll work together to bring your vision to
                    life.
                  </p>
                </div>
              )}
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
              <a
                href={generateWhatsAppLink("Web Development")}
                className="btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Request Consultation
              </a>
              <p
                onClick={() => toggleFAQ("webDevelopment")}
                className="service__faq-toggle"
              >
                {showFAQ.webDevelopment ? "Hide FAQ" : "View FAQ"}
              </p>
              {showFAQ.webDevelopment && (
                <div className="service__faq-content">
                  <p>How long does a web development project take?</p>
                  <p>It depends on the complexity, but typically 2-6 weeks.</p>
                  <p>Do you provide ongoing support after the project?</p>
                  <p>Yes, I offer ongoing support and maintenance packages.</p>
                </div>
              )}
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
              <p>Node.js Back-end Development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Database Integration</p>
            </li>
          </ul>

          <div className="service__additional-info">
            <div className="service__consultation">
              <h4>Free Consultation</h4>
              <a
                href={generateWhatsAppLink("Full Stack Development")}
                className="btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Request Consultation
              </a>
              <p
                onClick={() => toggleFAQ("fullStack")}
                className="service__faq-toggle"
              >
                {showFAQ.fullStack ? "Hide FAQ" : "View FAQ"}
              </p>
              {showFAQ.fullStack && (
                <div className="service__faq-content">
                  <p>Do you work with custom-built backend solutions?</p>
                  <p>
                    Yes, I build custom backends tailored to your project's
                    needs.
                  </p>
                  <p>
                    What technologies do you use for full-stack development?
                  </p>
                  <p>React, Node.js, Express, and MongoDB.</p>
                </div>
              )}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Services;
