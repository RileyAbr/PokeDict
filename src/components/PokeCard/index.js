import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

// Styled elements
import Types from "../../elements/Types";

function PokeCard(props) {
  return (
    <Link to={`/pokemon/${props.name}`}>
      <article className="card">
        {/* Pokemon name */}
        <h2 className="card-name">{props.name}</h2>

        {/* Pokemon Sprite */}
        <img className="card-sprite" src={props.image} alt={props.name} />

        {/* Pokemon Types */}
        <Types firstType={props.types[0]} secondType={props.types[1]} />
      </article>
    </Link>
  );
}

export default PokeCard;
