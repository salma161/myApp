import React from "react";
import { Link, NavLink } from "react-router-dom";
import Portofolio from "./../Portofolio/Portofolio";
import Contact from "./../Contact/Contact";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-cust p-4 fixed-top ">
      <div className="container">
        <Link className="navbar-brand text-white fs-2 fw-bold" to="/">
          START FRAMEWORK
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto gap-3">
            <NavLink
              className="nav-link text-white fw-bold "
              aria-current="page"
              to="about"
            >
              ABOUT
            </NavLink>
            <NavLink className="nav-link text-white fw-bold" to="portofolio">
              PORTOFOLIO
            </NavLink>
            <NavLink className="nav-link text-white fw-bold" to="contact">
              CONTACT
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
