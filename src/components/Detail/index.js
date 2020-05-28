import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./styles.css";

// Components
import PokeDetailCard from "./PokeDetailCard";

// Styled Components
import ArrowIcon from "../../elements/ArrowIcon";

class Detail extends React.Component {
  state = {
    name: this.props.match.params.name,
    pokemon: "",
    galleryPreviousPage: 1, // 1 is the default, but will be modified depending on getPokemon()
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
        // The API returns an array of pokemon that all match the name string. When there is only a single match (a perfect name), there will be a single pokemon at index 0
        const galleryPreviousPage = Math.ceil(response.data.data[0].id / 15);
        this.setState({ pokemon, galleryPreviousPage });
      });
  };

  componentDidMount() {
    this.getPokemon();
  }

  render() {
    return (
      <React.Fragment>
        <Link
          to={"/home/" + this.state.galleryPreviousPage}
          className="detail-back"
        >
          <ArrowIcon />
        </Link>

        <h1 className="detail-masthead">{this.state.pokemon.name}</h1>

        <PokeDetailCard
          name={this.state.pokemon.name}
          id={this.state.pokemon.id}
          image={this.state.pokemon.image}
          types={this.state.pokemon.types}
        />
      </React.Fragment>
    );
  }
}

export default Detail;
