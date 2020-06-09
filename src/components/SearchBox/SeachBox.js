import React from "react";
import "./SearchBox.scss";
import Icon from "../Icon/Icon";

//ANMATION
import { TweenLite, Back } from "gsap";

const ease = Back.easeOut.config(1);

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.SearchBox = null;
    this.myTween = null;

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

  handleSearchContent() {
    const delayAnimation = 0.3;
    const posAnimation = "-86%";
    this.myTween = TweenLite.to(this.SearchBox, delayAnimation, {
      ease: ease,
      x: posAnimation,
    });
  }

  handleCloseSearchBox() {
    const delayAnimation = 0.3;
    const posAnimation = "+=86%";
    this.myTween = TweenLite.to(this.SearchBox, delayAnimation, {
      ease: ease,
      x: posAnimation,
    });
  }

  handleInputChange(event) {
    console.log("Ingreso texto");
  }

  render() {
    return (
      <div className="searchBoxBackground">
        <div className="searchBox" ref={(div) => (this.SearchBox = div)}>
          <button
            onClick={() => {
              this.handleSearchContent("SearchInContent");
            }}
            className="searchIcon">
            <Icon type="search" />
          </button>
          <input
            type="text"
            placeholder="SEARCH PRODUCTS"
            className="searchField"
            onChange={this.handleInputChange}></input>
          <button
            onClick={() => {
              this.handleCloseSearchBox(null);
            }}
            className="closeIcon">
            <Icon type="remove" />
          </button>
        </div>
      </div>
    );
  }
}

export default SearchBox;
