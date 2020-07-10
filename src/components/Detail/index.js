import React, { useState, useEffect } from "react";
import axios from "axios";
import { withRouter, useHistory } from "react-router-dom";
import styled from "styled-components";
import { color, typography } from "styled-system";

// Components
import PokeDetailCard from "./PokeDetailCard";

// Styled Components
import BackButton from "../../styled-components/BackButton";

const Masthead = styled.h1`
  text-align: center;
  padding: 0.5rem 0 1rem;
  width: 100%;
  padding-top: 65px;
  ${color}
  ${typography}
  @media screen and (min-width: 40em) {
    padding-top: 0;
  }
`;

// Main Component
function Detail(props) {
  const [name] = useState(props.match.params.name);
  const [id, setID] = useState(1);
  const [pokemon, setPokemon] = useState("");
  const [galleryPreviousPage, setGalleryPreviousPage] = useState(1);
  const [idLoaded, setIDLoaded] = useState(false);
  const [pokemonLoaded, setPokemonLoaded] = useState(false);
  const history = useHistory();

  useEffect(() => {
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
          const mainType = pokemon.types[0];
          props.onDetailNavigation(mainType);
          console.log(mainType);
          setPokemonLoaded(true);
        });
    };

    if (!idLoaded) {
      getPokemonID();
    }
    if (idLoaded) {
      getPokemon();
    }
  }, [props, id, name, idLoaded]);

  return (
    <>
      <BackButton
        to={"/home/" + galleryPreviousPage}
        hideButton={false}
      ></BackButton>

      {/* <button onClick={history.goBack()}>
            <ArrowIcon />
          </button> */}

      {!pokemonLoaded ? (
        <div>Loading...</div>
      ) : (
        <>
          <Masthead color={"font.white"} fontSize={["3rem", "5rem"]}>
            {name}
          </Masthead>

          <PokeDetailCard pokemon={pokemon} />
        </>
      )}
    </>
  );
}

export default withRouter(Detail);
