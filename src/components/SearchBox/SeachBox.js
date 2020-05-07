import React from "react";
import "./SearchBox.scss";
import Icon from "../Icon/Icon";

//ANMATION
import { TweenLite } from "gsap";
import { Timeline } from "gsap/gsap-core";
class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.inputSearchBox = null;
    this.state = {
      mode: "OPEN",
    };
  }

  toggle() {
    const { mode } = this.state;

    const newMode = mode === "OPEN" ? "CLOSE" : "OPEN";

    this.setState({
      mode: newMode,
    });
  }

  handleSearchContent(SearchInContent) {
    console.log("Click en el boton que:", SearchInContent);
  }
  handleCloseSearchBox() {
    this.props.onCloseClick(null);
  }
  handleInputChange(event) {
    console.log("Ingreso texto");
  }

  render() {
    return (
      <div className="searchBox">
        <div className="searchIcon">
          <button
            onClick={() => {
              this.handleSearchContent("SearchInContent");
            }}>
            <Icon type="search" />
          </button>
        </div>

        <input
          type="text"
          placeholder="SEARCH PRODUCTS"
          className="searchField"
          onChange={this.handleInputChange}></input>
        <button
          onClick={() => {
            this.handleCloseSearchBox("CloseNav");
          }}
          className="closeIcon">
          <Icon type="remove" />
        </button>
      </div>
    );
  }
}

export default SearchBox;
