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

    const resultList = searchResultList.map((element, index) => {
      const { id, category } = element;
      return (
        <li key={index}>
          <Link to={`/products/${category}/${id}`}>{element.title}</Link>
        </li>
      );
    });

    return <ul className='searchResults'>{resultList}</ul>;
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
