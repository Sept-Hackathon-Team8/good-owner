import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./pages/landing-page/LandingPage";
import RegisterPage from "./pages/register-page/RegisterPage";
import HomePage from "./pages/home-page/HomePage";
import LoginPage from "./pages/login-page/LoginPage";
import { getBreeds } from "./services/breeds";
import Task from "./pages/task-page/Task";
import Feedback from "./pages/feedback-pages/Feedback";
import Treat from "./pages/feedback-pages/Treat";
import Advice from "./pages/feedback-pages/Advice";
import Onboard from "./pages/onboard-pages/Onboard";
import './App.css';


function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    fetchBreeds();
  }, []);

  const fetchBreeds = async () => {
    const res = await getBreeds();
    setBreeds(res);
  };

  console.log(breeds);


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
        <Route path="/feedback">
          <Feedback currentUser={ currentUser } setCurrentUser={ setCurrentUser } />
        </Route>
        <Route path="/treat">
          <Treat currentUser={ currentUser } setCurrentUser={ setCurrentUser } />
        </Route>
        <Route path="/advice">
          <Advice currentUser={currentUser} setCurrentUser={setCurrentUser} />
        </Route>
        <Route path="/Onboard">
          <Onboard breeds={breeds} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
