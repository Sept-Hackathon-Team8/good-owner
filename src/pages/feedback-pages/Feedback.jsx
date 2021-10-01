import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DoggoContext } from '../../DoggoContext';
import HomeHeader from '../../components/headers/HomeHeader';

const Feedback = () => {
  const { currentPet, activeUnit, setActiveUnit, mockFeedbackData } =
    useContext(DoggoContext);

  function handleClick(ev) {
    // modify the feedback val
    // move to next task
    const feedbackObj =
      mockFeedbackData[activeUnit.unit - 1][activeUnit.task - 1];
    if (ev.target.name === 'ruff') feedbackObj.ruff++;
    else feedbackObj.great++;

    if (activeUnit.task < 4) activeUnit.task++;
    else activeUnit.task = 1;
    setActiveUnit(activeUnit);
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
