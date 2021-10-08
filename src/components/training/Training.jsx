import React, { useEffect, useState, useContext, useCallback } from 'react';
import { DoggoContext } from '../../DoggoContext';
import TrainingUnit from './TrainingUnit.jsx';
import {
  getPet,
  updateJourney,
  getTasks,
  getPetFeedback,
} from '../../services/auth';
import ConfettiGenerator from 'confetti-js';

const Training = props => {
  const {
    currentProgress,
    setCurrentProgress,
    tasks,
    mockFeedbackData,
    setMockFeedbackData,
    setActiveUnit,
    setCurrentPet,
    setTasks,
  } = useContext(DoggoContext);

  // FeedbackData
  const getPetFeedbackData = useCallback(async petData => {
    const response = await getPetFeedback({ pet: petData.id });
    setMockFeedbackData(response.data);
  }, []);

  // Unit training data API request and state logic
  const loadUnitsData = useCallback(async () => {
    const tasksData = await getTasks();
    setTasks(tasksData);
  }, [setTasks]);

  useEffect(() => {
    loadUnitsData();
  }, [loadUnitsData]);

  // Pet and Journey data API request and state logic
  const getPets = useCallback(async () => {
    const pets = await getPet();
    if (pets && pets.length) {
      // Currently using only the first pet, change this when selecting the pet is an option
      const { journey, ...petData } = pets[0];
      setCurrentPet(petData);
      getPetFeedbackData(petData);
      setCurrentProgress({ ...journey, task: 1 });
      setActiveUnit({ ...journey, task: 1 });
      setCurrentProgress(progress => ({ ...progress, pet_id: pets[0].id }));
    }
  }, [setCurrentPet, setCurrentProgress, setActiveUnit]);

  useEffect(() => {
    // TODO: Currently we will use the first pet until we create a menu to select the journey for specific pet
    getPets();
  }, [getPets]);

  const [feedbackData, setFeedbackData] = useState([]);
  const [unitPassed, setUnitPassed] = useState(false);

  // TODO: another API call to get the feedback values for each task in order to create the circle progress UI element
  useEffect(() => {
    if (currentProgress && currentProgress.unit) {
      setFeedbackData(mockFeedbackData);
      // setFeedbackData(mockFeedbackData[currentProgress.unit - 1]);
    }
  }, [setFeedbackData, currentProgress, mockFeedbackData]);

  const moveToNextLesson = useCallback(() => {
    setUnitPassed(true);
    setCurrentProgress(progress => {
      updateJourney({ unit: progress.unit + 1 }, progress.id);
      return { ...progress, unit: progress.unit + 1 };
    });
  }, [setCurrentProgress]);

  useEffect(() => {
    if (feedbackData && feedbackData.length) {
      const unitCompleted = feedbackData[currentProgress.unit - 1]
        .map(feedback => feedback.great)
        .every(score => score > 3);
      if (unitCompleted) moveToNextLesson();
    }
  }, [feedbackData, currentProgress, moveToNextLesson]);

  React.useEffect(() => {
    if (unitPassed) {
      const confettiSettings = {
        target: 'confetti-canvas',
        respawn: false,
        clock: '100',
        rotate: true,
        max: 1000,
      };
      const confetti = new ConfettiGenerator(confettiSettings);
      confetti.render();
      setTimeout(() => setUnitPassed(false), 2000);

      return () => confetti.clear();
    }
  }, [unitPassed]); // add the var dependencies or not

  /////////////////// checking why no data is showing up delete later //////////
  // console.log(feedbackData)
  // console.log(tasks)
  ////////////////////////////////////
  return (
    <div className="training">
      {tasks && tasks.length && feedbackData && feedbackData.length
        ? tasks.map((unit, i) => {
            return (
              <TrainingUnit
                key={i}
                unitData={unit.tasks}
                unitTitle={unit.title}
                unitNum={unit.order}
                unitFeedback={feedbackData[i]}
                setActiveUnit={setActiveUnit}
                currentProgress={currentProgress}
              />
            );
          })
        : 'loading data'}

      {/* turn this button functionality into a component instead of a ternary operator */}
      <canvas
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          zIndex: -1,
        }}
        id="confetti-canvas"
      ></canvas>
    </div>
  );
};

export default Training;
