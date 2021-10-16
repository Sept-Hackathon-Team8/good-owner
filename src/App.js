import React, { useState, useEffect, useCallback } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { DoggoContext } from './DoggoContext';
import LandingPage from './pages/landing-page/LandingPage';
import RegisterPage from './pages/register-page/RegisterPage';
import HomePage from './pages/home-page/HomePage';
import LoginPage from './pages/login-page/LoginPage';
import Task from './pages/task-page/Task';
import Feedback from './pages/feedback-pages/Feedback';
import Tip from './pages/feedback-pages/Tip';
import Onboard from './pages/onboard-pages/Onboard';
import './App.css';
import HomeHeader from './components/headers/HomeHeader';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [currentPet, setCurrentPet] = useState(null);
  const [loggedIn, setLoggedIn] = useState(null);
  const [currentProgress, setCurrentProgress] = useState({});
  const [activeUnit, setActiveUnit] = useState({});
  const [tasks, setTasks] = useState(null);
  const [tipData, setTipData] = useState(null);
  const [mockFeedbackData, setMockFeedbackData] = useState(null);
  const [streak, setStreak] = useState(null);

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
        tipData,
        setTipData,
        streak,
        setStreak,
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
          <Route path="/tip">
            <Tip />
          </Route>
        </Switch>
      </div>
    </DoggoContext.Provider>
  );
}

export default App;
