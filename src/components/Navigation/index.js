import React, { useState, useEffect } from "react";
import { Link, useHistory, withRouter } from "react-router-dom";
import styled from "styled-components";
import { color, typography } from "styled-system";

// Styled Components
import ArrowButton from "../../styled-components/ArrowButton";
import DoubleArrowButton from "../../styled-components/DoubleArrowButton";

// Utilites import
import { backPageCalculation, forwardPageCalculation } from "../../Utils";

// Styled Components
const NavWrapper = styled.nav`
    padding: 10px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: center;
    @media screen and (min-width: 40em) {
        flex-wrap: nowrap;
    }
`;

const SearchForm = styled.form`
    min-width: 0;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    ${color};
    position: relative;
    &:focus-within {
        outline: 0;
    }
`;

const SearchInput = styled.input`
    ${color};
    ${typography};
    width: 100%;
    border: none;
    padding: 10px 5px;
    &::placeholder {
        ${color}
    }
    order: 1;
`;

const ClearButton = styled(Link)`
    ${color};
    ${typography};
    font-size: 2rem;
    padding: 10px 15px;
    /* margin: 10px 10px; */
    visibility: hidden;
    ${(props) => {
        if (props.isvisible) {
            return `visibility: visible;`;
        }
    }}
    position: absolute;
    right: 0;
`;

// Main Component
function Navigation(props) {
    // This local const is what the search bar uses to push to the url and refresh it with search values
    const history = useHistory();

    const [searchValue, setSearchValue] = useState("");
    const [showClearButton, setShowClearButton] = useState(false);

    const backPageNumber = backPageCalculation(
        props.currentPage,
        props.maxPages
    );
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
        if (props.match.params.searchValue === undefined) {
            setShowClearButton(false);
        } else {
            setShowClearButton(true);
        }
    }, [props.match.params.searchValue]);

    const handleInputChange = (event) => {
        setSearchValue(event.target.value);
    };

    const handleInputSubmit = (event) => {
        event.preventDefault();
        history.push("/home/" + 1 + "/" + searchValue);
    };

    const clearInput = (event) => {
        document.getElementById("search-form").reset();
        setShowClearButton(false);
    };

    return (
        <NavWrapper>
            <DoubleArrowButton
                to={"/home/"}
                hideButton={props.currentPage <= 1 ? 1 : 0}
            />
            <ArrowButton
                to={"/home/" + backPageValue}
                hideButton={props.currentPage <= 1 ? 1 : 0}
            />
            <SearchForm
                onSubmit={handleInputSubmit}
                autoComplete="off"
                id="search-form"
                bg={"bg.inputs"}
            >
                <SearchInput
                    type="text"
                    placeholder="PokéDict"
                    aria-label="Search for a specific pokemon"
                    color={"font.white"}
                    bg={"bg.inputs"}
                    value={props.match.params.searchValue}
                    fontSize={["3rem", "5rem"]}
                    onChange={handleInputChange}
                ></SearchInput>
                <ClearButton
                    to={"/home/"}
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
            <DoubleArrowButton
                right
                to={"/home/" + props.maxPages}
                hideButton={props.currentPage === props.maxPages ? 1 : 0}
            />
        </NavWrapper>
    );
}

export default withRouter(Navigation);
