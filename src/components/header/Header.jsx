import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assests/aviime.png";
import HeaderSocial from "./HeaderSocial";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Javier Moreno</h1>
        <h5 className="text-light">
          {" "}
          Full Stack Developer <br /> Design Graphic{" "}
        </h5>
        <CTA />
        <HeaderSocial />

        <div className="container-me">
          <div className="me">
            <img src={ME} alt="me" />
          </div>
        </div>
        <a href="#contacts" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
