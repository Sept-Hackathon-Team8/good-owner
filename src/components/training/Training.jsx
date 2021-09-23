import React from "react";
import { Link } from "react-router-dom";
// import { useHistory } from 'react-router-dom'


const Training = (props) => {
    // const history = useHistory() ;
    // const handleClick = (e) => {
    //     // e.preventDefault()
    //     history.push('/task')
    // }
    return (
      <div className="training">
        <div className="unit">
            <h1> Unit One </h1>
        </div>
        <div className="tasks">
            <div className="task1">
                Mark and Reward
            </div>
            <div className="task2">
                Auto Focus
            </div>
            <div className="task3">
                Hand Target
            </div>
            <div className="task4">
                Sit
            </div>
        </div>
        
        <Link to="/task">
          <button className="start-lesson next">Start Lesson</button>
        </Link>
     
      </div>
    );
  };
  
  export default Training;