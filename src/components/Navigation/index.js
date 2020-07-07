import React, { useState, useEffect } from "react";
import { Link, useHistory, withRouter } from "react-router-dom";
import styled from "styled-components";
import { color, typography } from "styled-system";

// Styled Components
import ArrowButton from "../../styled-components/ArrowButton";

// Utilites import
import { backPageCalculation, forwardPageCalculation } from "../../Utils";

// Styled Components
const NavWrapper = styled.nav`
  padding: 10px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;
`;

const SearchForm = styled.form`
  min-width: 0;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  ${color};
  &:focus-within {
    outline: 0;
    box-shadow: 0px 0px 17px -8px rgba(255, 255, 255, 0.85);
  }
`;

const SearchInput = styled.input`
  width: 100%;
  ${color};
  ${typography};
  border: none;
  border-radius: 4px;
  padding: 10px 5px;
  &::placeholder {
    ${color}
  }
`;

const ClearButton = styled(Link)`
  ${color};
  ${typography};
  font-size: 2.5rem;
  padding: 10px 15px;
  margin: 10px 10px;
  visibility: hidden;
  ${(props) => {
    if (props.isvisible) {
      return `visibility: visible;`;
    }
  }}
`;

// Main Component
function Navigation(props) {
  // This local const is what the search bar uses to push to the url and refresh it with search values
  const history = useHistory();

  const [searchValue, setSearchValue] = useState("");
  const [showClearButton, setShowClearButton] = useState(false);

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

  useEffect(() => {
    console.log(searchValue);
    if (searchValue !== "") {
      setShowClearButton(true);
    } else {
      setShowClearButton(false);
    }
  }, [searchValue]);

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleInputSubmit = (event) => {
    event.preventDefault();
    history.push("/home/" + 1 + "/" + searchValue);
  };

  const clearInput = (event) => {
    //   This isn't the React-iest way to do this, but it works pretty well
    setSearchValue("");
    document.getElementById("search-form").reset();
  };

  return (
    <NavWrapper>
      <ArrowButton
        to={"/home/" + backPageValue}
        hideButton={props.currentPage <= 1 ? 1 : 0}
      />
      <SearchForm
        onSubmit={handleInputSubmit}
        autoComplete="off"
        id="search-form"
        bg={"input.buttonGreen"}
      >
        <SearchInput
          type="text"
          placeholder="Pokédex"
          aria-label="Search for a specific pokemon"
          name="searchValue"
          color={"font.white"}
          bg={"input.buttonGreen"}
          fontSize={["3rem", "5rem"]}
          onChange={handleInputChange}
        ></SearchInput>
        <ClearButton
          to={"/home/" + 1}
          onClick={clearInput}
          color={"font.white"}
          fontSize={["1rem", "2.5rem"]}
          isvisible={showClearButton ? 1 : 0}
        >
          X
        </ClearButton>
      </SearchForm>
      <ArrowButton
        right
        to={"/home/" + forwardPageValue}
        hideButton={props.currentPage === props.maxPages ? 1 : 0}
      />
    </NavWrapper>
  );
}

export default withRouter(Navigation);
