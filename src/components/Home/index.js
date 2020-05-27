import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./styles.css";

// Components Import
import PokeCard from "../PokeCard";

class Home extends React.Component {
  state = {
    // page: parseInt(this.props.match.params.page),
    maxPages: Number.MAX_SAFE_INTEGER, // Until the actual max count of pages is fetched from the API, we don't put a hard limit in
    pokemonList: [],
    searchValue: "",
  };

  //   Detects when the search bar has a value in it and updates the searchValue to match
  searchBarOnChange = (event) => {
    this.getSearchedPokemonList(event.target.value);
    // this.setState({ searchValue: event.target.value });
  };

  getPokemonList = () => {
    axios
      .get("https://intern-pokedex.myriadapps.com/api/v1/pokemon/", {
        params: {
          page: this.props.match.params.page,
        },
      })
      .then((response) => {
        const pokemonList = response.data.data; // The first 'data' refers to the value within the axios response. The second refers to the data key in the API response.
        const maxPages = response.data.meta.last_page;
        this.setState({ pokemonList, maxPages });
      });
  };

  getSearchedPokemonList = (search) => {
    axios
      .get("https://intern-pokedex.myriadapps.com/api/v1/pokemon/", {
        params: {
          name: search,
        },
      })
      .then((response) => {
        const pokemonList = response.data.data; // The first 'data' refers to the value within the axios response. The second refers to the data key in the API response.
        this.setState({ pokemonList });
      });
  };

  componentDidMount() {
    this.getPokemonList();
  }

  // TODO: fix flickering when new page is accessed. I believe it is because this is being called once for the page changing, as well as each card that is updated
  componentDidUpdate(prevProps) {
    if (this.props.match.params.page !== prevProps.match.params.page) {
      this.getPokemonList();
    }
  }

  render() {
    // Compares the list of feteched pokemon against any existing search string from the input box
    const filteredPokemonList = this.state.pokemonList.filter((pokemon) => {
      return pokemon.name
        .toLowerCase()
        .includes(this.state.searchValue.toLowerCase());
    });

    const backPageValue =
      parseInt(this.props.match.params.page) > 1
        ? parseInt(this.props.match.params.page) - 1
        : 1;

    const forwardPageValue =
      parseInt(this.props.match.params.page) < this.state.maxPages
        ? parseInt(this.props.match.params.page) + 1
        : this.state.maxPages;

    return (
      <div className="home-wrapper">
        {/* Navigation Section */}
        <nav className="nav-wrapper">
          <Link to={"/home/" + backPageValue} className="nav-arrow">
            <i className="nav-arrow-icon nav-arrow-left" />
          </Link>
          <form className="nav-search-form">
            <input
              className="nav-search-input"
              type="text"
              placeholder="Pokédex"
              ref={(element) => {
                this.input = element;
              }}
              onChange={this.searchBarOnChange}
            ></input>
          </form>
          <Link to={"/home/" + forwardPageValue} className="nav-arrow">
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
