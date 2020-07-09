import React from "react";
import styled from "styled-components";
import { color, border } from "styled-system";

const TypeBox = styled.div`
  margin: 4px 4px;
  padding: 3px;
  border-radius: 3px;
  /* The first border and color set a default value in-case the type is not found in the list */
  border: solid 1px black;
  color: black;
  ${color};
  ${border};
  text-transform: uppercase;
  font-size: 0.8rem;
`;

function Type(props) {
  return (
    <TypeBox
      color={`type.${props.type}.bg.primary`}
      bg={`type.${props.type}.bg.secondary`}
      borderColor={`type.${props.type}.bg.primary`}
    >
      {props.type}
    </TypeBox>
  );
}

export default Type;
