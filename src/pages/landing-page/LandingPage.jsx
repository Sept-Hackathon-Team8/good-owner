import React from "react";
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

const LandingPage = (props) => {
  
  return (
    <div className="landing-page-container">
      <h1>This is the Landing Page</h1>
      <div>
        <span>Don't have an account?</span>
        <Link to="/register">
          <button className="register-button">Become a Good Owner Today</button>
        </Link>
      </div>
      <div>
        <span>Already a Good Owner?</span>
        <Link to="/login">
          <button className="login-button">Sign in</button>
        </Link>
      </div>
    </div>
  )
};

export default LandingPage;