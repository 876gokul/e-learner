import React from "react";
import images from "../images";
import "./bootstrap.min.css";
function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
let id;
function Carousel() {
  return (
    <>
      <div className="container mt-5">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={`${images[getRandomArbitrary(18, 25)]}`}
                alt="thumbnail"
                className="w-100"
              />
            </div>
            <div className="carousel-item">
              <img
                src={`${images[getRandomArbitrary(0, 9)]}`}
                alt="thumbnail"
                className="w-100"
              />
            </div>
            <div className="carousel-item">
              <img
                src={`${images[getRandomArbitrary(9, 18)]}`}
                alt="thumbnail"
                className="w-100"
              />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </>
  );
}

export default Carousel;
