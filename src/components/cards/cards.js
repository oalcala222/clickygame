import React from "react";
import "./cards.css";

function Cards(props) {
  return (
    <div className="card" onClick={() => props.countUp(props.id)} >
      <div className="img-container">
        <img alt="" src={props.image} />
      </div>
    </div>
  );
}

export default Cards;