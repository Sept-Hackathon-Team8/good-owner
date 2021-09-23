import React, { useState } from "react";
import OnboardHeader from "../../components/headers/OnboardHeader";
import OnboardNextButton from "../../components/next-buttons/OnboardNextButton";

const Onboard = (props) => {
  const [count, setCount] = useState(0);
  const { breeds } = props;
  const breedNames = breeds.map((breed) => breed.name);
  const ageOptions = ['< 1', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, '13+'];

  /////// testing dog age/name below, DELETE LATER //////
  const dogAge = '< 1'
  const dogName = "Ralph"

  const switchScreen = () => {
    switch (count) {
      case 0:
        return (
          <>
            <div className="onboard-text-small">
              First thing's first! Let's...
            </div>
            <div className="onboard-text-bold">
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
                <OnboardNextButton type="button" count={count} setCount={setCount} />
              </form>
            </div>
          </>
        );
      case 2:
        return (
          <>
            <div className="onboard-text-bold">
              Hi {dogName}!
              {/* <img></img> */}
              <div className="onboard-text-small">We just met you and we love you.</div>
            </div>
          </>
        );
      case 3:
        return (
          <>
            <div>
              If we may be so bold, how old is <br />
              <span className="dog-name-bold">****INSERT DOG NAME HERE*****?</span>
            </div>
            <div className="dropdown-container">
              <form>
                <div className="age-dropdown">
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
                      )
                    })};
                  </select>
                </div>
                <OnboardNextButton count={count} setCount={setCount}/>
              </form>
            </div>
          </>
        );
      case 4:
        return (
          <>
            <div>
              <span className="onboard-text-bold">*****INSERT DOG NAME*****</span> is {dogAge}?!
              {/* <img src="nothing.png">insert image</img> */}
              {dogAge > 7
                ? <span>That's {dogAge * 7} in dog years! Middle aged never looked so good!</span>
                : (dogAge >= 1
                  ? <span>That's {dogAge * 7} in dog years! Look at you all grown up!</span>
                  : <span>So many years of tricks and treats ahead of him!</span>
                )
              }
            </div>
          </>
        );
      case 5:
        return (
          <>
            <div className="onboard-text-small">
              I love that look! What breed is
              <br />
              <span className="onboard-text-bold">Ralph?</span>
            </div>
            <div className="dropdown-container">
              <form>
                <select
                  name="dogBreed"
                  type="text"
                  // value={dogBreed}
                  // onChange={(e) => setDogBreed(e.target.value)}
                >
                  <option value="">select</option>
                  {breedNames.map((breedName, i) => {
                    return <option key={i}>{breedName}</option>;
                  })}
                  ;
                </select>
                <OnboardNextButton count={count} setCount={setCount} />
              </form>
            </div>
          </>
        );
      case 6:
        return (
          <>
            <div>
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
          <OnboardNextButton count={count} setCount={setCount} />
        ) : (
          ''
        )}

    </div>
  );
};

export default Onboard;