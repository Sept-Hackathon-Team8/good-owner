import React from "react";
import { Link } from "react-router-dom";
import HomeHeader from "../../components/headers/HomeHeader";
import NextButton from "../../components/next-button/NextButton";

const Advice = (props) => {
  return (
    <div className="advice-page">
      <HomeHeader />
        <h3>No worries, here are some extra tips to help you and your best friend:</h3>

      <Link to="/home">
        <NextButton />
      </Link>
    </div>
  );
};

export default Advice;