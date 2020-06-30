import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, withRouter, useHistory } from "react-router-dom";

import "./styles.css";

// Components
import PokeDetailCard from "./PokeDetailCard";

// Styled Components
import ArrowIcon from "../../styled-components/ArrowIcon";

function Detail(props) {
  const [name] = useState(props.match.params.name);
  const [id, setID] = useState(1);
  const [pokemon, setPokemon] = useState("");
  const [galleryPreviousPage, setGalleryPreviousPage] = useState(1);
  const [idLoaded, setIDLoaded] = useState(false);
  const [pokemonLoaded, setPokemonLoaded] = useState(false);
  const history = useHistory();

  const getPokemonID = () => {
    axios
      .get("https://intern-pokedex.myriadapps.com/api/v1/pokemon/", {
        params: {
          name: name,
        },
      })
      .then((response) => {
        const id = response.data.data[0].id; // The first 'data' refers to the value within the axios response. The second refers to the data key in the API response.
        // The API returns an array of pokemon that all match the name string. When there is only a single match (a perfect name), there will be a single pokemon at index 0
        const galleryPreviousPage = Math.ceil(response.data.data[0].id / 15);
        setID(id);
        setGalleryPreviousPage(galleryPreviousPage);
        setIDLoaded(true);
      });
  };

  const getPokemon = () => {
    axios
      .get(`https://intern-pokedex.myriadapps.com/api/v1/pokemon/${id}`)
      .then((response) => {
        const pokemon = response.data.data; // The first 'data' refers to the value within the axios response. The second refers to the data key in the API response.
        setPokemon(pokemon);
        setPokemonLoaded(true);
      });
  };

  useEffect(() => {
    getPokemonID();
    if (idLoaded) {
      getPokemon();
    }
  });

  return (
    <React.Fragment>
      {!pokemonLoaded ? (
        <div>Loading...</div>
      ) : (
        <React.Fragment>
          <Link to={"/home/" + galleryPreviousPage} className="detail-back">
            <ArrowIcon />
          </Link>

          {/* <button onClick={history.goBack()}>
            <ArrowIcon />
          </button> */}

          <h1 className="detail-masthead">{name}</h1>

          <PokeDetailCard pokemon={pokemon} />
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

export default withRouter(Detail);
