import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { color, typography, layout } from "styled-system";

import ArrowIcon from "./ArrowIcon";

const Button = styled(Link)`
  flex: 0 0 auto;
  ${layout};
  margin: 10px;
  border-radius: 50px;
  border: none;
  text-align: center;
  ${color};
  ${typography};
  ${(props) => {
    if (props.hidebutton === "true") {
      return `visibility: hidden;`;
    }
  }}
  &:active,
    &:hover,
    &:focus {
    outline: 0;
    -webkit-box-shadow: 0px 0px 17px -8px rgba(255, 255, 255, 0.66);
    -moz-box-shadow: 0px 0px 17px -8px rgba(255, 255, 255, 0.66);
    box-shadow: 0px 0px 17px -8px rgba(255, 255, 255, 0.66);
  }
`;

function ArrowButton(props) {
  return (
    <Button
      bg={"input.buttonGreen"}
      fontFamily={"fontStandard"}
      to={props.to}
      width={["35px", "70px"]}
      height={["35px", "70px"]}
      //   This is an odd line, but it essentially fixes an error with React not wanting custom props showing up in the inspector
      hidebutton={props.hideButton.toString()}
    >
      <ArrowIcon
        right={props.right}
        padding={["4px", "5px"]}
        borderColor={"border.white"}
        borderBottomWidth={[4, 5]}
        borderRightWidth={[4, 5]}
        top={[10, 26]}
      />
    </Button>
  );
}

export default ArrowButton;
