import React from 'react';
import { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { DoggoContext } from '../../DoggoContext';
import { loginUser } from '../../services/auth';
import OnboardHeader from '../../components/headers/OnboardHeader';

const LoginPage = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { setCurrentUser, currentUser } = useContext(DoggoContext);

  const handleSubmit = async e => {
    e.preventDefault();
    const user = await loginUser({ email, password });
    setCurrentUser(user);
  };
  if (currentUser) return <Redirect to={'/home'} />;

  return (
    <div className="login-page-containter">
      <OnboardHeader />
      <div className="login-form-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <div classname="login-email">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              name="username"
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="password-username">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              name="password"
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
