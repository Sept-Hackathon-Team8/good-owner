import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router';
import { DoggoContext } from '../../DoggoContext';
import OnboardHeader from '../../components/headers/OnboardHeader';
import { registerUser } from '../../services/auth';
import './RegisterPage.css';

const RegisterPage = () => {
  const { setCurrentUser, currentUser } = useContext(DoggoContext);

  const [errorData, setErrorData] = useState(null);
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
    const { is_error, data } = await registerUser(regData);
    if (is_error) {
      setErrorData(data);
    } else {
      setCurrentUser(data);
    }
  };

  if (currentUser) return <Redirect to={'/onboard'} />;

  return (
    <div className="register-page-container">
      <OnboardHeader />
      <div
        style={{
          fontSize: '.8rem',
          color: 'red',
          lineHeight: '.7rem',
          backgroundColor: 'rgba(255,0,0,.2)',
          width: '100%',
        }}
      >
        {errorData !== null
          ? errorData.map((err, i) => (
              <p key={i}>
                <b>{err[0]}:</b> {err[1]}
              </p>
            ))
          : ''}
      </div>
      {/* <h1>Register</h1> */}
      <div className="register-form-container">
        <form className="register-form" onSubmit={handleSubmit}>
          <div className="email-input">
            <label>
              {/* Email: */}
              <input
                className="register-input"
                placeholder="Email"
                type="text"
                value={email}
                name="email"
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="password-input">
            <label>
              {/* Password: */}
              <input
                className="register-input"
                placeholder="Password"
                type="password"
                value={password1}
                name="password1"
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="password-input">
            <label>
              {/* Confirm password: */}
              <input
                className="register-input"
                placeholder="Re-type Password"
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
          <button className="register-submit">Create Account</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
