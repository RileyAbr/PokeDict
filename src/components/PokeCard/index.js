import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { color, typography, border } from "styled-system";

// Styled elements
import Types from "../../styled-components/Types";

const Card = styled.article`
  ${color};
  ${typography};
  width: 275px;
  margin: 15px 10px;
  /* border-radius: 3px; */
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
    <Link bg={"bg.homeGreen"} to={`/pokemon/${props.name}`}>
      <Card bg={"bg.cardWhite"} fontFamily={"fontStandard"}>
        {/* Pokemon name */}
        <CardName borderColor={"border.grey"}>{props.name}</CardName>

        {/* Pokemon Sprite */}
        <CardSprite src={props.image} alt={props.name} />

        {/* Pokemon Types */}
        <Types firstType={props.types[0]} secondType={props.types[1]} />
      </Card>
    </Link>
  );
}

export default PokeCard;
