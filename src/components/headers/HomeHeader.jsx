import React, { useContext, useEffect } from 'react';
import { DoggoContext } from '../../DoggoContext';
import Hamburger from '../hamburger/Hamburger';
// import icon from "../../Images/carbon_user-avatar.svg"
import fire from '../../Images/FlameNoNumber.svg';

const HomeHeader = props => {
  const { streak } = useContext(DoggoContext);

  return (
    <div className="home-header">
      <div className="doggo-home">DOGGO</div>
      <div className="user-progress">
        <Hamburger />
        {/* <div className="icon"> */}
        {/* <Hamburger /> */}
        {/* <img alt="user vector icon" src={icon}/> */}
        {/* </div> */}
        <div className="progress">
          <div className="circle one">1</div>
          <div className="circle two">2</div>
          <div className="circle three">3</div>
          <div className="circle four">4</div>
          <div className="circle five">5</div>
          <div className="circle six">6</div>
          <div className="circle seven">7</div>
        </div>
        <div className="flame">
          <img alt="user vector icon" src={fire} />
        </div>
      </div>
      {/* DELETE STREAK DIV BELOW AND WRITE LOGIC FOR STREAK PRESENTATION */}
      {streak !== null ? (
        <div> The current streak is: {streak}</div>
      ) : (
        'no streak'
      )}
    </div>
  );
};

export default HomeHeader;
