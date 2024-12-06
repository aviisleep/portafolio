import React from "react";

const CTA = () => {
  return (
    <div className="cta">
      <a
        href={
          "https://drive.google.com/file/d/1jathu2M25EOgzJB14QQHcIMA8OurNHj4/view?usp=drive_link"
        }
        download
        className="btn btn-primary"
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
