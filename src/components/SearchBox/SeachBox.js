import React from "react";
import "./SearchBox.scss";
import Icon from "../Icon/Icon";

//CONTEXT
import PageManagerContext from "../../context/pageManager-context";

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
      filteredData: [],
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  toggle() {
    const { mode } = this.state;
    const newMode = mode === "OPEN" ? "CLOSE" : "OPEN";
    this.setState({
      mode: newMode,
    });
  }

  handleOpenSearchBox() {
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
    const keyword = event.target.value;
    this.setState({
      keyword,
    });
    console.log(keyword);
  }

  handleSearchContent() {
    const wordToSearch = "trouser";

    // pasar palabra a buscar a lowercase
    const wordToSearchLowerCase = wordToSearch.toLowerCase();
    // PRODUCT DATABASE
    const productDB = this.context.handleDataBase;

    const productTags = productDB.filter((element) => {
      // se unen los tags en un mismo string con un espacio entre tag
      const tagsJoined = element.tags.join(" ");

      // pasar todos los tags a lower case
      tagsJoined.toLowerCase();

      // comparar entre la palabra buscada y los tags unidos.
      const result = tagsJoined.includes(wordToSearchLowerCase);

      // Hacer un array con los resultados true si es false return
      return result;
    });

    const searchResult = productTags.map((element, index) => {
      return element;
    });

    this.setState({
      searchResult,
    });
  }

  componentDidMount() {
    this.handleSearchContent();
  }

  render() {
    console.log(this.state.searchResult);
    return (
      <div className='searchBoxBackground'>
        <div className='searchBox' ref={(div) => (this.SearchBox = div)}>
          <button
            onClick={() => {
              this.handleOpenSearchBox();
            }}
            className='searchIcon'>
            <Icon type='search' />
          </button>
          <input
            type='text'
            value={this.state.keyword}
            placeholder='SEARCH PRODUCTS'
            className='searchField'
            onChange={this.handleInputChange}></input>
          <button
            onClick={() => {
              this.handleCloseSearchBox(null);
            }}
            className='closeIcon'>
            <Icon type='remove' />
          </button>
        </div>
      </div>
    );
  }
}

export default SearchBox;
