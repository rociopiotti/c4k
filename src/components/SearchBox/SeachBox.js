import React from "react";
import "./SearchBox.scss";
import Icon from "../Icon/Icon";

//CONTEXT
import PageManagerContext from "../../context/pageManager-context";

// ROUTER
import { Link } from "react-router-dom";

//ANMATION
import { TweenLite, Back } from "gsap";

// EASING
const ease = Back.easeOut.config(1);

class SearchBox extends React.Component {
  static contextType = PageManagerContext;

  constructor(props) {
    super(props);
    this.SearchBox = null;
    this.myTween = null;

    this.state = {
      mode: "OPEN",
      keyword: "",
      searchResult: [],
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSearchContent = this.handleSearchContent.bind(this);
  }

  toggle() {
    const { mode } = this.state;
    const newMode = mode === "OPEN" ? "CLOSE" : "OPEN";
    this.setState({
      mode: newMode,
    });
  }

  handleAnimation(value) {
    const currentState = value === "open" ? "-86%" : "+=86%";
    const delayAnimation = 0.3;
    const posAnimation = currentState;
    this.myTween = TweenLite.to(this.SearchBox, delayAnimation, {
      ease: ease,
      x: posAnimation,
    });
  }

  handleInputChange(event) {
    const keyword = event.target.value;
    this.setState({
      keyword,
    });
  }

  handleSearchContent() {
    if (this.state.keyword === "" || this.state.keyword.length < 3) {
      return;
    } else {
      const wordToSearch = this.state.keyword;

      const wordToSearchLowerCase = wordToSearch.toLowerCase();

      const productDB = this.context.handleDataBase;

      const searchResult = productDB.filter((element) => {
        const tagsJoined = element.tags.join(" ");

        tagsJoined.toLowerCase();

        const result = tagsJoined.includes(wordToSearchLowerCase);

        return result;
      });

      this.setState({
        searchResult,
      });
    }
    this.context.handleSearchProducts(this.state.searchResult);
  }

  render() {
    // console.log("this.state.searchResult", this.state.searchResult);

    return (
      <>
        <div className='searchBoxBackground'>
          <div className='searchBox' ref={(div) => (this.SearchBox = div)}>
            <Link
              to={"/searchresults"}
              onClick={() => {
                this.handleAnimation("open");
                this.handleSearchContent();
              }}
              className='searchIcon'>
              <Icon type='search' />
            </Link>
            <input
              type='text'
              value={this.state.keyword}
              placeholder='SEARCH PRODUCTS'
              className='searchField'
              onChange={this.handleInputChange}
              onKeyDown={this.handleSearchContent}></input>
            <Link
              to={"/"}
              onClick={() => {
                this.handleAnimation("close");
              }}
              className='closeIcon'>
              <Icon type='remove' />
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default SearchBox;
