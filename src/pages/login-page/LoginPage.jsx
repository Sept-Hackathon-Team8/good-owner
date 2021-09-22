import React from "react";
import { useState } from 'react'
import { Redirect } from 'react-router-dom'
const user = {
  email: "email",
  password: "password"
}
const LoginPage = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    props.setCurrentUser(user)
    
    
  }
  if(props.currentUser) return <Redirect to={'/home'}/>

  return (
    <div className="login-page-containter">
      <div className="login-form-container">
        <h2>Login</h2>
        <form onSubmit={ handleSubmit }className="login-form">
          <div classname="login-email">
            <label>Email:</label>
              <input
                type="email"
                value={email}
                name="username"
                onChange= {e => setEmail(e.target.value)}
              />
          </div>
          <div className="password-username">
            <label>Password:</label>
              <input
                type="password"
                value={ password }
                name="password"
                onChange={ e => setPassword(e.target.value)}
              />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;