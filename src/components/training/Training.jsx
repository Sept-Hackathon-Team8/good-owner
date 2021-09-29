import React, { useEffect, useState, useContext, useCallback } from 'react';
import { DoggoContext } from '../../DoggoContext';
import { Link } from 'react-router-dom';
import TaskSnippet from './TaskSnippet';
// consider weather data is a request at the app level where the tasks
// object is downloaded one time with all the lessons data.
// At least to create the TaskSnippets to illustrate the whole Journey
// See comments inside useEffect

// This could also make sense to be a request at app load
// and added to currentProgress state variable then

// TODO: convert mockFeedback into API call that returns feedback for specific unit, also change mockFeedback implementations
// each array in mockFeedbackData represents a unit and each object in said array represents the task

const Training = props => {
  const { currentProgress, setCurrentProgress, tasks, mockFeedbackData } =
    useContext(DoggoContext);

  const [unitTitle, setUnitTitle] = useState('');
  const [unitData, setUnitData] = useState('');
  const [feedbackData, setFeedbackData] = useState([]);
  const [unitPassed, setUnitPassed] = useState(false);

  useEffect(() => {
    if (currentProgress && currentProgress.unit) {
      setUnitTitle(tasks[currentProgress.unit].title);
      setUnitData(tasks[currentProgress.unit].tasks);
    }
  }, [currentProgress, tasks]);

  // TODO: another API call to get the feedback values for each task in order to create the circle progress UI element
  useEffect(() => {
    if (currentProgress && currentProgress.unit) {
      setFeedbackData(mockFeedbackData[currentProgress.unit - 1]);
    }
  }, [setFeedbackData, currentProgress]);

  useEffect(() => {
    if (feedbackData.length) {
      const unitCompleted = feedbackData
        .map(feedback => feedback.great)
        .every(score => score > 3);
      setUnitPassed(unitCompleted);
    }
  }, [feedbackData]);

  const moveToNextLesson = useCallback(() => {
    setCurrentProgress(progress => ({ ...progress, unit: progress.unit + 1 }));
  }, []);

  return (
    <div className="training">
      <div className="unit">
        <h1>{unitTitle}</h1>
      </div>
      <div className="tasks">
        {unitData.length && feedbackData.length
          ? unitData.map((t, i) => (
              <TaskSnippet key={i} task={t} feedback={feedbackData[i]} />
            ))
          : 'There is no data'}
      </div>

      {/* turn this button functionality into a component instead of a ternary operator */}
      {unitPassed ? (
        <button className="start-lesson next" onClick={moveToNextLesson}>
          Proceed to Unit {currentProgress.unit + 1}
        </button>
      ) : (
        <Link to="/task">
          <button className="start-lesson next">Start Lesson</button>
        </Link>
      )}
    </div>
  );
};

export default Training;
