import React from "react";
import "./card.css";
function Button({ handleChange, data }) {
  return (
    <div
      className="my-btn"
      onClick={(e) => {
        handleChange(e);
      }}
    >
      {data}
    </div>
  );
}

export default Button;
