import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DoggoContext } from '../../DoggoContext';
import logo from '../../Images/Doggo.svg';
import './HamburgerMenu.css';
import backarrow from '../../Images/back.svg';
import { removeToken } from '../../services/auth';

const HamburgerMenu = props => {
  const { changeOpenHamburger } = props;
  const {
    currentPet,
    setCurrentUser,
    setCurrentPet,
    setActiveUnit,
    setCurrentProgress,
    setTasks,
    setLoggedIn,
    setTipData,
    setStreak,
  } = useContext(DoggoContext);

  // TODO: Move handleLogout logic out of component
  const handleLogout = () => {
    const setterArr = [
      setCurrentUser,
      setCurrentPet,
      setActiveUnit,
      setCurrentProgress,
      setTasks,
      setLoggedIn,
      setTipData,
      setStreak,
    ];
    setterArr.forEach(setter => setter(null));
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
      {currentPet ? <div className="ham-petname">{currentPet.name}</div> : ''}
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
