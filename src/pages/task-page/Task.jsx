import React from "react";
import { Link } from "react-router-dom";
import HomeHeader from "../../components/headers/HomeHeader";
import NextButton from "../../components/next-button/NextButton";
import mark from "../../Images/mark.svg"
import focus from "../../Images/focus.svg"
import target from "../../Images/target.svg"
import sit from "../../Images/sit.svg"

const Task = (props) => {
  return (
    <div className="task-page-container">
      <HomeHeader />
      <div className="task-container">
        <div className="task">
            <div className="task-image">
              <img alt="mark and reward image" src={mark}/>
            </div>
            <div className="task-text">
              Mark and Reward
            </div>
            {/* add exit buttion */}
            <div className="exit-button">
              
            </div>
        </div>
        <div className="training-image">
          <img alt="image" src=""/>
        </div>
        
        <p> Instructions</p>
        <Link to="/feedback">
          <NextButton />
        </Link>
      </div>
    </div>
  );
};

export default Task;