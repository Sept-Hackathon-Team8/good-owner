import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TaskSnippet from './TaskSnippet';
import tasks from '../../trainingdata.js';

const serverReponseMockData = {
  unit: 1,
  unit_title: 'Unit One',
  task: 1,
};

const Training = props => {
  const [currentProgress, setCurrentProgress] = useState('');

  const [unitTitle, setUnitTitle] = useState('');
  const [unitData, setUnitData] = useState('');

  useEffect(() => {
    setCurrentProgress(serverReponseMockData);
    if (currentProgress && currentProgress.unit) {
      console.log(
        'UNIT',
        currentProgress.unit,
        'type',
        typeof currentProgress.unit
      );
      console.log(
        'THIS IS THE UNIT',
        tasks[currentProgress.unit - 1].title,
        'type',
        typeof tasks[currentProgress.unit - 1].title
      );
      console.log(
        'THIS IS THE UNIT DATA',
        tasks[currentProgress.unit - 1].tasks,
        'type',
        typeof tasks[currentProgress.unit - 1].tasks
      );
      setUnitTitle(tasks[currentProgress.unit - 1].title);
      setUnitData(tasks[currentProgress.unit - 1].tasks);
    }
  }, [currentProgress]);

  // useEffect(() => {}, []);

  return (
    <div className="training">
      <div className="unit">
        <h1>{currentProgress.unit_title}</h1>
      </div>
      <div className="tasks"></div>

      <Link to="/task">
        <button className="start-lesson next">Start Lesson</button>
      </Link>
    </div>
  );
};

export default Training;
