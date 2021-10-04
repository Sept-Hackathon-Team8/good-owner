import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import logo from '../../Images/Doggo.svg';

const LandingPage = props => {
  return (
    <div className="landing-page-container">
      <div className="landing">
        <div className="landing-logo-container">
          <img alt="doggo logo" src={logo} />
          <div className="landing-doggo">DOGGO</div>
        </div>
        <div className="landing-links">
          <div className="registration-container">
            {/* Don't have an account? */}
            <div className="landing-button-container">
              <Link to="/register">
                <button className="register-button">
                  Become a Good Owner Today
                </button>
              </Link>
            </div>
          </div>
          <div className="login-container">
            {/* Already a Good Owner? */}
            <div className="landing-button-container">
              <Link to="/login">
                <button className="login-button">Sign in</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
