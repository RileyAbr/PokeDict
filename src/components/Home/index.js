import React from "react";
import axios from "axios";

import "./styles.css";

// Components Import
import PokeCard from "../PokeCard";
import Navigation from "../Navigation";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonList: [],
      maxPages: Number.MAX_SAFE_INTEGER, // Until the actual max count of pages is fetched from the API, we don't put a hard limit in
      isLoading: true,
    };
  }

  //  Fetches a page's worth of pokemon entries depending on page and search values
  getPokemonList = () => {
    axios
      .get("https://intern-pokedex.myriadapps.com/api/v1/pokemon/", {
        params: {
          page: this.props.match.params.page,
          name: this.props.match.params.searchValue,
        },
      })
      .then((response) => {
        const pokemonList = response.data.data; // The first 'data' refers to the value within the axios response. The second refers to the data key in the API response.
        const maxPages = response.data.meta.last_page;
        this.setState({ pokemonList, maxPages, isLoading: false });
      });
  };

  componentDidMount() {
    this.getPokemonList();
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.match.params.page !== prevProps.match.params.page ||
      this.props.match.params.searchValue !== prevProps.match.params.searchValue
    ) {
      this.getPokemonList();
    }
  }

  render() {
    return (
      <React.Fragment>
        {/* Navigation Section */}
        <Navigation
          currentPage={parseInt(this.props.match.params.page)}
          maxPages={this.state.maxPages}
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
