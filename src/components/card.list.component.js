import React from "react";
import Card from "./card.component";
import Model from "./model";
import "./card.css";
function CardList(props) {
  return (
    <div className="container">
      <div className="inner-container">
        {props.userData.map((data, index) => (
          <Card key={index} data={data} id={data.id} />
        ))}
        {props.userData.map((data, index) => (
          <Model key={index} data={data} id={data.id} />
        ))}
      </div>
    </div>
  );
}

export default CardList;
