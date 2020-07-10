import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { color, typography, layout } from "styled-system";

import theme from "../theme";

const Button = styled(Link)`
  flex: 0 0 auto;
  ${layout};
  margin: 10px;
  border-radius: 50px;
  border: none;
  text-align: center;
  ${color};
  ${typography};
  order: 2;

  ${(props) => {
    if (props.hidebutton) {
      return `visibility: hidden;`;
    }
  }}

/* Hover and click animations */
  box-shadow: 0 5px
    ${(props) => {
      return props.theme.colors.bg.inputsShadow;
    }};
&:hover,
&:focus {
    box-shadow: 0 3px ${(props) => {
      return props.theme.colors.bg.inputsShadow;
    }};
}
&:active {
    box-shadow: none;
}

  @media screen and (min-width: 40em) {
    order: 0;
  }
`;

function ArrowButtonContainer(props) {
  return (
    <Button
      bg={"bg.inputs"}
      fontFamily={"fontStandard"}
      to={props.to}
      width={["45px", "70px"]}
      height={["45px", "70px"]}
      theme={theme}
      hidebutton={props.hidebutton ? 1 : 0}
    >
      {props.children}
    </Button>
  );
}

export default ArrowButtonContainer;
