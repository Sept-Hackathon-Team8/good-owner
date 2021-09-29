import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DoggoContext } from '../../DoggoContext';
import HomeHeader from '../../components/headers/HomeHeader';

const Feedback = () => {
  const {
    currentPet,
    currentProgress,
    setCurrentProgress,
    tasks,
    mockFeedbackData,
    setMockFeedbackData,
  } = useContext(DoggoContext);

  function handleClick(ev) {
    // modify the feedback val
    // move to next task
    console.log(
      'BEFORE INCREMENT OF MOCKFEEDBACK',
      mockFeedbackData[currentProgress.unit - 1][currentProgress.task - 1]
    );
    const feedbackObj =
      mockFeedbackData[currentProgress.unit - 1][currentProgress.task - 1];
    if (ev.target.name === 'ruff') feedbackObj.ruff++;
    else feedbackObj.great++;
    console.log(
      'AFTER INCREMENT OF MOCKFEEDBACK',
      mockFeedbackData[currentProgress.unit - 1][currentProgress.task - 1]
    );

    if (currentProgress.task < 4) currentProgress.task++;
    else currentProgress.task = 1;
    setCurrentProgress(currentProgress);
  }

  return (
    <div className="feedback-page">
      {/* TODO: The homeheader need to exist in the wrapping container for the app */}
      {/* <HomeHeader /> */}
      <h1>
        How did <em>{currentPet ? currentPet.name : 'doggo'}</em> do?
      </h1>
      <Link to="/advice">
        <button onClick={handleClick} className="ruffff" name="ruff">
          Ruffff
        </button>
      </Link>
      <Link to="/treat">
        <button onClick={handleClick} className="great" name="great">
          Great
        </button>
      </Link>
    </div>
  );
};

export default Feedback;
