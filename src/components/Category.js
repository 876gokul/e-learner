import React from "react";
import Button from "./Button";
function Category({ handleChange }) {
  const category = ["Developement", "Design", "Marketing", "Business", "Music"];
  return (
    <div className="container">
      <h1>Explore</h1>
      <hr />
      <div className="my-btn-group">
        {category.map((data, index) => (
          <Button
            key={index}
            data={data}
            id={index}
            handleChange={handleChange}
          />
        ))}
        <i
          className="fas fa-times"
          onClick={(e) => {
            handleChange(e);
          }}
        ></i>
      </div>
    </div>
  );
}

export default Category;
