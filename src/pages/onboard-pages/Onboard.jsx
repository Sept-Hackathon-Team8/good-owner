import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DoggoContext } from '../../DoggoContext';
import OnboardHeader from '../../components/headers/OnboardHeader';
import OnboardNextButton from '../../components/next-buttons/OnboardNextButton';
import { createPet, getBreeds } from '../../services/auth';
import './Onboard.css';
import img1 from '../../Images/OnboardGroup.svg';
import breedImg from '../../Images/Onboard6.svg';
import senior from '../../Images/Onboard5.svg';
import adult2 from '../../Images/Onboard4.svg';
import adult from '../../Images/Onboard3.svg';
import puppy from '../../Images/Onboard2.svg';
import img2 from '../../Images/Onboard1.svg';

const Onboard = props => {
  const [breeds, setBreeds] = useState(null);

  const fetchBreeds = async () => {
    const res = await getBreeds();
    setBreeds(
      res
        .map(({ name, id, parent, img_url }) => {
          return {
            name: `${parent ? parent.name + ' ' : ''}${name}`,
            id,
            img_url,
          };
        })
        .sort((a, b) => a.name.codePointAt() - b.name.codePointAt())
        .map(({ name, id, img_url }, i) => {
          return {
            name: name
              .split(' ')
              .map(n => n[0].toUpperCase() + n.slice(1))
              .join(' '),
            id,
            img_url,
          };
        })
    );
  };

  useEffect(() => {
    fetchBreeds();
  }, []);

  const { currentPet, setCurrentPet } = useContext(DoggoContext);

  const [petData, setPetData] = useState({
    name: '',
    breed: '',
    age: '',
  });

  const { name, breed, age } = petData;

    // const handleClick = (e) => {
    //   e.preventDefault();
    //   setCount(count + 1);
    // };

  const handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    setPetData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const [count, setCount] = useState(0);
  const ageOptions = ['< 1', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, '13+'];

  const handleCreatePet = async e => {
    e.preventDefault();
    const pet = await createPet(petData);
    setCurrentPet(pet);
    setCount(count + 1);
  };
  // console.log(breeds)
  const switchScreen = () => {
    switch (count) {
      case 0:
        return (
          <div>
            <div className="first-container onboard-text-small">
              First thing's
              <br />
              first! Let's...
            </div>
            <div id="logyourdog" className="onboard-text-bold">
              LOG
              <br />
              YOUR
              <br />
              DOG
            </div>
          </div>
        );
      case 1:
        return (
          <div>
            <div>
              <div className="dog-name onboard-text-small">
                What is your <br /> dog's name?
              </div>
            </div>
            <div className="name-form">
              <img className="img1" alt="dog group" src={img1} />
              <div className="name-input-container">
                <input
                  value={name}
                  className="dog-name-input"
                  placeholder="Dog name?"
                  type="text"
                  name="name"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <>
            <div>
              <h2 id="name" className="onboard-text-bold">
                Hi {name}!{/* <img></img> */}
              </h2>
              <img alt="dog" src={img2} />
              <div className="onboard-text-small love-you">
                We just met you <br /> and we love you.
              </div>
            </div>
          </>
        );
      case 3:
        return (
          <>
            <div className="bold-container">
              If we may be so <br />bold, how old is <br />
            </div>
            <h2 className="name-two onboard-text-bold ">
              {name ? name : 'no name showing'}?
            </h2>
            <div className="dropdown-container">
              <div className="age-dropdown">
                <select
                  className="select-age"
                  name="age"
                  type="text"
                  value={age}
                  onChange={handleChange}
                >
                  <option value="">How old is your dog?</option>
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
            </div>
          </>
        );
      case 4:
        return (
          <div>
            <div className="onboard-age">
              {/* <img src="nothing.png">insert image</img> */}
              {age > 10 ? (
                <>
                  <div className="onboard-text-bold">
                    {name ? name : 'no name showing'} <span className="un-bold">is {age}?!</span>
                  </div>
                  <img className="age-image" src={senior} alt="senior dog" />
                  <span className="onboard-text-small">
                    That's {age * 7} in dog <br />years! You CAN <br />teach an old dog <br />new tricks!
                  </span>
                </>
                ) : age > 6 ? (
                <>
                  <div className="onboard-text-bold">
                    {name ? name : 'no name showing'} <span className="un-bold">is {age}?!</span>
                  </div>
                  <img className="age-image" src={adult2} alt="adult dog" />
                  <span className="onboard-text-small">
                    That's {age * 7} in dog <br />years! Middle <br />aged never <br />looked so
                    good!
                  </span>
                </>
              ) : age >= 2 ? (
                <>
                  <div className="onboard-text-bold">
                    {name ? name : 'no name showing'} <span className="un-bold">is {age}?!</span>
                  </div>
                  <img className="age-image" src={adult} alt="adult dog" />
                  <span className="onboard-text-small">
                    That's {age * 7} in dog <br />years! Look at <br />you all grown up!
                  </span>
                </>
              ) : (
                <>
                  <div className="onboard-text-bold">
                    {name ? name : 'no name showing'} <span className="un-bold">is a puppy?!</span>
                  </div>
                  <img className="age-image" src={puppy} alt="puppy dog" />
                  <span className="onboard-text-small">So many years of <br />tricks and treats <br />ahead of them!</span>
                </>
              )}
            </div>
          </div>
        );
      case 5:
        return (
          <div >
            <div className="breed-question onboard-text-small">
              I love that look! <br />What breed is
              <br />
              <span className="onboard-text-bold">{name}?</span>
            </div>
            <div className="dropdown-container">
              <div className="breed-dropdown">
                <select
                  className="select-breed"
                  name="breed"
                  type="text"
                  onChange={handleChange}
                >
                  <option value="">Select your dog's breed</option>
                  {breeds.map(({ name, id }, i) => {
                    return (
                      <option key={i} value={id}>
                        {name}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
          </div>
        );
      case 6:
        return (
          <>
            {currentPet & breeds ? (
              <div>
                <div>
                  <div className="onboard-text-bold">
                    {breeds.filter((b) => b.id === currentPet.breed).pop().name}
                    {
                      breeds.filter((b) => b.id === currentPet.breed).pop()
                        .img_url
                    }
                  </div>
                  <img
                    src={
                      breeds.filter((b) => b.id === currentPet.breed).pop()
                        .img_url
                    }
                    className="breed-image"
                    alt="dog"
                  />

                  <p>{currentPet.age}</p>
                </div>
              </div>
            ) : (
              <div>
                <div className="onboard-text-bold">
                  {breeds.filter((b) => b.id === breed).pop().name}!
                </div>
                <img
                  className="breed-image"
                  style={{ maxWidth: "80vw" }}
                  src={breeds.filter((b) => b.id === breed).pop().img_url}
                  alt={breeds.filter((b) => b.id === breed).pop().name}
                />
                <div className="breed-love onboard-text-small">
                  We LOVE them!! <br />
                  This is going to <br />
                  be fun.
                  <br />
                </div>
                {/* <h3>{name}</h3>
                <p>{age}</p> */}
              </div>
            )}
          </>
        );
      case 7:
        return (
          <div className="message-container">
            <div className="onboarding-message">
              <div className="onboard-text-super-small">
                We here at Doggo truly believe that there are no bad dogs, but
                there are inexperienced pet parents. Follow our lead because
              </div>
              <div className="name-three onboard-text-bold">{name}</div>
              <div className="onboard-text-super-small">
                deserves the best version of you! By the end of our program, we
                promise that you will be the calm, confident owner you've always
                wanted to be.
              </div>
            </div>
          </div>
        );
      default:
      // do nothing
    }
  };

  return (
    <div className="onboard-container">
      <OnboardHeader />

      <div className="onboard-body">
        {switchScreen(count)}
        {count === 6 ? (
          <button className="log-dog-button" onClick={handleCreatePet}>
            Next
          </button>
        ) : count === 7 ? (
          <Link to="/home">
            <button className="next">Next</button>
          </Link>
        ) : (
          <OnboardNextButton count={count} setCount={setCount} />
        )}
      </div>
    </div>
  );
};

export default Onboard;
