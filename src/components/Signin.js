import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Signin.css";

function Signin() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfPasswordChange = (e) => {
    setConfPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    if (password !== confPassword) {
      alert("password Not Match");
    } else {
      alert(
        'A form was submitted with Name :"' +
          name +
          '" ,Age :"' +
          age +
          '" and Email :"' +
          email +
          '"'
      );
    }
    e.preventDefault();
  };
  return (
    <div className="signin">
      <header className="signin-header">
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <h2> Signup Form </h2>
          <hr />
          <br />

          <label style={{ float: "left", fontSize: "20px" }}>Name:</label>
          <br />
          <input
            type="text"
            value={name}
            placeholder="Enter Your Name"
            required
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <br />

          <label style={{ float: "left", fontSize: "20px" }}>Age:</label>
          <br />
          <input
            type="text"
            value={age}
            placeholder="Enter Your Age"
            required
            onChange={(e) => {
              handleAgeChange(e);
            }}
          />
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

          <label style={{ float: "left", fontSize: "20px" }}>
            Confirm Password:
          </label>
          <br />
          <input
            type="password"
            value={confPassword}
            placeholder="Confirm Your Password"
            required
            onChange={(e) => {
              handleConfPasswordChange(e);
            }}
          />
          <br />
          <Link to="/login">
            <input className="submit" type="submit" value="Submit" />
          </Link>
        </form>
      </header>
    </div>
  );
}

export default Signin;
