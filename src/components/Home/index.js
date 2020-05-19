import React from "react";
import axios from "axios";

import "./styles.css";

// Components Import
import PokeCard from "../PokeCard";

// import pokeData from "./mockData.json";

// axios
//   .get("https://intern-pokedex.myriadapps.com/api/v1/pokemon/", {
//     params: {
//       page: 1,
//     },
//   })
//   .then(function (response) {
//     console.log(response.data);
//     pokemonList = response.data.map((element) => {
//       return (
// <PokeCard
//   id={element.id}
//   name={element.name}
//   image={element.image}
//   types={element.types}
// />
//       );
//     });
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
//   .then(function () {});

// const pokemonList = pokeData.map((element) => {
//   return (
//     <PokeCard
//       id={element.id}
//       name={element.name}
//       image={element.image}
//       types={element.types}
//     />
//   );
// });

class Home extends React.Component {
  state = {
    pokemonList: [],
  };

  componentDidMount() {
    axios
      .get("https://intern-pokedex.myriadapps.com/api/v1/pokemon/", {
        params: {
          page: 1,
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
          <div className="nav-arrow">&lt;</div>
          <div>
            <input type="text" placeholder="🔎 Pokedex"></input>
          </div>
          <div className="nav-arrow">&gt;</div>
        </div>

        {/* Pokemon Cards */}
        <div className="gallery-wrapper">
          {this.state.pokemonList.map((element) => (
            <PokeCard
              id={element.id}
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
