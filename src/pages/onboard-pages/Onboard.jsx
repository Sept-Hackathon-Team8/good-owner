import React, { useState } from "react";
import OnboardHeader from "../../components/headers/OnboardHeader";
import NextButton from "../../components/next-button/NextButton";

const Onboard = () => {
  const [count, setCount] = useState(0);
  const ageOptions = ['< 1', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, '13+'];

  const switchScreen = () => {
    switch (count) {
      case 0:
        return (
          <>
            <div className="onboard-text-small">
              First thing's first! Let's...
            </div>
            <div>
              LOG<br/>
              YOUR<br/>
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
              <form
                className="dogname-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  console.log('test');
                }}
              >
                <div>
                  <input
                    className="dog-name-input"
                    type="text"
                    name="dogName"
                  />
                </div>
                <NextButton type="button" count={count} setCount={setCount} />
              </form>
            </div>
          </>
        );
      case 2:
        return (
          <>
            <div>
              If we may be so bold, how old is <br />
              <span className="dog-name-bold">****INSERT DOG NAME HERE*****?</span>
            </div>
            <div className="age-dropdown">
              <form>
                <select
                  name="dogAge"
                  type="text"
                  // value={dogAge}
                  // onChange={(e) => setDogAge(e.target.value)}
                >
                  <option value="">select</option>
                  {ageOptions.map((age, i) => {
                    return (
                      <option key={i}>{age}</option>
                    );
                  })};
                </select>
              </form>
            </div>
          </>
        );
    };
  };
  console.log(count);

  return (
    <div>
      <OnboardHeader />
      <div className="onboard-body">
        {switchScreen(count)}
      </div>
        {count % 2 === 0 ? (
          <NextButton count={count} setCount={setCount} />
        ) : (
          ''
        )}
    </div>
  );
};

export default Onboard;