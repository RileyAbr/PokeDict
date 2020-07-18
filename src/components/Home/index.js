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
    const [maxPages, setMaxPages] = useState(Number.MAX_SAFE_INTEGER);
    const [pokemonListLoaded, setPokemonListLoaded] = useState(false);
    const maxPokemonPerPage = 20;

    useEffect(() => {
        //   Connects to the API
        // axios
        //   .get("https://intern-pokedex.myriadapps.com/api/v1/pokemon/", {
        //     params: {
        //       page: props.match.params.page,
        //       name: props.match.params.searchValue,
        //     },
        //   })
        //   .then((response) => {
        //     const pokemonList = response.data.data; // The first 'data' refers to the value within the axios response. The second refers to the data key in the API response.
        //     const maxPages = response.data.meta.last_page;

        //     setPokemonList(pokemonList);
        //     setMaxPages(maxPages);
        //     setPokemonListLoaded(true);
        //   });

        axios
            .get("https://pokeapi.co/api/v2/pokemon", {
                params: {
                    limit: maxPokemonPerPage,
                    offset: maxPokemonPerPage * (props.match.params.page - 1),
                },
            })
            .then((response) => {
                const pokemonList = response.data.results; // The first 'data' refers to the value within the axios response. The second refers to the data key in the API response.
                const maxPages = Math.ceil(
                    response.data.count / maxPokemonPerPage
                );
                setPokemonList(pokemonList);
                setMaxPages(maxPages);
                setPokemonListLoaded(true);
            });
    }, [props.match.params.page]);

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
                            key={element.id}
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
