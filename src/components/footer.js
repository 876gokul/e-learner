import React from "react";
import "./bootstrap.min.css";
import "./footer.css";

function Footer() {
  return (
    <>
      <div className="footer-widget-area bg-dark text-light">
        <div className="conatiner">
          <div className="row w-75 mx-auto">
            <div className="col-md-4 mx-auto text-center mb-3">
              <h4>E-Learner</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                porro fugiat rerum, eligendi ducimus, cumque ad consequatur
                quisquam ea rem, voluptatum.
              </p>
              <div className="footer-social-icon"></div>
              <div className="social-title">Follow Us:</div>
              <a href="">
                <i className="fab fa-facebook-f circle-icon"></i>
              </a>
              <a href="">
                <i className="fab fa-instagram circle-icon"></i>
              </a>
              <a href="">
                <i className="fab fa-twitter circle-icon"></i>
              </a>
              <a href="">
                <i className="fab fa-linkedin-in circle-icon"></i>
              </a>
            </div>
            <div className="col-md-3 ml-auto mb-3">
              <div className="footer-widget-heading">
                <h4>Popular Courses</h4>
              </div>
              <ul className="linkediting">
                <li>
                  <a href="#">
                    <i className="fa fa-angle-right"></i> Developement
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-angle-right"></i> Design
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-angle-right"></i> Marketing
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-angle-right"></i> Business
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-angle-right"></i> Music
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 mx-auto mb-3">
              <div className="footer-widget-heading">
                <h4>Quick Links</h4>
              </div>
              <ul className="linkediting">
                <li>
                  <a href="#">
                    <i className="fa fa-angle-right"> Home</i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-angle-right"></i> About Us
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-angle-right"></i> Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
