import React from "react";
import Color from "color-thief-react";

import "./styles.css";

// Styled components
import Type from "../../../styled-elements/Type";

class PokeDetailCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { imgSrc: "" };
    this.imgRef = React.createRef();

    console.log("In constructor");
    console.log(this.props);
  }

  componentDidMount() {
    this.setState({ imgSrc: this.props });
  }

  renderCnt = 0;

  render() {
    console.log("RENDER " + this.renderCnt++);

    if (this.props.image === undefined) {
      console.log("undefined");
    } else {
      console.log("defined");
      console.log(this.props);
    }

    return (
      <div className="detail-card">
        <div className="detail-card-header">
          <div>
            <h2 className="detail-card-name">{this.props.name}</h2>
            <h3 className="detail-card-id">#{this.props.id}</h3>
          </div>
          <div className="detail-card-types">
            {this.props.types && this.props.types[0] && (
              <Type typeColor={this.props.types[0]}>{this.props.types[0]}</Type>
            )}
            {this.props.types && this.props.types[1] && (
              <Type typeColor={this.props.types[1]}>{this.props.types[1]}</Type>
            )}
          </div>
        </div>
        <div className="detail-card-body">
          <img
            src={this.props.image}
            alt={this.props.name}
            className="detail-card-sprite"
          />
          {/* <Color
            src={"https://intern-pokedex.myriadapps.com/images/pokemon/6.png"}
            crossOrigin="Anonymous"
          >
            {({ data }) => {
              return (
                <div style={{ color: data }}>
                  Text with predominant color:{data}
                  <strong>
                    {data} {this.props.image}
                  </strong>
                </div>
              );
            }}
          </Color> */}
          <div className="detail-card-stats">Pokemon.Stats</div>

          {/* Bio section */}
          <section className="detail-card-bio">
            <h2 className="detail-card-classification">
              Pokemon.Classification Pokemon
            </h2>
            <p className="detail-card-description">
              Pokemon.description Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed et pellentesque arcu, ac pulvinar erat. Morbi
              ante turpis, dictum a dictum sed, posuere ac ligula. Etiam mi
              diam, commodo sed felis rhoncus, egestas sodales est.
            </p>
          </section>

          {/* Profile section */}
          <h4 className="detail-card-section-header">Profile</h4>
          <section className="detail-card-section detail-card-profile">
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
}

export default PokeDetailCard;
