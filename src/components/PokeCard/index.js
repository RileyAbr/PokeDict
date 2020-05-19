import React from "react";

import "./styles.css";

function PokeCard(props) {
  return (
    <div className="card-container">
      <h2 className="card-name">{props.name}</h2>
      <img src={props.image} alt={props.name} />
      <div>
        <span>{props.types[0]}</span>
        &nbsp;
        <span>{props.types[1]}</span>
      </div>
    </div>
  );
}

export default PokeCard;
