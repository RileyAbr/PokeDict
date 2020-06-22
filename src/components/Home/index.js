import React from "react";
import axios from "axios";

import "./styles.css";

// Components Import
import PokeCard from "../PokeCard";
import Navigation from "../Navigation";

// Utilities import
import { backPageCalculation, forwardPageCalculation } from "../../Utils";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonList: [],
      maxPages: Number.MAX_SAFE_INTEGER, // Until the actual max count of pages is fetched from the API, we don't put a hard limit in
      isLoading: true,
    };

    this.handleSearchBarChange = this.handleSearchBarChange.bind(this);
  }

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
        const maxPages = response.data.meta.last_page;
        this.setState({ pokemonList, maxPages, isLoading: false });
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

        this.setState({ pokemonList, isLoading: false });
      });
  };

  //   Detects when the search bar has a value in it and updates the searchValue to match
  handleSearchBarChange(searchValue) {
    this.getSearchedPokemonList(searchValue);
  }

  componentDidMount() {
    this.getPokemonList();
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.page !== prevProps.match.params.page) {
      this.getPokemonList();
    }
  }

  render() {
    const backPageValue = backPageCalculation(
      parseInt(this.props.match.params.page),
      this.state.maxPages
    );

    const forwardPageValue = forwardPageCalculation(
      parseInt(this.props.match.params.page),
      this.state.maxPages
    );

    return (
      <React.Fragment>
        {/* Navigation Section */}
        <Navigation
          backPageValue={backPageValue}
          forwardPageValue={forwardPageValue}
          onSearchBarChange={this.handleSearchBarChange}
        />

        {/* Pokemon Cards */}
        <div className="gallery-wrapper">
          {/* Loads a temporary loading component if no data is available yet */}
          {this.state.isLoading ? (
            <div>Loading...</div>
          ) : (
            this.state.pokemonList.map((element) => (
              <PokeCard
                key={element.id}
                name={element.name}
                image={element.image}
                types={element.types}
              />
            ))
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
