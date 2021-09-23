import React, { useState } from "react";

const RegisterPage = () => {
  const [regData, setRegData] = useState({
    username: "",
    email: "",
    password: "",
    dogName: "",
    dogAge: "",
    dogBreed: "",
  });

  const { username, email, password } = regData

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {

  }

  console.log(regData);
  return (
    <div className="register-page-container">
      <h1>Register</h1>
      <div className="register-form-container">
        <form
          className="register-form"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(regData);
          }}
        >
          <div>
            <label>
              Username:
              <input
                className="register-input"
                type="text"
                value={username}
                name="username"
                onChange={handleChange}
              />
            </label>
          </div>
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
                value={password}
                name="password"
                onChange={handleChange}
              />
            </label>
          </div>
          <button className="register-submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;