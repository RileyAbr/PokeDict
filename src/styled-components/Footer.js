import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
import { color } from "styled-system";

const FooterBox = styled.div`
  ${color}
  line-height: 1.2rem;
  margin-top: 15px;
  padding: 11px 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  min-height: 2.5rem;
`;

const FooterInternalLink = styled(Link)`
  text-decoration: underline;
  display: inline-block;
  word-wrap: normal;
  &:hover,
  &:focus,
  &:active {
    ${color}
  }
`;

const FooterExternalLink = styled.a`
  text-decoration: underline;
  display: inline-block;
  word-wrap: normal;
  &:hover,
  &:focus,
  &:active {
    ${color}
  }
`;

const FooterDivider = styled.span`
  margin: 0 0.2em;
  &:before {
    content: "|";
  }
`;

function Footer(props) {
  return (
    <FooterBox color={"font.white"} bg={"input.buttonGreen"}>
      <FooterInternalLink color={"font.grey"} to={"/"}>
        Home{" "}
      </FooterInternalLink>{" "}
      <FooterDivider />
      Created By&nbsp;
      <FooterExternalLink
        color={"font.grey"}
        href="https://www.rileyabrahamson.com"
      >
        Riley Abrahamson
      </FooterExternalLink>
    </FooterBox>
  );
}

export default Footer;
