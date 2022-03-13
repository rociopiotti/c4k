import React, { Component } from "react";
import "./SearchResults.scss";

// ROUTER
import { Link } from "react-router-dom";
//CONTEXT
import PageManagerContext from "../../context/pageManager-context";

class SearchResults extends Component {
  static contextType = PageManagerContext;

  createList() {
    const { searchResultList } = this.context;

    const resultList = searchResultList.map(
      ({ id, category, title }, index) => {
        return (
          <li key={index}>
            <Link to={`/products/${category}/${id}`}>{title}</Link>
          </li>
        );
      }
    );

    return <ul className='searchResults'>{resultList}</ul>;
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className='searchResultsBox'>
        <h2>SEARCH RESULTS</h2>
        <hr></hr>
        <div>{this.createList()}</div>
      </div>
    );
  }
}
export default SearchResults;
