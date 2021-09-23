import React from 'react';
import { Link } from 'react-router-dom';
import HomeHeader from '../../components/headers/HomeHeader';
import NextButton from '../../components/next-buttons/MainNextButton';
import mark from '../../Images/mark.svg';
import mark2 from '../../Images/mark2.svg'


const Task = props => {
  return (
    <div className="task-page-container">
      <HomeHeader />
      <div className="task-container">
        <div className="task">
          <div className="task-image">
            <img alt="mark and reward image" src={mark} />
          </div>
          <div className="task-text">Mark and Reward</div>
          {/* add exit buttion */}
          <div className="exit-button"></div>
        </div>
        <div className="training-image">
          <img alt="image" src={mark2}/>
        </div>

        <ul>
          <li>Sit near your dog. Wait for him to look toward you, while holding a treat behind your back.</li>
          <li>When he makes eye contact or looks toward your face, mark and reward.</li>
          <li>Repeat the activity from a standing position.</li>
        </ul>

        <Link to="/feedback">
          <NextButton />
        </Link>
      </div>
    </div>
  );
};

export default Task;
