import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { color, layout, typography } from "styled-system";

import ArrowIcon from "./ArrowIcon";

const Button = styled(Link)`
  ${layout};
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  border-radius: 50px;
  padding: 14px;
  top: 10px;
  left: 10px;
  border: none;
  text-align: center;
  ${color};
  cursor: pointer;
  position: absolute;
  &:active,
  &:hover,
  &:focus {
    outline: 0;
    box-shadow: 0px 0px 17px -8px rgba(255, 255, 255, 0.85);
  }
`;

const BackLabel = styled.span`
  ${color}
  ${typography}
`;

function BackButton(props) {
  return (
    <Button
      bg={"input.buttonGreen"}
      fontFamily={"fontStandard"}
      to={props.to}
      hidebutton={props.hideButton}
    >
      <ArrowIcon
        right={props.right}
        padding={["4px", "5px"]}
        borderColor={"border.white"}
        borderBottomWidth={[4, 5]}
        borderRightWidth={[4, 5]}
      />
      <BackLabel fontSize={["1.3rem", "1.6rem"]} color={"font.white"}>
        Back
      </BackLabel>
    </Button>
  );
}

export default BackButton;
