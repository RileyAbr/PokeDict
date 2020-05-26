import React from "react";
import axios from "axios";

import "./styles.css";

// Components
import PokeDetailCard from "./PokeDetailCard";

class Detail extends React.Component {
  state = {
    name: this.props.location.pathname.slice(9), //
    pokemon: "",
  };

  goBack = () => {
    this.props.history.goBack();
  };

  getPokemon = () => {
    axios
      .get("https://intern-pokedex.myriadapps.com/api/v1/pokemon/", {
        params: {
          name: this.state.name,
        },
      })
      .then((response) => {
        const pokemon = response.data.data[0]; // The first 'data' refers to the value within the axios response. The second refers to the data key in the API response.
        // The API returns an array of pokemom. When there is only a single match, it will be at index 0
        this.setState({ pokemon });
      });
  };

  componentDidMount() {
    this.getPokemon();
  }

  render() {
    return (
      <div>
        <button className="detail-back" onClick={this.goBack}>
          <i className="detail-back-icon"></i>
        </button>

        <h1 className="detail-masthead">{this.state.pokemon.name}</h1>

        <PokeDetailCard
          name={this.state.pokemon.name}
          id={this.state.pokemon.id}
          image={this.state.pokemon.image}
          types={this.state.pokemon.types}
        />
      </div>
    );
  }
}

export default Detail;
