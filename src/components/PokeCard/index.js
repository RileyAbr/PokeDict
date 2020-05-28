import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

// Styled elements
import Type from "../../styled-elements/Type";

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
          {props.types && props.types[0] && (
            <Type typeColor={props.types[0]}>{props.types[0]}</Type>
          )}
          {props.types && props.types[1] && (
            <Type typeColor={props.types[1]}>{props.types[1]}</Type>
          )}
        </div>
      </article>
    </Link>
  );
}

export default PokeCard;
