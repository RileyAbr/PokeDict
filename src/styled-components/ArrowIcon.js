import styled from "styled-components";
import { border, space, position, layout } from "styled-system";

export default styled.i`
  ${space};
  ${position}
  /* border-width: 0 5px 5px 0; */
  border-style: solid;
  ${border};
  display: inline-block;
  /* padding: 5px; */
  position: relative;

  /* Change arrow direction left/right */
  /* Left is default */
  transform: rotate(${(props) => (props.right ? "-45deg" : "135deg")});
  -webkit-transform: rotate(${(props) => (props.right ? "-45deg" : "135deg")});
`;
