import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Type from "./Type";

const TypesContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
`;

function Types(props) {
  return (
    <TypesContainer>
      {props.firstType && (
        <Type typeColor={props.firstType}>{props.firstType}</Type>
      )}
      {props.secondType && (
        <Type typeColor={props.secondType}>{props.secondType}</Type>
      )}
    </TypesContainer>
  );
}

export default Types;
