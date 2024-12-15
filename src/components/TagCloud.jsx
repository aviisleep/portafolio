import React, { useEffect, useRef } from "react";

const TagCloud = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.goat1000.com/tagcanvas.min.js";
    script.onload = () => {
      try {
        window.TagCanvas.Start("myCanvas", "tagList", {
          textColour: "#ffffff",
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
    <div className="flex justify-center items-center">
      <div id="myCanvasContainer" className="p-4">
        <canvas ref={canvasRef} id="myCanvas" width="300" height="300">
          <p>El navegador no soporta el elemento canvas.</p>
        </canvas>
      </div>
      <div id="tagList" className="hidden">
        <ul>
          <li>
            <a href="https://www.google.com">Google</a>
          </li>
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
        </ul>
      </div>
    </div>
  );
};

export default TagCloud;
