import React from "react";

const OnboardHeader = (props) => {
  return (
    <div className="header">
      <div className="doggo-svg">
        <img
          src={`${process.env.PUBLIC_URL}/assets/Doggo.svg`}
          alt="dog-icon"
          className="doggo-icon"
        />
      </div>
      Doggo
    </div>
  );
};

 export default OnboardHeader;