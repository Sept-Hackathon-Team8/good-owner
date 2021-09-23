import React, { useState } from "react";
import OnboardHeader from "../../components/headers/OnboardHeader";
import NextButton from "../../components/next-button/NextButton";

const Onboard = () => {
  const [count, setCount] = useState(0);

  const switchScreen = () => {
    switch (count) {
      case 0:
        return (
          <>
            <div className="onboard-text-small">
              First thing's first! Let's...
            </div>
            <div>
              LOG<br />
              YOUR<br />
              DOG
            </div>
          </>
        );
      case 1:
        return (
          <>
            <div className="onboard-text-small">
              What is your dog's name?
            </div>
            <div className="name-form">

            </div>
          </>
        );
    }
  }
  console.log(count);

  return (
    <div>
      <OnboardHeader />
      <div className="onboard-body">
        {switchScreen(count)}
      </div>
      <NextButton count={count} setCount={setCount} />
    </div>
  );
};

export default Onboard;