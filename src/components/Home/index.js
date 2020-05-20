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

  searchBarOnChange = (event) => {
    console.log(event.target.value);
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
            <div className="nav-arrow">&lt;</div>
          </NavLink>
          <form>
            <label>
              <input
                className="nav-search-input"
                type="text"
                placeholder="Pokédex"
                onChange={this.searchBarOnChange}
              ></input>
            </label>
          </form>

          <NavLink onClick={this.forwardPage} to={"/" + this.state.page}>
            <div className="nav-arrow">&gt;</div>
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
