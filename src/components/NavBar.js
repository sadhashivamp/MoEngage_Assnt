import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export const NavBar = () => {
  return (
    <div className="Container">
      <span className="logo">Anime</span>
      <ul className="links">
        <Link className="links-1" to="/login">
          Login
        </Link>
        <Link className="links-1" to="/signin">
          Signin
        </Link>
      </ul>
    </div>
  );
};
