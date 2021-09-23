import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router';
import { DoggoContext } from '../../DoggoContext';
import OnboardHeader from '../../components/headers/OnboardHeader';
import { registerUser } from '../../services/auth';

const RegisterPage = () => {
  const { setCurrentUser, currentUser } = useContext(DoggoContext);

  const [regData, setRegData] = useState({
    email: '',
    password1: '',
    password2: '',
  });

  const { email, password1, password2 } = regData;

  const handleChange = e => {
    const { name, value } = e.target;
    setRegData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const user = await registerUser(regData);
    console.log(user);
    setCurrentUser(user);
  };

  if (currentUser) return <Redirect to={'/onboard'} />;

  return (
    <div className="register-page-container">
      <OnboardHeader />
      <h1>Register</h1>
      <div className="register-form-container">
        <form className="register-form" onSubmit={handleSubmit}>
          <div>
            <label>
              Email:
              <input
                className="register-input"
                type="text"
                value={email}
                name="email"
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Password:
              <input
                className="register-input"
                type="password"
                value={password1}
                name="password1"
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Confirm password:
              <input
                className="register-input"
                type="password"
                value={password2}
                name="password2"
                onChange={handleChange}
              />
            </label>
            {password1 !== password2 ? (
              <p>Confirmation password does not match</p>
            ) : (
              ''
            )}
          </div>
          <button className="register-submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
