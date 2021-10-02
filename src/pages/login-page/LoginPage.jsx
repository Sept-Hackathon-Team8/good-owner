import React from 'react';
import { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { DoggoContext } from '../../DoggoContext';
import { loginUser } from '../../services/auth';
import './LoginPage.css';
import OnboardHeader from '../../components/headers/OnboardHeader';
import api from '../../services/apiConfig';
import { useEffect } from 'react/cjs/react.development';

const LoginPage = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [errorData, setErrorData] = useState(null);

  const { setCurrentUser, currentUser, setLoggedIn } = useContext(DoggoContext);

  // const handleSubmit = async e => {
  //   e.preventDefault();
  //   const user = await loginUser({ email, password });
  //   setCurrentUser(user);
  // };

  const handleSubmit = async e => {
    e.preventDefault();
    const { is_error, data } = await loginUser({ email, password });
    if (is_error) {
      setErrorData(data);
    } else {
      setCurrentUser(data);
    }
  };

  useEffect(() => {
    if (currentUser && currentUser.key) {
      setLoggedIn(true);
      localStorage.setItem('authToken', currentUser.key);
      api.defaults.headers.common.authorization = `Token ${currentUser.key}`;
    }
  }, [currentUser]);

  if (currentUser) return <Redirect to={'/home'} />;

  return (
    <div className="login-page-containter">
      <OnboardHeader />
      <div
        style={{
          fontSize: '.8rem',
          color: 'red',
          lineHeight: '.7rem',
          backgroundColor: 'rgba(255,0,0,.2)',
          width: '100%',
          // minHeight: '50px',
        }}
      >
        {errorData !== null
          ? errorData.map((err, i) => (
              <p style={{ padding: '10px', margin: 0 }} key={i}>
                <b>{`${err[0]}; ` ? err[0] !== 'non_field_errors' : ''}</b>{' '}
                {err[1]}
              </p>
            ))
          : ''}
      </div>
      <div className="login-form-container">
        {/* <h2>Login</h2> */}
        <form onSubmit={handleSubmit} className="login-form">
          <div classname="login-email">
            {/* <label>Email:</label> */}
            <input
              type="email"
              className="login-input"
              placeholder="Email"
              value={email}
              name="username"
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="password-username">
            {/* <label>Password:</label> */}
            <input
              type="password"
              className="login-input"
              placeholder="Password"
              value={password}
              name="password"
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="login-submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
