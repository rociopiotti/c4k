import React, { Component } from "react";
import "./SearchStores.scss";
import Icon from "../Icon/Icon";

//CONTEXT
import PageManagerContext from "../../context/pageManager-context";

class SearchStores extends Component {
  static contextType = PageManagerContext;

  handleSearchStore() {
    this.context.onSearcBtnClick();
  }
  handleShowStoreList() {
    this.context.onSearchDisplayClick("storeList");
  }
  handleShowStoreMap() {
    this.context.onSearchDisplayClick("storeMap");
  }
  render() {
    return (
      <div className='searchStoresBox'>
        <button
          onClick={() => {
            this.handleSearchStore();
          }}
          className='btnSearchStores'>
          <Icon type='search' />
        </button>
        <input
          type='text'
          id='searchStoreInput'
          placeholder='SEARCH STORES'
          className='searchStoreInput'
        />
        <button
          onClick={() => {
            this.handleShowStoreList();
          }}
          className='btnListStores'>
          <Icon type='list' />
        </button>
        <button
          onClick={() => {
            this.handleShowStoreMap();
          }}
          className='btnMapStores'>
          <Icon type='map' />
        </button>
      </div>
    );
  }
}

export default SearchStores;
