import styled, { css } from "styled-components";

const typeColors = {
  bug: "#A8B820",
  dark: "#705848",
  dragon: "#7038F8",
  electric: "#F8D030",
  fairy: "#EE99AC",
  fighting: "#C03028",
  fire: "#F08030",
  flying: "#A890F0",
  ghost: "#705898",
  grass: "#78C850",
  ground: "#E0C068",
  ice: "#98D8D8",
  normal: "#e9e9e9",
  poison: "#A040A0",
  psychic: "#F85888",
  rock: "#B8A038",
  steel: "#B8B8D0",
  water: "#6890F0",
};

export default styled.div`
  margin: 4px 4px;
  padding: 3px;
  border-radius: 3px;
  /* The first border sets a default value in-case the type is not found in the list */
  border: solid 1px ${typeColors["normal"]};
  border-color: ${(props) => typeColors[props.typeColor]};
  color: ${(props) => typeColors[props.typeColor]};
  text-transform: uppercase;
  font-size: 0.8rem;
`;
