import React from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

import "./styles.css";

// Components Import
import PokeCard from "../PokeCard";

class Home extends React.Component {
  state = {
    page: 1,
    pokemonList: [],
    searchValue: "",
  };

  // Handles modifying the current page with the left and right arrow buttons
  backwardPage = () => {
    if (this.state.page > 0) {
      this.setState({ page: this.state.page - 1 });
    }
    console.log(this.state.page);
  };
  forwardPage = () => {
    this.setState({ page: this.state.page + 1 });
    console.log(this.state.page);
  };

  //   Detects when the search bar has a value in it and updates the searchValue to match
  searchBarOnChange = (event) => {
    this.setState({ searchValue: event.target.value });
  };

  componentDidMount() {
    axios
      .get("https://intern-pokedex.myriadapps.com/api/v1/pokemon/", {
        params: {
          page: this.state.page,
        },
      })
      .then((response) => {
        const pokemonList = response.data.data; // The first 'data' refers to the value within the axios response. The second refers to the data key in the API response.
        this.setState({ pokemonList });
      });
  }

  render() {
    // Compares the list of feteched pokemon against any existing search string from the input box
    const filteredPokemonList = this.state.pokemonList.filter((pokemon) => {
      return pokemon.name
        .toLowerCase()
        .includes(this.state.searchValue.toLowerCase());
    });

    return (
      <main className="home-wrapper">
        {/* Navigation Section */}
        <nav className="nav-wrapper">
          <NavLink onClick={this.backwardPage} to={"/" + this.state.page}>
            <div className="nav-arrow">
              <i class="nav-arrow-icon nav-arrow-left" />
            </div>
          </NavLink>
          <label>
            <input
              className="nav-search-input"
              type="text"
              placeholder="Pokédex"
              onChange={this.searchBarOnChange}
            ></input>
          </label>

          <NavLink onClick={this.forwardPage} to={"/" + this.state.page}>
            <div className="nav-arrow">
              <i class="nav-arrow-icon nav-arrow-right" />
            </div>
          </NavLink>
        </nav>

        {/* Pokemon Cards */}
        <div className="gallery-wrapper">
          {filteredPokemonList.map((element) => (
            <PokeCard
              key={element.id}
              name={element.name}
              image={element.image}
              types={element.types}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default Home;
