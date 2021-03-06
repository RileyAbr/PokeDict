import React from "react";
import styled from "styled-components";

const LoadingBar = styled.div`
  width: 100%;
  text-align: center;
  font-size: 1.75rem;
  padding: 10px 0;
`;

const LoadingIconBox = styled.div`
  width: 120px;
  height: 120px;
  margin: 0 auto;
  padding: 10px;
  animation: infiniteRotate 1s linear infinite;

  @keyframes infiniteRotate {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

function LoadingIcon() {
  return (
    <LoadingIconBox>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 700 700"
        x="0px"
        y="0px"
      >
        <path
          id="Layer"
          fill="#000000"
          d="M350.18 699.64C156.63 699.64 0.18 543.19 0.18 349.64C0.18 156.09 156.63 -0.37 350.18 -0.37C543.73 -0.37 700.18 156.09 700.18 349.64C700.18 543.19 543.73 699.64 350.18 699.64Z"
        />
        <g id="Layer">
          <path
            id="Layer"
            fillRule="evenodd"
            fill="#ffffff"
            d="M477.44 375.69C465.38 434.93 412.98 479.51 350.18 479.51C287.37 479.51 234.98 434.93 222.92 375.69L42.41 375.69C55.64 534.08 188.37 658.51 350.18 658.51C511.99 658.51 644.72 534.08 657.95 375.69L477.44 375.69Z"
          />
          <path
            id="Layer"
            fillRule="evenodd"
            fill="#ffffff"
            d="M441.06 349.64C441.06 399.83 400.37 440.52 350.18 440.52C299.99 440.52 259.3 399.83 259.3 349.64C259.3 299.44 299.99 258.76 350.18 258.76C400.37 258.76 441.06 299.44 441.06 349.64ZM395.01 349.64C395.01 324.88 374.94 304.8 350.18 304.8C325.42 304.8 305.34 324.88 305.34 349.64C305.34 374.4 325.42 394.47 350.18 394.47C374.94 394.47 395.01 374.4 395.01 349.64Z"
          />
        </g>
        <path
          id="Layer"
          fillRule="evenodd"
          fill="#ed1c24"
          d="M350.18 219.76C412.98 219.76 465.38 264.34 477.44 323.59L657.95 323.59C644.72 165.19 511.99 40.77 350.18 40.77C188.37 40.77 55.64 165.19 42.41 323.59L222.92 323.59C234.98 264.34 287.37 219.76 350.18 219.76Z"
        />
      </svg>
    </LoadingIconBox>
  );
}

function Loading(props) {
  return (
    <LoadingBar>
      <LoadingIcon />
      Loading...
    </LoadingBar>
  );
}

export default Loading;
