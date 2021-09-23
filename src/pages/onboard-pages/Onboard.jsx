import React, { useState, useContext, useEffect } from 'react';
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
              <form>
                <div className="age-dropdown">
                  <select
                    name="age"
                    type="text"
                    value={age}
                    onChange={handleChange}
                  >
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
              </form>
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
            {currentPet ? (
              <div>
                <p>{currentPet.name}</p>
                <p>{currentPet.breed}</p>
                <p>{currentPet.age}</p>
              </div>
            ) : (
              <>
                <div className="onboard-text-small">
                  I love that look! What breed is
                  <br />
                  <span className="onboard-text-bold">{name}</span>
                </div>
                <div className="dropdown-container">
                  <form>
                    <select
                      name="breed"
                      type="text"
                      onChange={handleChange}
                      value={breed}
                      // value={dogBreed}
                      // onChange={(e) => setDogBreed(e.target.value)}
                    >
                      {breeds.map(({ name, id, parent }, i) => {
                        return (
                          <option key={i} value={id}>
                            {parent ? `${parent.name} ` : ''}
                            {name}
                          </option>
                        );
                      })}
                      ;
                    </select>
                    <button onClick={handleCreatePet}>Complete</button>
                  </form>
                </div>
              </>
            )}
          </>
        );
      case 6:
        return (
          <>
            <div>
              <h1>Confirmation page:</h1>
              <h3>{name}</h3>
              <p>{age}</p>
              <p>{breeds.filter(b => b.id === breed).pop().name}</p>
            </div>
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
      {count % 2 === 0 ? (
        <OnboardNextButton count={count} setCount={setCount} />
      ) : (
        ''
      )}
    </div>
  );
};

export default Onboard;
