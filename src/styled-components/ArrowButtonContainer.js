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
  ${(props) => {
    if (props.hidebutton) {
      return `visibility: hidden;`;
    }
  }}
  order: 2;
  @media screen and (min-width: 40em) {
    order: 0;
  }
`;

function ArrowButtonContainer(props) {
  return (
    <Button
      bg={"input.buttonGreen"}
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
