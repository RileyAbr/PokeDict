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

  // Moves the current page in the pagination by the specified parameter
  //   goToPage = (pageIncrement) => {
  //     this.props.history.push(
  //       `/home/${parseInt(this.props.match.params.page) + pageIncrement}`
  //     );
  //   };

  // Handles modifying the current page with the left and right arrow buttons
  backwardPage = () => {
    if (this.props.match.params.page > 1) {
      //   this.goToPage(-1);
      this.getPokemonList();
    }
  };
  forwardPage = () => {
    if (this.props.match.params.page < this.state.maxPages) {
      //   this.goToPage(1);
      this.getPokemonList();
    }
  };

  //   Detects when the search bar has a value in it and updates the searchValue to match
  searchBarOnChange = (event) => {
    this.getSearchedPokemonList(event.target.value);
    this.setState({ searchValue: event.target.value });
  };

  searchBarSubmit = (event) => {
    if (event) event.preventDefault();
    const searchValue = this.input.value;

    if (searchValue != null) {
      this.setState({ searchValue });
    }

    this.getSearchedPokemonList();
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
          name: search, //this.state.name,
        },
      })
      .then((response) => {
        const pokemonList = response.data.data; // The first 'data' refers to the value within the axios response. The second refers to the data key in the API response.
        // The API returns an array of pokemom. When there is only a single match, it will be at index 0
        this.setState({ pokemonList });
      });
  };

  componentDidMount() {
    this.getPokemonList();

    this.backListener = this.props.history.listen((loc, action) => {
      if (action === "POP") {
        this.setState({ page: this.props.match.params.page });
      }
    });
  }

  // TODO: fix flickering when new page is accessed. I believe it is because this is being called once for the page changing, as well as each card that is updated
  componentDidUpdate(prevProps) {
    if (this.props.match.params.page !== prevProps.match.params.page) {
      this.getPokemonList();
    }
  }

  componentWillUnmount() {
    this.backListener();
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
            to={"/home/" + (parseInt(this.props.match.params.page) - 1)}
            className="nav-arrow"
          >
            <i className="nav-arrow-icon nav-arrow-left" />
          </Link>
          <form
          //   onSubmit={this.searchBarSubmit}
          >
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
          <Link
            to={"/home/" + (parseInt(this.props.match.params.page) + 1)}
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
