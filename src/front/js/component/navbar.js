import React from "react";
import { Link } from "react-router-dom";
import logo from "../pages/Imagenes/Logo_A.png";

export const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "#36626a" }}
    >
      <div className="navbar-brand" href="#">
        <img
          className="imagen"
          width="100px"
          height="100px"
          style={{ borderRadius: "50px" }}
          src={logo}
        ></img>
      </div>
      {/* <button
=======
      className="navbar navbar-expand-lg navbar-dark "
      style={{ backgroundColor: "#36626a" }}
    >
      <a className="navbar-brand" href="#">
        Navbar
      </a>
      <button
>>>>>>> 94f5d10bae0890717f1e81d5a69377820e36e4f2
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/register">
              registrate
            </Link>
          </li>
        </ul>
      </div> */}
    </nav>
  );
};
