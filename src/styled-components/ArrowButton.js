import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { color, typography, layout } from "styled-system";

import ArrowIcon from "./ArrowIcon";

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
    if (props.hidebutton === "true") {
      return `visibility: hidden;`;
    }
  }}
`;

function ArrowButton(props) {
  return (
    <Button
      bg={"input.buttonGreen"}
      fontFamily={"fontStandard"}
      to={props.to}
      width={["35px", "70px"]}
      height={["35px", "70px"]}
      theme={theme}
      //   This is an odd line, but it essentially fixes an error with React not wanting custom props showing up in the inspector
      hidebutton={props.hideButton ? props.hideButton.toString() : false}
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
