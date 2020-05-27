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

  //   This is the most basic function to fetch Pokemon. It fetches based on simply a page number, no additional complications. It is used everytime the gallery is navigated
  getPokemonList = () => {
    axios
      .get("https://intern-pokedex.myriadapps.com/api/v1/pokemon/", {
        params: {
          page: this.props.match.params.page,
        },
      })
      .then((response) => {
        const pokemonList = response.data.data; // The first 'data' refers to the value within the axios response. The second refers to the data key in the API response.
        this.setState({ pokemonList });
      });
  };

  //   This function fetches all intial pokemon, but only the first time the component is rendered. The additional data fetched via this function includes the metadata max number of pages from the API, which is used to make sure the navigation buttons are never out of range
  getIntialPokemonList = () => {
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

  //   This function fetches only pokemon that match the search string provided by the input box. It is matching all pokemon names that contain the pattern of letterns provided by the search variable
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

  //   Detects when the search bar has a value in it and updates the searchValue to match
  searchBarOnChange = (event) => {
    this.getSearchedPokemonList(event.target.value);
  };

  componentDidMount() {
    this.getIntialPokemonList();
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.page !== prevProps.match.params.page) {
      this.getPokemonList();
    }
  }

  render() {
    // These conditional statements are funky, but they are essentially checking if
    // 1. The value is will not be moved out of range--if so set it to the lowest/highest value
    // 2. The value is not already out of range--if so set it to the highest/lowest value
    // 3. If these two conditions are not met, simply set the value to the next page forward or back
    const backPageValue =
      parseInt(this.props.match.params.page) > 1
        ? parseInt(
            this.props.match.params.page > this.state.maxPages
              ? this.state.maxPages
              : parseInt(this.props.match.params.page) - 1
          )
        : 1;

    const forwardPageValue =
      parseInt(this.props.match.params.page) < this.state.maxPages
        ? parseInt(
            this.props.match.params.page < 1
              ? 1
              : parseInt(this.props.match.params.page) + 1
          )
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
              // This ensures that the input value is actually passed off to searchBarOnChange()
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
          {this.state.pokemonList.map((element) => (
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
