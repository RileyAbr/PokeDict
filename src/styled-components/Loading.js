import React from "react";
import styled from "styled-components";

const LoadingBar = styled.p`
  width: 100%;
  text-align: center;
  font-size: 1.75rem;
  padding: 8px 0;
`;

function Loading(props) {
  return <LoadingBar>Loading...</LoadingBar>;
}

export default Loading;
