import React, { Component } from "react";
import "./SearchResults.scss";

import { Link } from "react-router-dom";

class SearchResults extends Component {
  render() {
    return (
      <div className='searchResultsBox'>
        <h2>SEARCH RESULTS</h2>
        <hr></hr>
        <ul className='searchResults'>
          <li>
            <Link to={"/products/tshirts/20"}> #STUD </Link>
          </li>
          <li>
            <Link to={"/products/tshirts/20"}>#PEACYL </Link>
          </li>
          <li>
            <Link to={"/products/tshirts/20"}>#SHOUT </Link>
          </li>
          <li>
            <Link to={"/products/tshirts/20"}>#AKIRA </Link>
          </li>
        </ul>
      </div>
    );
  }
}
export default SearchResults;
