import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

function PokeCard(props) {
  return (
    <Link to={`/pokemon/${props.name}`}>
      <article className="card">
        {/* Pokemon name */}
        <h2 className="card-name">{props.name}</h2>

        {/* Pokemon Sprite */}
        <img className="card-sprite" src={props.image} alt={props.name} />

        {/* Pokemon Types */}
        <div className="card-types">
          {props.types && <div className="card-type">{props.types[0]}</div>}
          {props.types && <div className="card-type">{props.types[1]}</div>}
        </div>
      </article>
    </Link>
  );
}

export default PokeCard;
