import React from "react";

import "./styles.css";

// Styled Components
import ArrowButton from "../../elements/ArrowButton";

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.props.onSearchBarChange(event.target.value);
  }

  render() {
    return (
      <nav className="nav-wrapper">
        <ArrowButton to={"/home/" + this.props.backPageValue}></ArrowButton>
        <form className="nav-search-form">
          <input
            className="nav-search-input"
            type="text"
            placeholder="Pokédex"
            // This ensures that the input value is actually passed off to searchBarOnChange()
            ref={(element) => {
              this.input = element;
            }}
            onChange={this.handleInputChange}
          ></input>
        </form>
        <ArrowButton
          to={"/home/" + this.props.forwardPageValue}
          right
        ></ArrowButton>
      </nav>
    );
  }
}

export default Navigation;
