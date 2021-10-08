import React, { useState, useContext } from 'react';
import { DoggoContext } from '../../DoggoContext';
import hamburgericon from '../../Images/hamburger.svg';
import HamburgerMenu from '../../components/hamburger-menu/HamburgerMenu';
import './Hamburger.css';

const Hamburger = () => {
  const { currentPet, setCurrentPet } = useContext(DoggoContext);
  const { currentUser, setCurrentUser } = useContext(DoggoContext);
  const [openHamburger, setOpenHamburger] = useState(false);

  const changeOpenHamburger = e => {
    e.preventDefault();
    setOpenHamburger(!openHamburger);
  };

  return (
    <div className="hamburger-icon">
      <img
        alt="menu button"
        src={hamburgericon}
        onClick={e => changeOpenHamburger(e)}
      />
      <div
        className={
          openHamburger ? 'hamburger-menu-open' : 'hamburger-menu-closed'
        }
      >
        <HamburgerMenu openHamburger={openHamburger} changeOpenHamburger={changeOpenHamburger} />
      </div>
    </div>
  );
};

export default Hamburger;
