import React from "react";

import { calculatePokemonMaleRate, calculatePokemonFemaleRate } from "../Utils";

function PokemonGenderRates(props) {
    if (props.gender_rate === -1) {
        return (
            <>
                <div>Genderless</div>
            </>
        );
    } else if (props.gender_rate === 0) {
        return <div>{calculatePokemonMaleRate(props.gender_rate)}% M</div>;
    } else if (props.gender_rate === 8) {
        return <div>{calculatePokemonFemaleRate(props.gender_rate)}% F</div>;
    } else {
        return (
            <>
                <div>{calculatePokemonMaleRate(props.gender_rate)}% M</div>
                <div>{calculatePokemonFemaleRate(props.gender_rate)}% F</div>
            </>
        );
    }
}

export default PokemonGenderRates;
