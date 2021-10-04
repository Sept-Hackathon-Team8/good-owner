import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { DoggoContext } from "../../DoggoContext";
import hamburgericon from "../../Images/hamburger.svg";
import "../hamburger/Hamburger.css";

const Hamburger = () => {
  const { currentPet, setCurrentPet } = useContext(DoggoContext);
  const { currentUser, setCurrentUser } = useContext(DoggoContext);
  const [openHamburger, setOpenHamburger] = useState(false);
  console.log(currentUser)
  console.log(currentPet)

  const changeOpenHamburger = (e) => {
    e.preventDefault();
    setOpenHamburger(!openHamburger);
  };

  console.log(openHamburger);
  return (
    <div className="hamburger-icon">
      <img
        alt="menu button"
        src={hamburgericon}
        onClick={(e) => changeOpenHamburger(e)}
      />
      <div
        className={
          openHamburger
            ? "hamburger-menu-open"
            : "hamburger-menu-closed"
        }
      >
        <Link className="hamburger-menu-closed">closed</Link>
        <div className="hamburger-menu-open">open</div>
      </div>
    </div>
  )
};

export default Hamburger;