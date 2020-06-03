import React from "react";

import "./styles.css";

// Styled components
import Type from "../../../elements/Type";

class PokeDetailCard extends React.Component {
  render() {
    return (
      <div className="detail-card">
        <div className="detail-card-header">
          <div>
            <h2 className="detail-card-name">{this.props.pokemon.name}</h2>
            <h3 className="detail-card-id">#{this.props.pokemon.id}</h3>
          </div>
          <div className="detail-card-types">
            {this.props.pokemon.types && this.props.pokemon.types[0] && (
              <Type typeColor={this.props.pokemon.types[0]}>
                {this.props.pokemon.types[0]}
              </Type>
            )}
            {this.props.pokemon.types && this.props.pokemon.types[1] && (
              <Type typeColor={this.props.pokemon.types[1]}>
                {this.props.pokemon.types[1]}
              </Type>
            )}
          </div>
        </div>
        <div className="detail-card-body">
          <img
            src={this.props.pokemon.image}
            alt={this.props.pokemon.name}
            className="detail-card-sprite"
          />
          <div className="detail-card-stats">
            {this.props.pokemon.stats &&
              Object.entries(this.props.pokemon.stats).map(([key, value]) => (
                <div>
                  {key}: {value}
                </div>
              ))}
          </div>

          {/* Bio section */}
          <section className="detail-card-bio">
            <h2 className="detail-card-classification">
              {this.props.pokemon.genus}
            </h2>
            <p className="detail-card-description">
              {this.props.pokemon.description}
            </p>
          </section>

          {/* Profile section */}
          <h4 className="detail-card-section-header">Profile</h4>
          <section className="detail-card-section detail-card-profile">
            <table>
              <tbody>
                <tr>
                  <td>Height:</td>
                  <td>{this.props.pokemon.height} m</td>
                </tr>
                <tr>
                  <td>Catch Rate:</td>
                  <td>catch_rate</td>
                </tr>
                <tr>
                  <td>Egg Groups:</td>
                  <td>
                    {this.props.pokemon.egg_groups
                      ? this.props.pokemon.egg_groups.map((element) => (
                          <div>{element}</div>
                        ))
                      : ""}
                  </td>
                </tr>
                <tr>
                  <td>Abilities</td>
                  <td>
                    {this.props.pokemon.abilities
                      ? this.props.pokemon.abilities.map((element) => (
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
                  <td>{this.props.pokemon.weight} kg</td>
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
}

export default PokeDetailCard;
