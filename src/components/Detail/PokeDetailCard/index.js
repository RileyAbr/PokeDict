import React from "react";

import "./styles.css";

function PokeDetailCard(props) {
  return (
    <div className="detail-card">
      <div className="detail-card-header">
        <div>
          <h2 className="detail-card-name">{props.name}</h2>
          <h3 className="detail-card-id">#{props.id}</h3>
        </div>
        <div>
          {/* TODO: Reading just props.types works, but if you try to access the types with [0] or .map(), it says it is undefined? */}
          {props.types}

          {/* {props.types[0] != null && <div className="a">{props.types[0]}</div>}
            {props.types[1] != null && <div className="a">{props.types[1]}</div>} */}
        </div>
      </div>
      <img src={props.image} alt={props.name} />
    </div>
  );
}

export default PokeDetailCard;
