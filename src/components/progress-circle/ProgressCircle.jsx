import React from 'react';
// import mark from '../../Images/mark.svg';

const colors = ['none', 'red', 'yellow', 'yellow', 'rgb(82,202,48)'];

/* 

There is a way to declare stylesheets within the component we should look
into integrating the stuff that belongs here from index.css

.progress-ring {
    overflow: visible;
    height: 60px;
    width: 60px;
    position: absolute;
    top: -4px;
    left: -4px;
}


*/

const ProgressCircle = ({ succesfulTasks }) => {
  function calculateCircumference(radius) {
    return 2 * Math.PI * radius;
  }
  const circumference = calculateCircumference(30);
  const progress = (succesfulTasks / 7) * 100;
  const remainingProgress = 100 - progress;
  // console.log(remainingProgress)
  const offset = (remainingProgress / 100) * circumference;
  // console.log(offset)
  return (
    <>
      {/* <img className="image-icon" alt="mark and reward" src={mark} /> */}

      <svg className="progress-ring">
        <g transform="rotate(-90 30 30)">
          <circle
            r="28"
            cx="30"
            cy="30"
            fill="transparent"
            stroke="lightgrey"
            stroke-width="7px"
            stroke-dasharray={circumference}
            stroke-dashoffset="0"
          ></circle>
          <circle
            r="28"
            cx="30"
            cy="30"
            fill="transparent"
            stroke={colors[succesfulTasks < 5 ? succesfulTasks : 4]}
            stroke-width="7px"
            stroke-dasharray={circumference}
            stroke-dashoffset={offset}
          ></circle>
        </g>
      </svg>
    </>
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
