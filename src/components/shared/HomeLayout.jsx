import React from "react";
import HomeHeader from "../headers/HomeHeader";

const HomeLayout = () => {
  return (
    <div className="home-layout">
      <HomeHeader />
      <div className="layout-children">
        {props.children}
      </div>
    </div>
  );
};

export default HomeLayout;