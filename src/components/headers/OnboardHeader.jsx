import React from "react";
import logo from "../../Images/Doggo.svg"
const OnboardHeader = (props) => {
  return (
    <div className="onboard-header">
      <img alt="image" src={logo}/>
      <div className="doggo">DOGGO</div>
    </div>
  );
};

 export default OnboardHeader;