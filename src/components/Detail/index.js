import React, { useState, useEffect } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { color, typography } from "styled-system";

// Components
import PokeDetailCard from "./PokeDetailCard";

// Styled Components
import BackButton from "../../styled-components/BackButton";
import Loading from "../../styled-components/Loading";

// Utils import
import { capitalizeString } from "../../Utils";

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
    const [pokemon, setPokemon] = useState("");
    const [pokemonLoaded, setPokemonLoaded] = useState(false);
    const [species, setSpecies] = useState("");
    const [speciesLoaded, setSpeciesLoaded] = useState(false);

    useEffect(() => {
        const getPokemon = () => {
            axios
                .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
                .then((response) => {
                    const pokemon = response.data;
                    // const date = new Date();
                    // const expiryDate = new Date(
                    //     date.getFullYear(),
                    //     date.getMonth(),
                    //     date.getDate() + 1
                    // );
                    setPokemon(pokemon);
                    const mainType = pokemon.types[0].type.name;
                    // document.cookie = `type=${mainType}; expires=${expiryDate}`;
                    props.onDetailNavigation(mainType);
                    setPokemonLoaded(true);
                });
        };

        const getPokemonSpeciesData = () => {
            axios
                .get(`https://pokeapi.co/api/v2/pokemon-species/${name}`)
                .then((response) => {
                    const speciesData = response.data;
                    setSpecies(speciesData);
                    setSpeciesLoaded(true);
                });
        };

        if (!pokemonLoaded) {
            getPokemon();
        }

        if (pokemonLoaded) {
            getPokemonSpeciesData();
        }
    }, [name, pokemonLoaded, props]);

    return (
        <>
            <BackButton />

            {!speciesLoaded ? (
                <Loading />
            ) : (
                <>
                    <Masthead color={"font.white"} fontSize={["3rem", "5rem"]}>
                        {capitalizeString(name)}
                    </Masthead>

                    <PokeDetailCard
                        pokemon={pokemon}
                        pokemonSpecies={species}
                    />
                </>
            )}
        </>
    );
}

export default withRouter(Detail);
