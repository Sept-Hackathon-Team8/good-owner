import React from "react";
import OnboardHeader from "../headers/OnboardHeader";

const OnboardLayout = (props) => {
  return (
    <div className="onboard-layout">
      <OnboardHeader />
      <div className="layout-children">
        {props.children}
      </div>
    </div>
  );
};

export default OnboardLayout;