import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="login">
      <header className="login-header">
        <form>
          <h2> Login Form </h2>
          <hr />
          <br />

          <label style={{ float: "left", fontSize: "20px" }}>Email:</label>
          <br />
          <input
            type="email"
            value={email}
            placeholder="Enter Your Email"
            required
            onChange={(e) => {
              handleEmailChange(e);
            }}
          />
          <br />

          <label style={{ float: "left", fontSize: "20px" }}>Password:</label>
          <br />
          <input
            type="password"
            value={password}
            placeholder="Enter Your Password"
            required
            onChange={(e) => {
              handlePasswordChange(e);
            }}
          />
          <br />
          <NavLink to="/searchanime">
            <button type="submit">Login</button>
          </NavLink>
        </form>
      </header>
    </div>
  );
}

export default Login;
