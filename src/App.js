import React from "react";
import { Route, Switch } from "react-router-dom";
import { useState } from 'react'
import LandingPage from "./pages/landing-page/LandingPage";
import RegisterPage from "./pages/register-page/RegisterPage";
import HomePage from "./pages/home-page/HomePage";
import LoginPage from "./pages/login-page/LoginPage";
import Task from "./pages/task/Task"
import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <LandingPage currentUser={ currentUser } setCurrentUser={ setCurrentUser } />
        </Route>
        <Route path="/register">
          <RegisterPage currentUser={ currentUser } setCurrentUser={ setCurrentUser } />
        </Route>
        <Route path="/home">
          <HomePage currentUser={ currentUser } setCurrentUser={ setCurrentUser } />
        </Route>
        <Route path="/login">
          <LoginPage currentUser={ currentUser } setCurrentUser={ setCurrentUser } />
        </Route>
        <Route path="/task">
          <Task currentUser={ currentUser } setCurrentUser={ setCurrentUser } />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
