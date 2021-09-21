import React from "react";

const LoginPage = () => {
  return (
    <div className="login-page-containter">
      <div className="login-form-container">
        <h2>Login</h2>
        <form className="login-form"
        >
          <div classname="login-username">
            <label>Username:
              <input
                type="text"
                // value=
                name="username"
                // onChange=
              />
            </label>
          </div>
          <div className="password-username">
            <label>Password:
              <input
                type="password"
                // value=
                name="password"
                // onChange=
              />
            </label>
          </div>
          <button className="login-button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;