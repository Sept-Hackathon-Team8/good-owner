import React, { useState } from "react";
import OnboardHeader from "../../components/headers/OnboardHeader";
import NextButton from "../../components/next-button/NextButton";

const Onboard = () => {
  return (
    <div>
      <OnboardHeader />

      <NextButton count={count} setCount={setCount} />
    </div>
  );
};

export default Onboard;