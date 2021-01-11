import React from "react";
import "./bootstrap.min.css";
import "./Authmodal.css";

function Authmodal() {
  const container = document.getElementById("container");
  return (
    <>
      <div
        className="modal fade"
        id="Authmodal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="Authmodal"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body m-0 p-0 d-flex justify-content-center align-items-center">
              <button
                type="button"
                className="text-white"
                data-dismiss="modal"
                aria-label="Close"
              >
                Close
              </button>
            </div>
            <div className="modal-body" role="document">
              <div className="Auth-container mx-auto" id="container">
                <div className="form-container sign-up-container">
                  <form action="">
                    <h1>Create Account</h1>
                    <div className="social-container">
                      <a href="" className="social">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="" className="social">
                        <i className="fab fa-google-plus-g"></i>
                      </a>
                      <a href="" className="social">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </div>
                    <span>or use your email for registration</span>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button>Sign Up</button>
                  </form>
                </div>
                <div className="form-container sign-in-container">
                  <form action="">
                    <h1>Sign in</h1>
                    <div className="social-container">
                      <a href="" className="social">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="" className="social">
                        <i className="fab fa-google-plus-g"></i>
                      </a>
                      <a href="" className="social">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </div>
                    <span>or use your account</span>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <a href="">Forgot your password?</a>
                    <button>Sign In</button>
                  </form>
                </div>
                <div className="overlay-container">
                  <div className="overlay">
                    <div className="overlay-panel overlay-left">
                      <h1>Welcome Back!</h1>
                      <p>
                        To keep connected with us please login with your
                        personal info
                      </p>
                      <button
                        className="ghost"
                        id="signIn"
                        onClick={() => {
                          container.classList.remove("right-panel-active");
                        }}
                      >
                        Sign In
                      </button>
                    </div>
                    <div className="overlay-panel overlay-right">
                      <h1>Hello, Friend!</h1>
                      <p>
                        Enter your personal details and start journey with us
                      </p>
                      <button
                        className="ghost"
                        id="signUp"
                        onClick={() => {
                          container.classList.add("right-panel-active");
                        }}
                      >
                        Sign Up
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Authmodal;
