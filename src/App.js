import React, { useState } from 'react';
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

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [currentPet, setCurrentPet] = useState(null);
  const [currentProgress, setCurrentProgress] = useState(null);

  return (
    <DoggoContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        currentPet,
        setCurrentPet,
        currentProgress,
        setCurrentProgress,
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
