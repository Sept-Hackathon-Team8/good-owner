import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./pages/landing-page/LandingPage";
import RegisterPage from "./pages/register-page/RegisterPage";
import HomePage from "./pages/home-page/HomePage";
import LoginPage from "./pages/login-page/LoginPage";
import './App.css';

function App() {
  return (
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
      </Switch>
    </div>
  );
}

export default App;
