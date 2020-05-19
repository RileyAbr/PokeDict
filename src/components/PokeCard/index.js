import React from "react";

import "./styles.css";

function PokeCard(props) {
  return (
    <article className="card-container">
      {/* Pokemon name */}
      <h2 className="card-name">{props.name}</h2>

      {/* Pokemon Sprite */}
      <img className="card-sprite" src={props.image} alt={props.name} />

      {/* Pokemon Types */}
      <div className="card-types">
        {props.types[0] != null && (
          <div className="card-type">{props.types[0]}</div>
        )}
        {props.types[1] != null && (
          <div className="card-type">{props.types[1]}</div>
        )}
      </div>
    </article>
  );
}

export default PokeCard;
