import React from "react";
import { Link, useHistory, withRouter } from "react-router-dom";

import "./styles.css";

// Styled Components
import ArrowButton from "../../elements/ArrowButton";

// Utilites import
import { backPageCalculation, forwardPageCalculation } from "../../Utils";

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

  return (
    <nav className="nav-wrapper">
      <ArrowButton to={"/home/" + backPageValue}></ArrowButton>
      <form
        className="nav-search-form"
        onSubmit={handleInputSubmit}
        autocomplete="off"
      >
        <input
          className="nav-search-input"
          type="text"
          placeholder="Pokédex"
          name="searchValue"
        ></input>
      </form>
      <Link to={"/home/1"}>CLEAR</Link>
      <ArrowButton to={"/home/" + forwardPageValue} right></ArrowButton>
    </nav>
  );
}

export default withRouter(Navigation);
