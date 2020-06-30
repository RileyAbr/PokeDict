import React from "react";
import styled from "styled-components";

import Type from "./Type";

const TypesBox = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
`;

function Types(props) {
  return (
    <TypesBox>
      {props.firstType && <Type type={props.firstType} />}
      {props.secondType && <Type type={props.secondType} />}
    </TypesBox>
  );
}

export default Types;
