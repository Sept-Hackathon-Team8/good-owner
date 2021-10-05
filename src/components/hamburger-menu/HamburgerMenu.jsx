import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DoggoContext } from '../../DoggoContext';
import logo from '../../Images/Doggo.svg';
import './HamburgerMenu.css';
import backarrow from '../../Images/back.svg';
import { removeToken } from '../../services/auth';

const HamburgerMenu = props => {
  const { changeOpenHamburger, openHamburger } = props;
  const { currentPet, setCurrentPet } = useContext(DoggoContext);
  const { currentUser, setCurrentUser } = useContext(DoggoContext);

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
  };

  return (
    <div className="hamburger-menu">
      <img
        alt="menu"
        className="back"
        src={backarrow}
        onClick={e => changeOpenHamburger(e)}
      />
      <div className="ham-logo-container">
        <img className="ham-doggo-logo" alt="doggo logo" src={logo} />
        <div className="ham-doggo">DOGGO</div>
      </div>
      <div className="ham-petname">{currentPet.name}</div>
      <div className="ham-streak-container">
        <div>Streak will go here</div>
      </div>
      <div className="sign-out-container">
        <Link to="/" onClick={() => handleLogout()}>
          <button className="sign-out">Sign Out</button>
        </Link>
      </div>
    </div>
  );
};

export default HamburgerMenu;
