import React from "react";

import "./styles.css";

// Styled components
import Types from "../../../elements/Types";

function PokeDetailCard(props) {
  return (
    <div className="detail-card">
      <div className="detail-card-header">
        <div>
          <h2 className="detail-card-name">{props.pokemon.name}</h2>
          <h3 className="detail-card-id">#{props.pokemon.id}</h3>
        </div>
        <Types
          firstType={props.pokemon.types[0]}
          secondType={props.pokemon.types[1]}
        />
      </div>
      <div className="detail-card-body">
        <img
          src={props.pokemon.image}
          alt={props.pokemon.name}
          className="detail-card-sprite"
        />
        <div className="detail-card-stats">
          {props.pokemon.stats &&
            Object.entries(props.pokemon.stats).map(([key, value]) => (
              <div>
                {key}: {value}
              </div>
            ))}
        </div>

        {/* Bio section */}
        <section className="detail-card-bio">
          <h2 className="detail-card-classification">{props.pokemon.genus}</h2>
          <p className="detail-card-description">{props.pokemon.description}</p>
        </section>

        {/* Profile section */}
        <h4 className="detail-card-section-header">Profile</h4>
        <section className="detail-card-section detail-card-profile">
          <table>
            <tbody>
              <tr>
                <td>Height:</td>
                <td>{props.pokemon.height} m</td>
              </tr>
              <tr>
                <td>Catch Rate:</td>
                <td>catch_rate</td>
              </tr>
              <tr>
                <td>Egg Groups:</td>
                <td>
                  {props.pokemon.egg_groups
                    ? props.pokemon.egg_groups.map((element) => (
                        <div>{element}</div>
                      ))
                    : ""}
                </td>
              </tr>
              <tr>
                <td>Abilities</td>
                <td>
                  {props.pokemon.abilities
                    ? props.pokemon.abilities.map((element) => (
                        <div>{element}</div>
                      ))
                    : ""}
                </td>
              </tr>
            </tbody>
          </table>

          <table>
            <tbody>
              <tr>
                <td>Weight:</td>
                <td>{props.pokemon.weight} kg</td>
              </tr>
              <tr>
                <td>Gender Ratio:</td>
                <td>gender_ratio</td>
              </tr>
              <tr>
                <td>Hatch Steps:</td>
                <td>hatch_steps</td>
              </tr>
              <tr>
                <td>EVs:</td>
                <td>evs</td>
              </tr>
            </tbody>
          </table>
        </section>

        <h4 className="detail-card-section-header">Damage When Attacked</h4>
        <section></section>
      </div>
    </div>
  );
}

export default PokeDetailCard;
