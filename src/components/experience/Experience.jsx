import React, { useEffect, useRef } from "react";
import "./experience.css";
// import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    // Cargar el script de TagCanvas dinámicamente
    const script = document.createElement("script");
    script.src = "https://www.goat1000.com/tagcanvas.min.js";
    script.onload = () => {
      try {
        // Iniciar TagCanvas para cada categoría
        window.TagCanvas.Start("frontendCanvas", "frontendTags", {
          textColour: "#00BFFF",
          outlineColour: "#000000",
          reverse: true,
          depth: 0.8,
          maxSpeed: 0.03,
        });

        window.TagCanvas.Start("backendCanvas", "backendTags", {
          textColour: "#00BFFF",
          outlineColour: "#000000",
          reverse: true,
          depth: 0.8,
          maxSpeed: 0.03,
        });

        window.TagCanvas.Start("designCanvas", "designTags", {
          textColour: "#00BFFF",
          outlineColour: "#000000",
          reverse: true,
          depth: 0.8,
          maxSpeed: 0.03,
        });
      } catch (e) {
        console.error("Error al inicializar TagCanvas:", e);
      }
    };
    document.body.appendChild(script);
  }, []);

  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        {/* Frontend Skills */}
        <div className="experience__category">
          <h3>Frontend Development</h3>
          <canvas
            ref={canvasRef}
            id="frontendCanvas"
            width="300"
            height="300"
          ></canvas>
          <div id="frontendTags" className="hidden">
            <ul>
              <li>
                <a href="#html">HTML</a>
              </li>
              <li>
                <a href="#css">CSS</a>
              </li>
              <li>
                <a href="#javascript">JavaScript</a>
              </li>
              <li>
                <a href="#react">React</a>
              </li>
              <li>
                <a href="#redux">Redux</a>
              </li>
              <li>
                <a href="#Bootstrap">Bootstrap</a>
              </li>
              <li>
                <a href="#Tailwind CSS">Tailwind CSS</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Backend Skills */}
        <div className="experience__category">
          <h3>Backend Development</h3>
          <canvas id="backendCanvas" width="300" height="300"></canvas>
          <div id="backendTags" className="hidden">
            <ul>
              <li>
                <a href="#Node.js">Node.js</a>
              </li>
              <li>
                <a href="#MongoDB">MongoDB</a>
              </li>
              <li>
                <a href="#MySQL">MySQL</a>
              </li>
              <li>
                <a href="#Php">Php</a>
              </li>
              <li>
                <a href="#PostgreSQL">PostgreSQL</a>
              </li>
              <li>
                <a href="#API Development">API Development</a>
              </li>
              <li>
                <a href="#Sequelize">Sequelize</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Graphic Design Skills */}
        <div className="experience__category">
          <h3>Graphic Design</h3>
          <canvas id="designCanvas" width="300" height="300"></canvas>
          <div id="designTags" className="hidden">
            <ul>
              <li>
                {" "}
                <a href="#Logo Design">Logo Design</a>
              </li>
              <li>
                {" "}
                <a href="#Brand Identity">Brand Identity</a>
              </li>
              <li>
                {" "}
                <a href="#Illustrations">Illustrations</a>
              </li>
              <li>
                {" "}
                <a href="#Packaging Design">Packaging Design</a>
              </li>
              <li>
                {" "}
                <a href="#UI/UX Design">UI/UX Design</a>
              </li>
              <li>
                {" "}
                <a href="#Typography">Typography</a>
              </li>
              <li>
                {" "}
                <a href="#Social Media Graphics">
                  Social Media GraphicsNode.js
                </a>
              </li>
              <li>
                {" "}
                <a href="#Advertising Materials">Advertising Materials</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
