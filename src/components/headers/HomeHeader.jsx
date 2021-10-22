import React, { useContext, useEffect } from 'react';
import { DoggoContext } from '../../DoggoContext';
import Hamburger from '../hamburger/Hamburger';
// import icon from "../../Images/carbon_user-avatar.svg"
import fire from '../../Images/FlameNoNumber.svg';

const streakNumArr = count =>
  Object.keys(new Array(count).fill).map(num => Number(num));

const CircleComponent = ({ num, streakNum }) => {
  console.log('NUM AND STREAKNUM', num, streakNum);
  return (
    <div className={num <= streakNum ? `circle tennis` : 'circle'}>
      {num > streakNum ? num : ''}
    </div>
  );
};

const HomeHeader = props => {
  const { streak } = useContext(DoggoContext);

  return (
    <div className="home-header">
      <div className="doggo-home">DOGGO</div>
      <div className="user-progress">
        <Hamburger />
        <div className="progress">
          {streak !== null
            ? [1, 2, 3, 4, 5, 6, 7].map(num => {
                return <CircleComponent num={num} streakNum={streak} />;
              })
            : ''}
        </div>
        {streak !== null ? (
          <div className="flame">
            <span>{streak > 7 ? streak : ''}</span>
            <img
              style={{ mixBlendMode: streak > 7 ? 'hard-light' : 'hue' }}
              alt="user vector icon"
              src={fire}
            />
          </div>
        ) : (
          'no fire'
        )}
      </div>
      {/* DELETE STREAK DIV BELOW AND WRITE LOGIC FOR STREAK PRESENTATION */}
    </div>
  );
};

export default HomeHeader;
