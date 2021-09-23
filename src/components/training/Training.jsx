import React from "react";
import { Link } from "react-router-dom";
import mark from "../../Images/mark.svg"
import focus from "../../Images/focus.svg"
import target from "../../Images/target.svg"
import sit from "../../Images/sit.svg"


const Training = (props) => {
    return (
      <div className="training">
        <div className="unit">
            <h1> Unit One </h1>
        </div>
        <div className="tasks">
          {/* reusable code, create components */}
            <div className="task">
                <div className="task-image">
                  <img alt="mark and reward image" src={mark}/>
                </div>
                <div className="task-text">
                  Mark and Reward
                </div>
            </div>
            <div className="task">
                <div className="task-image">
                  <img alt="auto focus image" src={focus}/>
                </div>
                <div className="task-text">
                  Auto Focus
                </div>
            </div>
            <div className="task">
                <div className="task-image">
                  <img alt="hand target image" src={target}/>
                </div>
                <div className="task-text">
                  Hand Target
                </div>
            </div>
            <div className="task">
                <div className="task-image">
                  <img alt="sit image" src={sit}/>
                </div>
                <div className="task-text">
                  Sit
                </div>
            </div>
        </div>
        
        <Link to="/task">
          <button className="start-lesson next">Start Lesson</button>
        </Link>
     
      </div>
    );
  };
  
  export default Training;