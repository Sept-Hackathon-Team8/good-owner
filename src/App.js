import React, { useState, useEffect, useCallback } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
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
import HomeHeader from './components/headers/HomeHeader';

// This is meant to be coming from the Journey model in the backend
// TODO: There should be one more step of choosing which pet are you choosing a journey for
// const journeyMockData = {
//   unit: 1,
//   task: 1,
//   // pet_id: null, this pet id should come from getting the journey via pet_id in the useEffect below
// };

const mockFeedbackDataObj = [
  // unit 1
  [
    { ruff: 0, great: 4 },
    { ruff: 1, great: 2 },
    { ruff: 0, great: 1 },
    { ruff: 0, great: 3 },
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
  const [loggedIn, setLoggedIn] = useState(null);
  // Current progress should also be a server response currently using journeyMockData
  const [currentProgress, setCurrentProgress] = useState({});
  const [activeUnit, setActiveUnit] = useState({});
  // taskData will be a server response, currently hard coded in trainingdata.js
  const [tasks, setTasks] = useState(tasksData);
  const [mockFeedbackData, setMockFeedbackData] = useState(mockFeedbackDataObj);

  return (
    <DoggoContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        currentPet,
        setCurrentPet,
        currentProgress,
        activeUnit,
        setActiveUnit,
        setCurrentProgress,
        tasks,
        setTasks,
        // TODO: replace mockFeedbackData with an API call in Training.jsx
        mockFeedbackData,
        setMockFeedbackData,
        setLoggedIn,
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
          <Route path="/onboard">
            <Onboard />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
        </Switch>
        {/* The route below uses regex to reject all routes in the Switch above as a match */}
        {/* <Route
          path={new RegExp('^/(?!(login|onboard|register|$)).*$')}
          component={HomeHeader}
        /> */}
        <Route path={new RegExp('^/(?!(login|onboard|register|$)).*$')}>
          {!loggedIn ? <Redirect to="/login" /> : <HomeHeader />}
        </Route>
        <Switch>
          <Route path="/home">
            <HomePage />
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
        </Switch>
      </div>
    </DoggoContext.Provider>
  );
}

export default App;
