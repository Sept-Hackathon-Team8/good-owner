import React from "react";
import { Link } from "react-router-dom";
import HomeHeader from "../../components/headers/HomeHeader";
import NextButton from "../../components/next-button/NextButton";

const Task = (props) => {
  return (
    <div className="task-page">
      <HomeHeader />
      <h1>Task 1</h1>
      <img alt="image" src=""/>
      <p> Instructions</p>
      <Link to="/feedback">
        <NextButton />
      </Link>
    </div>
  );
};

export default Task;