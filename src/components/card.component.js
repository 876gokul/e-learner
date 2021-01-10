import React from "react";
import images from "../images";
import "./card.css";
function Card(props) {
  return (
    <div className="my-card">
      <img
        src={`${images[props.id]}`}
        alt="thumbnail"
        className="my-card-image"
      />
      <div className="content">
        <h5 className="my-card-title">{props.data.Name}</h5>
        <p className="my-card-description">
          {props.data.Description.substring(0, 185)}....
        </p>
        <p className="flex-container">
          <i className="fas fa-star"></i>
          <span className="rating">{props.data.Rating}</span>
        </p>
        <h5 className="author">{props.data["Course provider"]}</h5>
        <div
          className="my-btn"
          data-toggle="modal"
          data-target={`#${props.id}`}
        >
          More Info
        </div>
      </div>
    </div>
  );
}

export default Card;
