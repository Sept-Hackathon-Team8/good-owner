import React from "react";
import { useHistory } from 'react-router-dom'


const Training = (props) => {
    const history = useHistory() ;
    const handleClick = (e) => {
        // e.preventDefault()
        history.push('/task')
    }
    return (
      <div className="training">
        <div className="unit">
            <h2> Unit One </h2>
        </div>
        <div className="tasks">
            <div className="task1">
                Hand Target
            </div>
            <div className="task2">
                Mark and Reward
            </div>
            <div className="task3">
                Sit
            </div>
            <div className="task4">
                Auto Focus
            </div>
        </div>
        <button onClick={ handleClick }>Start Lesson</button>
        
     
      </div>
    );
  };
  
  export default Training;