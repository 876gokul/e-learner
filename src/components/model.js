import React from "react";
import images from "../images";
import "./bootstrap.min.css";

function Model(props) {
  return (
    <>
      <div
        className="modal fade"
        id={`${props.id}`}
        tabIndex="-1"
        role="dialog"
        aria-labelledby={`${props.id}`}
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <button
              type="button"
              className="close ml-auto mr-1"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <div className="model-my-img mx-auto my-1">
              <img
                src={`${images[props.id]}`}
                alt="thumbnail"
                className="my-card-image"
              />
            </div>
            <div className="modal-header">
              <h5 className="modal-title" id={`${props.id}`}>
                {props.data.Name}
              </h5>
            </div>
            <div className="modal-body">
              <p>Students Enrolled : {`${props.data.Enrollment}`}</p>
              {props.data.Description} <br />
              <br />
              <p className="flex-container">
                <i className="fas fa-star fa-lg"></i>
                <span className="rating">{props.data.Rating}</span>
              </p>
              <h5 className="author">{props.data["Course provider"]}</h5>
              <p>Price : &#8377;{`${props.data.Price}`}</p>
              <strong>Discount : {`${props.data.Discount}`}</strong> <br />
              <div
                className="btn btn-large btn-outline-success w-100 mt-4"
                data-dismiss="modal"
                onClick={() => {
                  alert("You have Enrolled successfully");
                }}
              >
                Enroll Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Model;
