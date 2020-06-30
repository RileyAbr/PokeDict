import styled from "styled-components";
import { border } from "styled-system";

export default styled.i`
  ${border};
  border-width: 0 5px 5px 0;
  border-style: solid;
  display: inline-block;
  padding: 5px;
  position: relative;
  top: 26px;

  /* Change arrow direction left/right */
  /* Left is default */
  transform: rotate(${(props) => (props.right ? "-45deg" : "135deg")});
  -webkit-transform: rotate(${(props) => (props.right ? "-45deg" : "135deg")});
`;
