import React, { useState, useEffect, useCallback } from 'react';
import { Route, Switch } from 'react-router-dom';
import { DoggoContext } from './DoggoContext';
import LandingPage from './pages/landing-page/LandingPage';
import RegisterPage from './pages/register-page/RegisterPage';
import HomePage from './pages/home-page/HomePage';
import LoginPage from './pages/login-page/LoginPage';
import Task from './pages/task-page/Task';
import Feedback from './pages/feedback-pages/Feedback';
import Treat from './pages/feedback-pages/Treat';
import Advice from './pages/feedback-pages/Advice';
import Onboard from './pages/onboard-pages/Onboard';
import './App.css';
import tasksData from './trainingdata';
import { getPet } from './services/auth';

// This is meant to be coming from the Journey model in the backend
// TODO: There should be one more step of choosing which pet are you choosing a journey for
const journeyMockData = {
  unit: 1,
  task: 1,
  // pet_id: null, this pet id should come from getting the journey via pet_id in the useEffect below
};

const mockFeedbackDataObj = [
  // unit 1
  [
    { ruff: 0, great: 1 },
    { ruff: 1, great: 0 },
    { ruff: 0, great: 1 },
    { ruff: 0, great: 1 },
  ],
  // unit 2
  [
    { ruff: 0, great: 0 },
    { ruff: 0, great: 0 },
    { ruff: 0, great: 0 },
    { ruff: 0, great: 0 },
  ],
  // unit 3
  [
    { ruff: 0, great: 0 },
    { ruff: 0, great: 0 },
    { ruff: 0, great: 0 },
    { ruff: 0, great: 0 },
  ],
  // unit 4
  [
    { ruff: 0, great: 0 },
    { ruff: 0, great: 0 },
    { ruff: 0, great: 0 },
    { ruff: 0, great: 0 },
  ],
];

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [currentPet, setCurrentPet] = useState(null);
  // Current progress should also be a server response currently using journeyMockData
  const [currentProgress, setCurrentProgress] = useState(journeyMockData);
  // taskData will be a server response, currently hard coded in trainingdata.js
  const [tasks, setTasks] = useState(
    ['0 Unit - shift index'].concat(tasksData)
  );
  const [mockFeedbackData, setMockFeedbackData] = useState(mockFeedbackDataObj);

  const getPets = useCallback(async () => {
    const pets = await getPet();
    console.log(pets);
    if (pets.length) {
      setCurrentPet(pets[0]);
      setCurrentProgress(progress => ({ ...progress, pet_id: pets[0].id }));
    }
  }, []);

  // TODO: this will be the same as above but will run after currentPet is available most likely in its own useEffect hook
  // const getJourney = null

  useEffect(() => {
    // TODO: Currently we will use the first pet until we create a menu to select the journey for specific pet, change when that feature is added
    getPets();
    // TODO: After getting the pet id, we should request its respective Journey obejct (journeyMockData)
  }, [getPets]);

  return (
    <DoggoContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        currentPet,
        setCurrentPet,
        currentProgress,
        setCurrentProgress,
        tasks,
        setTasks,
        // TODO: replace mockFeedbackData with an API call in Training.jsx
        mockFeedbackData,
        setMockFeedbackData,
      }}
    >
      <div className="App">
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/task">
            <Task />
          </Route>
          <Route path="/feedback">
            <Feedback />
          </Route>
          <Route path="/treat">
            <Treat />
          </Route>
          <Route path="/advice">
            <Advice />
          </Route>
          <Route path="/Onboard">
            <Onboard />
          </Route>
        </Switch>
      </div>
    </DoggoContext.Provider>
  );
}

export default App;
