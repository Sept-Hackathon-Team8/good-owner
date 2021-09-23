import React, { useState, useContext, useEffect } from 'react';
import { Link } from "react-router-dom";
import { DoggoContext } from '../../DoggoContext';
import OnboardHeader from '../../components/headers/OnboardHeader';
import OnboardNextButton from '../../components/next-buttons/OnboardNextButton';
import { createPet, getBreeds } from '../../services/auth';

const Onboard = props => {
  const [breeds, setBreeds] = useState([]);

  const fetchBreeds = async () => {
    const res = await getBreeds();
    setBreeds(res);
  };

  const { setCurrentUser, currentUser, currentPet, setCurrentPet } =
    useContext(DoggoContext);

  console.log('THIS IS CURRENT USER', currentUser);
  console.log('THIS IS TOKEN', localStorage.getItem('authToken'));

  const [petData, setPetData] = useState({
    name: '',
    breed: '',
    age: '',
  });

  const { name, breed, age } = petData;

  const handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    if (name === 'age') fetchBreeds();
    setPetData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const [count, setCount] = useState(0);
  const ageOptions = ['< 1', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, '13+'];

  /////// testing dog age/name below, DELETE LATER //////

  const handleCreatePet = async e => {
    e.preventDefault();
    const pet = await createPet(petData);
    console.log('this is pet', pet);
    setCurrentPet(pet);
    setCount(count + 1);
  };

  const switchScreen = () => {
    switch (count) {
      case 0:
        return (
          <>
            <div className="onboard-text-small">
              First thing's first! Let's...
            </div>
            <div className="onboard-text-bold">
              LOG
              <br />
              YOUR
              <br />
              DOG
            </div>
          </>
        );
      case 1:
        return (
          <>
            <div className="onboard-text-small">What is your dog's name?</div>
            <div className="name-form">
              <div>
                <input
                  value={name}
                  className="dog-name-input"
                  type="text"
                  name="name"
                  onChange={handleChange}
                />
              </div>
              <OnboardNextButton
                type="button"
                count={count}
                setCount={setCount}
              />
            </div>
          </>
        );
      case 2:
        return (
          <>
            <div className="onboard-text-bold">
              <h2>
                Hi {name}!{/* <img></img> */}
              </h2>
              <div className="onboard-text-small">
                We just met you and we love you.
              </div>
            </div>
          </>
        );
      case 3:
        return (
          <>
            <div>
              If we may be so bold, how old is <br />
              <span className="dog-name-bold">
                {name ? name : 'no name showing'}
              </span>
            </div>
            <div className="dropdown-container">
              <div className="age-dropdown">
                <select
                  name="age"
                  type="text"
                  value={age}
                  onChange={handleChange}
                >
                <option value="">select</option>
                  {ageOptions.map((a, i) => {
                    return (
                      <option key={i} value={i}>
                        {a}
                      </option>
                    );
                  })}
                  ;
                </select>
              </div>
              <OnboardNextButton count={count} setCount={setCount} />
            </div>
          </>
        );
      case 4:
        return (
          <>
            <div>
              <span className="onboard-text-bold">
                {name ? name : 'no name showing'}
              </span>{' '}
              is {age}?!
              {/* <img src="nothing.png">insert image</img> */}
              {age > 7 ? (
                <span>
                  That's {age * 7} in dog years! Middle aged never looked so
                  good!
                </span>
              ) : age >= 1 ? (
                <span>
                  That's {age * 7} in dog years! Look at you all grown up!
                </span>
              ) : (
                <span>So many years of tricks and treats ahead of him!</span>
              )}
            </div>
          </>
        );
      case 5:
        return (
          <>
            <div className="onboard-text-small">
              I love that look! What breed is
              <br />
              <span className="onboard-text-bold">{name}</span>
            </div>
            <div className="dropdown-container">
              <select
                name="breed"
                type="text"
                onChange={handleChange}
                value={breed}
                // value={dogBreed}
                // onChange={(e) => setDogBreed(e.target.value)}
              >
                <option value="">select</option>
                {breeds.map(({ name, id, parent }, i) => {
                  return (
                    <option key={i} value={id}>
                      {parent ? `${parent.name} ` : ""}
                      {name}
                    </option>
                  );
                })}
                ;
              </select>
              <OnboardNextButton count={count} setCount={setCount} />
            </div>
          </>
        );
      case 6:
        return (
          <>
            {currentPet ? (
              <div>
                <div>
                  <p>{currentPet.name}</p>
                  <p>
                    {breeds.filter((b) => b.id === currentPet.breed).pop().name}
                  </p>
                  <img
                    src={
                      breeds.filter((b) => b.id === currentPet.breed).pop()
                        .img_url
                    }
                    className="breed-image"
                    alt="dog-image"
                  />

                  <p>{currentPet.age}</p>
                </div>
              </div>
            ) : (
              <div>
                <h1 className="onboard-text-bold">
                  {breeds.filter((b) => b.id === breed).pop().name}!
                </h1>
                <img
                  className="breed-image"
                  styleMap={{ maxWidth: "500px" }}
                  src={breeds.filter((b) => b.id === breed).pop().img_url}
                  alt=""
                />
                <div className="onboard-text-small">
                  We love them!! This is going to be fun.
                  <br />
                </div>
                {/* <h3>{name}</h3>
                <p>{age}</p> */}
                <button onClick={handleCreatePet}>Log Pet</button>
                {/* The button triggers the event for the creation logic */}
              </div>
            )}
          </>
        );
      case 7:
        return (
          <>
            <div className="onboard-text-small">
              We here at Doggo truly believe that there are no bad dogs, but there are inexperienced pet parents. Follow our lead because<br />
              <span className="onboard-text-bold">{name}</span><br />
              deserves the best version of you! By the end of our program, we promise that you will be the calm, confident owner you've always wanted to be.
            </div>
            <Link to="/home">
              <button className="next">Get Started</button>
            </Link>
          </>
        );
      default:
      // do nothing
    }
  };
  console.log(count);

  return (
    <div>
      <OnboardHeader />

      <div className="onboard-body">{switchScreen(count)}</div>
      {count % 2 === 0 && count < 6 ? (
        <OnboardNextButton count={count} setCount={setCount} />
      ) : count === 6 ? (
        ''
      ) : (
        ''
      )}
    </div>
  );
};

export default Onboard;
