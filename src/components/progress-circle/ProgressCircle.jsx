import React from "react";
import mark from "../../Images/mark.svg"
import focus from "../../Images/focus.svg"
import target from "../../Images/target.svg"
import sit from "../../Images/sit.svg"


const ProgressCircle = (props) => {
    return (

        <div className="task-image">
            <img className="image-icon" alt="mark and reward image" src={mark}/>
            <svg className="progress-ring">
                <circle className="progress-ring-circle"
                    r="30"
                    cx="30"
                    cy="30"
                />
            </svg>
            
        </div>
        // <div className="task-image">
        //   <img alt="auto focus image" src={focus}/>
        // </div>
        // <div className="task-image">
        //   <img alt="hand target image" src={target}/>
        // </div>
        // <div className="task-image">
        //   <img alt="sit image" src={sit}/>
        // </div>

    );
  };
  
  export default ProgressCircle;