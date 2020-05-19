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
  };

  backwardPage = () => {
    this.setState({ page: this.state.page - 1 });
  };

  forwardPage = () => {
    this.setState({ page: this.state.page + 1 });
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
    return (
      <div className="home-wrapper">
        {/* Navigation Section */}
        <div>
          <NavLink to={"/" + this.state.page} onClick={this.backwardPage}>
            <div className="nav-arrow">&lt;</div>
          </NavLink>
          <div>
            <input type="text" placeholder="🔎 Pokedex"></input>
          </div>

          <NavLink to={"/" + this.state.page} onClick={this.forwardPage}>
            <div className="nav-arrow">&gt;</div>
          </NavLink>
        </div>

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
