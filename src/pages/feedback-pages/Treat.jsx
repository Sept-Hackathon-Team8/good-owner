import React from "react";
import { Link } from "react-router-dom";
import HomeHeader from "../../components/headers/HomeHeader";
import NextButton from "../../components/next-button/NextButton";

const Treat = (props) => {
  return (
    <div className="treat-page">
      <HomeHeader />
      <h2>What a good doggo! Here's a treat!</h2>
      <img alt="image" src=""/>
      <Link to="/home">
        <NextButton />
      </Link>
    </div>
  );
};

export default Treat;