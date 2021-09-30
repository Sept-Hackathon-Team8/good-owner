import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import HomeHeader from '../../components/headers/HomeHeader';
import MainNextButton from '../../components/next-buttons/MainNextButton';
import mark from '../../Images/mark.svg';
import mark2 from '../../Images/mark2.svg';
import { DoggoContext } from '../../DoggoContext';
import { useState } from 'react';

const Task = props => {
  const { activeUnit, tasks } = useContext(DoggoContext);

  const [taskData, setTaskData] = useState(
    tasks[activeUnit.unit - 1].tasks[activeUnit.task - 1]
  );

  return (
    taskData && (
      <div className="task-page-container">
        {/* TODO: The homeheader need to exist in the wrapping container for the app */}
        {/* <HomeHeader /> */}
        <div className="task-container">
          <div className="task">
            <div className="task-image">
              <img alt={taskData.title + ' icon'} src={taskData.icon} />
            </div>
            <div className="task-title">{taskData.title}</div>
            {/* add exit buttion */}
            <div className="exit-button"></div>
          </div>
          <div className="training-image">
            <img alt={taskData.title} src={taskData.image} />
          </div>

          <ul className="task-list">
            {taskData.instructions.map((instruction, i) => (
              <li key={i}>{instruction}</li>
            ))}
          </ul>

          <Link to="/feedback">
            <MainNextButton />
          </Link>
        </div>
      </div>
    )
  );
};

export default Task;
