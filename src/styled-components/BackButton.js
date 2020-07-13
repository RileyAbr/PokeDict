import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { color, layout, typography } from "styled-system";

import ArrowIcon from "./ArrowIcon";

const Button = styled.button`
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
  /* Hover and click animations */
  box-shadow: 0 5px
    ${(props) => {
      return props.theme.colors.bg.inputsShadow;
    }};
  &:hover,
  &:focus {
    box-shadow: 0 3px
      ${(props) => {
        return props.theme.colors.bg.inputsShadow;
      }};
  }
  &:active {
    box-shadow: none;
  }
`;

const BackLabel = styled.span`
  ${color}
  ${typography}
`;

function BackButton(props) {
  const history = useHistory();

  return (
    <Button
      bg={"bg.inputs"}
      fontFamily={"fontStandard"}
      onClick={() => history.goBack()}
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
