import React from "react";

import "./styles.css";

function PokeCard() {
  return (
    <div className="card-container">
      <h2>Pokemon-Name</h2>
      <img src="https://via.placeholder.com/96" alt={"pokemon-name"} />
      <div>
        <span>Type 1</span>
        <span>Type 2</span>
      </div>
    </div>
  );
}

export default PokeCard;
