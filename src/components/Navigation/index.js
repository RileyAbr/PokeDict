import React from "react";
import { Link, useHistory, withRouter } from "react-router-dom";
import styled from "styled-components";

import "./styles.css";

// Styled Components
import ArrowButton from "../../styled-components/ArrowButton";

// Utilites import
import { backPageCalculation, forwardPageCalculation } from "../../Utils";

const NavWrapper = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;
`;

function Navigation(props) {
  // This local const is what the search bar uses to push to the url and refresh it with search values
  const history = useHistory();

  const backPageNumber = backPageCalculation(props.currentPage, props.maxPages);

  const forwardPageNumber = forwardPageCalculation(
    props.currentPage,
    props.maxPages
  );

  const backPageValue = `${backPageNumber}/${
    props.match.params.searchValue || ""
  }`;

  const forwardPageValue = `${forwardPageNumber}/${
    props.match.params.searchValue || ""
  }`;

  const handleInputSubmit = (event) => {
    event.preventDefault();
    const searchValue = new FormData(event.target).get("searchValue");
    history.push("/home/" + 1 + "/" + searchValue);
  };

  const clearInput = (event) => {
    //   This isn't the React-iest way to do this, but it works pretty well
    document.getElementById("search-form").reset();
  };

  return (
    <NavWrapper>
      <ArrowButton
        to={"/home/" + backPageValue}
        hideButton={props.currentPage <= 1}
      />
      <form
        className="nav-search-form"
        onSubmit={handleInputSubmit}
        autoComplete="off"
        id="search-form"
      >
        <input
          type="text"
          className="nav-search-input"
          placeholder="Pokédex"
          aria-label="Search for a specific pokemon"
          name="searchValue"
        ></input>

        <Link to={"/home/" + 1} onClick={clearInput}>
          Clear
        </Link>
      </form>
      <ArrowButton
        right
        to={"/home/" + forwardPageValue}
        hideButton={props.currentPage === props.maxPages}
      />
    </NavWrapper>
  );
}

export default withRouter(Navigation);
