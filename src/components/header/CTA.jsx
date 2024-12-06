import React from "react";

const CTA = () => {
  return (
    <div className="cta">
      <a
        href={
          "https://drive.google.com/file/d/1CADBPATzZwvWp5QesjitjA14WIFnu9tH/view?usp=sharing"
        }
        download
        className="btn btn-primary"
        target="_blank"
        rel="noreferrer"
      >
        Design Portfolio
      </a>
      <a href="#contacts" className="btn btn-primary">
        {" "}
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
