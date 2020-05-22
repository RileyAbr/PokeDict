import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./styles.css";

// Components Import
import PokeCard from "../PokeCard";

class Home extends React.Component {
  state = {
    page: 1,
    maxPages: Number.MAX_SAFE_INTEGER, // Until the actual max count of pages is fetched from the API, we don't put a hard limit in
    pokemonList: [],
    searchValue: "",
  };

  // Handles modifying the current page with the left and right arrow buttons
  backwardPage = () => {
    if (this.state.page > 1) {
      this.setState({ page: this.state.page - 1 });
    }
    console.log(this.state.page);
  };
  forwardPage = () => {
    if (this.state.page < this.state.maxPages) {
      this.setState({ page: this.state.page + 1 });
    }
    console.log(this.state.page);
  };

  //   Detects when the search bar has a value in it and updates the searchValue to match
  searchBarOnChange = (event) => {
    this.setState({ searchValue: event.target.value });
  };

  getPokemonList = () => {
    axios
      .get("https://intern-pokedex.myriadapps.com/api/v1/pokemon/", {
        params: {
          page: this.state.page,
        },
      })
      .then((response) => {
        const pokemonList = response.data.data; // The first 'data' refers to the value within the axios response. The second refers to the data key in the API response.
        const maxPages = response.data.meta.last_page;
        this.setState({ pokemonList, maxPages });
      });
  };

  componentDidMount() {
    // this.setState({ page: parseInt(this.props.location.pathname.slice(-1)) });
    this.getPokemonList();
  }

  // TODO: fix flickering when new page is accessed. I believe it is because this is being called once for the page changing, as well as each card that is updated
  componentDidUpdate() {
    this.getPokemonList();
  }

  render() {
    // Compares the list of feteched pokemon against any existing search string from the input box
    const filteredPokemonList = this.state.pokemonList.filter((pokemon) => {
      return pokemon.name
        .toLowerCase()
        .includes(this.state.searchValue.toLowerCase());
    });

    return (
      <div className="home-wrapper">
        {/* Navigation Section */}
        <nav className="nav-wrapper">
          <Link
            to={`/${this.state.page - 1}`}
            onClick={this.backwardPage}
            className="nav-arrow"
          >
            <i className="nav-arrow-icon nav-arrow-left" />
          </Link>
          <label>
            <input
              className="nav-search-input"
              type="text"
              placeholder="Pokédex"
              onChange={this.searchBarOnChange}
            ></input>
          </label>
          <Link
            to={`/${this.state.page + 1}`}
            onClick={this.forwardPage}
            className="nav-arrow"
          >
            <i className="nav-arrow-icon nav-arrow-right" />
          </Link>
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
      </div>
    );
  }
}

export default Home;
