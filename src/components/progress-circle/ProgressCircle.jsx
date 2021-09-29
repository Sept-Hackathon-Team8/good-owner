import React from "react";
import mark from "../../Images/mark.svg"
import focus from "../../Images/focus.svg"
import target from "../../Images/target.svg"
import sit from "../../Images/sit.svg"


const ProgressCircle = (props) => {

    function calculateCircumference(radius) {
        return 2 * Math.PI * radius;
    }
    const circumference = calculateCircumference(30)
    const progress = (5/7) *100
    const remainingProgress = (100 - progress)
    // console.log(remainingProgress)
    const offset = (remainingProgress/100) * circumference
    // console.log(offset)
    return (

        <div className="progress-container">
            <img className="image-icon" alt="mark and reward image" src={mark}/>

            <svg className="progress-ring" >
                <g transform="rotate(-90 30 30)"> 
                    <circle r="28" cx="30" cy="30" fill="transparent" stroke="lightgrey" stroke-width="7px" stroke-dasharray={circumference} stroke-dashoffset="0"></circle>
                    <circle r="28" cx="30" cy="30" fill="transparent" stroke="blue" stroke-width="7px" stroke-dasharray={circumference} stroke-dashoffset={offset}></circle>
                </g>
                
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