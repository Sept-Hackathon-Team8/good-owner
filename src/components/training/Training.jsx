import React, { useEffect, useContext, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import TaskSnippet from './TaskSnippet';
import mark from '../../Images/mark.svg';
import focus from '../../Images/focus.svg';
import target from '../../Images/target.svg';
import sit from '../../Images/sit.svg';
import { DoggoContext } from '../../DoggoContext';
import tasks from '../../trainingdata.js';

const images = [[mark, focus, target, sit]];

const serverReponseMockData = {
  unit: 1,
  unit_title: 'Unit One',
  task: 1,
};
const Training = props => {
  const {
    setCurrentUser,
    currentUser,
    currentPet,
    setCurrentPet,
    currentProgress,
    setCurrentProgress,
  } = useContext(DoggoContext);

  setCurrentProgress(serverReponseMockData);

  const [unitTitle, setUnitTitle] = useState('');
  const [unitData, setUnitData] = useState('');
  const [imgData, setImgData] = useState('');

  // function updateImages() {
  //   setUnitData(oldData => {
  //     if (oldData.length) {
  //       console.log('THIS IS OLD DATA', oldData);
  //       const data_with_images = oldData.map((task, i) => {
  //         return { ...task, image: images[currentProgress.unit - 1][i] };
  //       });
  //       console.log('images ', data_with_images);
  //       return data_with_images;
  //     }
  //   });
  // }

  useEffect(() => {
    console.log('THIS ARE THE IMAGES', images);
    setImgData(images);
    if (currentProgress) {
      console.log(
        'THIS IS THE UNIT',
        tasks[currentProgress.unit - 1].unit_title
      );
      console.log(
        'THIS IS THE UNIT DATA',
        tasks[currentProgress.unit - 1].tasks
      );
      setUnitTitle(tasks[currentProgress.unit - 1].unit_title);
      setUnitData(tasks[currentProgress.unit - 1].tasks);
      // updateImages();
    }
  }, []);

  // useEffect(() => {}, []);

  return (
    <div className="training">
      <div className="unit">
        <h1> {unitTitle ? unitTitle : ''} </h1>
      </div>
      <div className="tasks">
        {imgData.length && unitData.length
          ? unitData.map((taskData, i) => (
              <TaskSnippet
                key={i}
                unitData={taskData}
                order={i}
                imgData={imgData}
              />
            ))
          : ''}
      </div>

      <Link to="/task">
        <button className="start-lesson next">Start Lesson</button>
      </Link>
    </div>
  );
};

export default Training;
