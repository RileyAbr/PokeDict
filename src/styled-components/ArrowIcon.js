import styled from "styled-components";

export default styled.i`
  border: solid var(--font-white);
  border-width: 0 5px 5px 0;
  display: inline-block;
  padding: 5px;
  position: relative;
  top: 26px;

  /* Change arrow direction left/right */
  /* Left is default */
  transform: rotate(${(props) => (props.right ? "-45deg" : "135deg")});
  -webkit-transform: rotate(${(props) => (props.right ? "-45deg" : "135deg")});
`;
