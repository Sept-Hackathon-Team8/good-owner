import React from "react";
import Training from "../../components/training/Training";
import HomeHeader from "../../components/headers/HomeHeader";

const HomePage = (props) => {
  return (
    <div className="homepage-container">
      <HomeHeader />
      <Training />
   
    </div>
  );
};

export default HomePage;