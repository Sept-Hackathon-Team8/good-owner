import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DoggoContext } from '../../DoggoContext';
import { postFeedback, getStreak } from '../../services/auth.js';
import ruffImg from '../../Images/RuffButtonMaster.svg';
import greatImg from '../../Images/GreatButton.svg';
import './FeedbackPages.css';

const Feedback = () => {
  const {
    currentPet,
    activeUnit,
    setActiveUnit,
    mockFeedbackData,
    setTipData,
    tasks,
    setStreak,
  } = useContext(DoggoContext);

  async function handleClick(ev) {
    // modify the feedback val to move to next task or exit tasks
    const feedbackObj =
      mockFeedbackData[activeUnit.unit - 1][activeUnit.task - 1];

    const task = tasks[activeUnit.unit - 1].tasks[activeUnit.task - 1];
    console.log("🌈"+ev.target.value)
    const success = Boolean(Number(ev.target.value));
    const tip = task['tip'].filter(tip => tip.success === success).pop();

    const assessmentData = { task: task.id, pet: currentPet.id, success };
    postFeedback(assessmentData);

    setTipData(tip);

    if (success) {
      feedbackObj.great++;
    } else {
      feedbackObj.ruff++;
    }

    if (activeUnit.task < tasks[activeUnit.unit - 1].tasks.length)
      activeUnit.task++;
    else {
      activeUnit.task = 1;
      const strk = await getStreak({ pet: currentPet.id, calculate: true });
      setStreak(strk.streak_value);
    }
    setActiveUnit(activeUnit);
  }

  return (
    <div className="feedback-page">
      <h1>How did {currentPet ? currentPet.name : 'doggo'} do?</h1>
      <Link to="/tip">
        <button onClick={handleClick} className="ruffff">
          <input 
            type="image" 
            value="0"
            src={ruffImg}
            alt="Rufff"
          />
        </button>
        <button onClick={handleClick} className="great">
          <input 
            type="image" 
            value="1"
            src={greatImg}
            alt="Great"
          />
        </button>
      </Link>
    </div>
  );
};

export default Feedback;