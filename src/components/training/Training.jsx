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
