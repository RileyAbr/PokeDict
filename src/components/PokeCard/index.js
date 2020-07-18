import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { color, typography, border } from "styled-system";

// Utils import
import { capitalizeString } from "../../Utils";

const Card = styled.article`
    ${color};
    ${typography};
    width: 275px;
    margin: 15px 10px;
    &:hover,
    &:active,
    &:focus {
        transform: scale(1.1);
    }
    transition: transform 0.075s ease-in;
`;

const CardName = styled.h1`
    font-size: 1.1rem;
    padding: 1.3rem 2rem;
    font-weight: bold;
    border: solid 1px black;
    ${border};
`;

const CardSprite = styled.img`
    display: block;
    margin: 0 auto;
    height: 225px;
`;

// Main Component
function PokeCard(props) {
    return (
        <Link bg={"bg.primary"} to={`/pokemon/${props.name}`}>
            <Card bg={"bg.cardWhite"} fontFamily={"fontStandard"}>
                {/* Pokemon name */}
                <CardName borderColor={"border.grey"}>
                    {capitalizeString(props.name)}
                </CardName>

                {/* Pokemon Sprite */}
                <CardSprite
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`}
                    alt={props.name}
                />

                {/* Pokemon Types */}
                {/* <Types firstType={props.types[0]} secondType={props.types[1]} /> */}
            </Card>
        </Link>
    );
}

export default PokeCard;
