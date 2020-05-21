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
      <div className="detail-card-body">
        <img
          className="detail-card-sprite"
          src={props.image}
          alt={props.name}
        />
        <div className="detail-card-stats">Pokemon.Stats</div>

        {/* Bio section */}
        <section className="detail-card-bio">
          <h2 className="detail-card-classification">
            Pokemon.Classification Pokemon
          </h2>
          <p className="detail-card-description">
            Pokemon.description Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed et pellentesque arcu, ac pulvinar erat. Morbi
            ante turpis, dictum a dictum sed, posuere ac ligula. Etiam mi diam,
            commodo sed felis rhoncus, egestas sodales est.
          </p>
        </section>

        {/* Profile section */}
        <h4 className="detail-card-section-header">Profile</h4>
        <section className="detail-card-profile">
          <table>
            <tbody>
              <tr>
                <td>Height:</td>
                <td>height</td>
              </tr>
              <tr>
                <td>Catch Rate:</td>
                <td>catchRate</td>
              </tr>
              <tr>
                <td>Egg Groups:</td>
                <td>eggGroups</td>
              </tr>
              <tr>
                <td>Abilities</td>
                <td>abilities</td>
              </tr>
            </tbody>
          </table>

          <table>
            <tbody>
              <tr>
                <td>Weight:</td>
                <td>weight</td>
              </tr>
              <tr>
                <td>Gender Ratio:</td>
                <td>genderRatio</td>
              </tr>
              <tr>
                <td>Hatch Steps:</td>
                <td>hatchSteps</td>
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
