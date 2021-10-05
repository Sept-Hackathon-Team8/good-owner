import React from "react";
import logo from "../../Images/Doggo.svg";
import "./HamburgerMenu.css";
import backarrow from "../../Images/back.svg";

const HamburgerMenu = (props) => {
  const { changeOpenHamburger, openHamburger } = props;
  console.log(openHamburger)

  return (
    <div className="hamburger-menu">
      <img
        className="back"
        src={backarrow}
        onClick={(e) => changeOpenHamburger(e)}
      />
      <div className="ham-logo-container">
        <img
          className="ham-doggo-logo"
          alt="doggo logo" src={logo}
        />
        <div className="ham-doggo">DOGGO</div>
      </div>
    </div>
  );
}

export default HamburgerMenu;