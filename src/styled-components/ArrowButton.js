import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import ArrowIcon from "./ArrowIcon";

const Button = styled(Link)`
  flex: 0 0 auto;
  width: 70px;
  height: 70px;
  margin: 10px;
  border-radius: 50px;
  border: none;
  text-align: center;
  font-family: var(--font-standard);
  background: var(--button-green);
  ${(props) => {
    if (props.hideButton) {
      return `
    visibility: hidden;
  `;
    } else {
      return `
    visibility: visible;
  `;
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
    <Button to={props.to} hideButton={props.hideButton}>
      <ArrowIcon right={props.right}></ArrowIcon>
    </Button>
  );
}

export default ArrowButton;
