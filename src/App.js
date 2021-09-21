import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./pages/landing-page/LandingPage";
import RegisterPage from "./pages/register-page/RegisterPage";
import HomePage from "./pages/home-page/HomePage";
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/register-page">
          <RegisterPage />
        </Route>
        <Route path="/home-page">
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
