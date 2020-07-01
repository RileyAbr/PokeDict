import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, withRouter, useHistory } from "react-router-dom";
import styled from "styled-components";
import { color } from "styled-system";

// Components
import PokeDetailCard from "./PokeDetailCard";

// Styled Components
import ArrowIcon from "../../styled-components/ArrowIcon";

const BackArrow = styled(Link)`
  width: 70px;
  height: 70px;
  border-radius: 50px;
  border: none;
  text-align: center;
  ${color};
  cursor: pointer;
  position: absolute;
  &:active,
  &:hover,
  &:focus {
    outline: 0;
    box-shadow: 0px 0px 17px -8px rgba(255, 255, 255, 0.85);
  }
`;

const Masthead = styled.h1`
  text-align: center;
  font-size: 5rem;
  margin: 0.5rem 0 1rem;
  width: 100%;
  ${color}
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
          <BackArrow
            to={"/home/" + galleryPreviousPage}
            bg={"input.buttonGreen"}
          >
            <ArrowIcon borderColor={"border.white"} />
          </BackArrow>

          {/* <button onClick={history.goBack()}>
            <ArrowIcon />
          </button> */}

          <Masthead color={"font.white"}>{name}</Masthead>

          <PokeDetailCard pokemon={pokemon} />
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

export default withRouter(Detail);
