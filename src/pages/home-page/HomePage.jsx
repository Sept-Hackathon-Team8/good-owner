import React from "react";
import Training from "../../components/training/Training";
import HomeHeader from "../../components/headers/HomeHeader";
import tasksData from "../../trainingdata";

const HomePage = (props) => {
  const { currentProgress, setCurrentProgress } = props;
  console.log(tasksData)

  return (
    <div className="homepage-container">
      <HomeHeader />
      <Training />
    </div>
  );
};

export default HomePage;