import React from "react";
import "./bootstrap.min.css";
function Navbar({ handleChange }) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-center">
        <a className="navbar-brand" href="#">
          E-Learner
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#my-nav"
          aria-controls="my-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="my-nav">
          <ul className="navbar-nav col-12 col-sm-2 mx-auto">
            <li className="nav-item dropdown mx-auto">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="dropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Explore
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdown">
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={(e) => {
                    handleChange(e);
                  }}
                >
                  Developement
                </a>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={(e) => {
                    handleChange(e);
                  }}
                >
                  Design
                </a>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={(e) => {
                    handleChange(e);
                  }}
                >
                  Business
                </a>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={(e) => {
                    handleChange(e);
                  }}
                >
                  Music
                </a>
              </div>
            </li>
          </ul>
          <input
            className="form-control col-12 col-sm-7 mx-auto"
            type="search"
            placeholder="search anything"
          />
          <button
            className="btn col-12 col-sm-2 mx-auto d-none d-sm-block"
            data-toggle="modal"
            data-target={`#Authmodal`}
          >
            Join Us
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
