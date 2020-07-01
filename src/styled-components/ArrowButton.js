import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { color, typography } from "styled-system";

import ArrowIcon from "./ArrowIcon";

const Button = styled(Link)`
  flex: 0 0 auto;
  width: 70px;
  height: 70px;
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
      //   This is an odd line, but it essentially fixes an error with React not wanting custom props showing up in the inspector
      hidebutton={props.hideButton.toString()}
    >
      <ArrowIcon borderColor={"border.white"} right={props.right} />
    </Button>
  );
}

export default ArrowButton;
