<<<<<<< HEAD
import React, { useEffect, useState, useContext, useCallback } from 'react';
import { DoggoContext } from '../../DoggoContext';
import { Link } from 'react-router-dom';

import TrainingUnit from './TrainingUnit.jsx';
// consider weather data is a request at the app level where the tasks
// object is downloaded one time with all the lessons data.
// At least to create the TaskSnippets to illustrate the whole Journey
// See comments inside useEffect

// This could also make sense to be a request at app load
// and added to currentProgress state variable then

// TODO: convert mockFeedback into API call that returns feedback for specific unit, also change mockFeedback implementations
// each array in mockFeedbackData represents a unit and each object in said array represents the task

const Training = props => {
  const {
    currentProgress,
    setCurrentProgress,
    tasks,
    mockFeedbackData,
    setActiveUnit,
  } = useContext(DoggoContext);

  const [feedbackData, setFeedbackData] = useState([]);
  const [unitPassed, setUnitPassed] = useState(false);
  // useEffect(() => {
  //   if (currentProgress && currentProgress.unit) {
  //     setUnitTitle(tasks[currentProgress.unit].title);
  //     setUnitData(tasks[currentProgress.unit].tasks);
  //   }
  // }, [currentProgress, tasks]);

  // TODO: another API call to get the feedback values for each task in order to create the circle progress UI element
  useEffect(() => {
    if (currentProgress && currentProgress.unit) {
      setFeedbackData(mockFeedbackData);
      // setFeedbackData(mockFeedbackData[currentProgress.unit - 1]);
    }
  }, [setFeedbackData, currentProgress, mockFeedbackData]);

  const moveToNextLesson = useCallback(() => {
    setCurrentProgress(progress => ({ ...progress, unit: progress.unit + 1 }));
  }, [setCurrentProgress]);

  useEffect(() => {
    if (feedbackData.length) {
      const unitCompleted = feedbackData[currentProgress.unit - 1]
        .map(feedback => feedback.great)
        .every(score => score > 3);
      if (unitCompleted) moveToNextLesson();
    }
  }, [feedbackData, currentProgress]);

  return (
    <div className="training">
      {tasks.length && feedbackData.length
        ? tasks.map((unit, i) => {
            return (
              <TrainingUnit
                key={i}
                unitData={unit.tasks}
                unitTitle={unit.title}
                unitNum={unit.number}
                unitFeedback={feedbackData[i]}
                setActiveUnit={setActiveUnit}
                currentProgress={currentProgress}
              />
            );
          })
        : 'loading data'}

      {/* turn this button functionality into a component instead of a ternary operator */}
    </div>
  );
};

export default Training;
=======
import React from "react";
import { Link } from "react-router-dom";
import mark from "../../Images/mark.svg"
import focus from "../../Images/focus.svg"
import target from "../../Images/target.svg"
import sit from "../../Images/sit.svg"
import ProgressCircle from "../progress-circle/ProgressCircle";


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
                  <ProgressCircle />
                  {/* <img alt="mark and reward image" src={mark}/> */}
                </div>
                <div className="task-text">
                  Mark and Reward
                </div>
            </div>
            <div className="task">
                <div className="task-image">
                {/* <ProgressCircle /> */}
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
          <button className="start-lesson">Start Lesson</button>
        </Link>
     
      </div>
    );
  };
  
  export default Training;
>>>>>>> main
