import React from "react";

import ArrowButtonContainer from "./ArrowButtonContainer";
import ArrowIcon from "./ArrowIcon";

function ArrowButton(props) {
  return (
    <ArrowButtonContainer to={props.to} hidebutton={props.hideButton}>
      <ArrowIcon
        right={props.right}
        padding={["4px", "5px"]}
        borderColor={"border.white"}
        borderBottomWidth={[4, 5]}
        borderRightWidth={[4, 5]}
        top={[15, 26]}
      />
      <ArrowIcon
        right={props.right}
        padding={["4px", "5px"]}
        borderColor={"border.white"}
        borderBottomWidth={[4, 5]}
        borderRightWidth={[4, 5]}
        top={[15, 26]}
      />
    </ArrowButtonContainer>
  );
}

export default ArrowButton;
