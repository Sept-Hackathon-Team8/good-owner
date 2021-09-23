import React from "react";
import { Link } from "react-router-dom";
import OnboardHeader from "../../components/headers/OnboardHeader";

const LandingPage = (props) => {

  return (
    <div className="landing-page-container">
      <OnboardHeader />
      <div className="landing">
        <h1>This is the Landing Page</h1>
        <div>
          Don't have an account?
          <div className="landing-button-container">
            <Link to="/register">
              <button className="register-button">
                Become a Good Owner Today
              </button>
            </Link>
          </div>
        </div>
        <div>
          Already a Good Owner?
          <div className="landing-button-container">
            <Link to="/login">
              <button className="login-button">Sign in</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;