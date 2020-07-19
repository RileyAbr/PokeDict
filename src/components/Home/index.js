import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

// Components import
import PokeCard from "../PokeCard";
import Navigation from "../Navigation";

// Styled Components
import Loading from "../../styled-components/Loading";

// Utils import
import { getPokemonIdFromUrl } from "../../Utils";

const GalleryWrapper = styled.div`
    margin: 0 4%;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-around;
`;

function Home(props) {
    const [pokemonList, setPokemonList] = useState([]);
    const [maxPokemon, setMaxPokemon] = useState(1200); // Hardcoded higher than the Gen 7 Pokedex total, but is assigned dynamically after the first API call is made
    const [maxPages, setMaxPages] = useState(Number.MAX_SAFE_INTEGER);
    const [pokemonListLoaded, setPokemonListLoaded] = useState(false);
    const maxPokemonPerPage = 20;

    useEffect(() => {
        if (props.match.params.searchValue) {
            axios
                .get("https://pokeapi.co/api/v2/pokemon", {
                    params: {
                        limit: maxPokemon,
                    },
                })
                .then((response) => {
                    const pokemonList = response.data.results.filter(
                        (pokemon) =>
                            pokemon.name.includes(
                                props.match.params.searchValue
                            )
                    );

                    const maxPages = 1;
                    setPokemonList(pokemonList);
                    setMaxPages(maxPages);
                    setPokemonListLoaded(true);
                });
        } else {
            axios
                .get("https://pokeapi.co/api/v2/pokemon", {
                    params: {
                        limit: maxPokemonPerPage,
                        offset:
                            maxPokemonPerPage * (props.match.params.page - 1),
                    },
                })
                .then((response) => {
                    const pokemonList = response.data.results; // The first 'data' refers to the value within the axios response. The second refers to the data key in the API response.
                    const maxPokemon = response.data.count;
                    const maxPages = Math.ceil(
                        response.data.count / maxPokemonPerPage
                    );
                    setPokemonList(pokemonList);
                    setMaxPokemon(maxPokemon);
                    setMaxPages(maxPages);
                    setPokemonListLoaded(true);
                });
        }
    }, [maxPokemon, props.match.params.page, props.match.params.searchValue]);

    return (
        <>
            {/* Navigation Section */}
            <Navigation
                currentPage={parseInt(props.match.params.page)}
                maxPages={maxPages}
            />

            {/* Pokemon Cards */}
            <GalleryWrapper>
                {/* Loads a temporary loading component if no data is available yet */}
                {!pokemonListLoaded ? (
                    <Loading />
                ) : (
                    pokemonList.map((element) => (
                        <PokeCard
                            key={getPokemonIdFromUrl(element.url)}
                            name={element.name}
                            id={getPokemonIdFromUrl(element.url)}
                        />
                    ))
                )}
            </GalleryWrapper>

            {/* <Footer /> */}
        </>
    );
}

export default Home;
