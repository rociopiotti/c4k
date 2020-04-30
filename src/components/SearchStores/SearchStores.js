import React from "react"
import "./SearchStores.scss"
import Icon from "../Icon/Icon"

class SearchStores extends React.Component {
  handleSearchStore(Search) {
    console.log("Click en el boton que busca la tienda:", Search)
  }
  handleShowStoreList() {
    this.props.onSearchDisplayClick("storeList")
  }
  handleShowStoreMap() {
    this.props.onSearchDisplayClick("storeMap")
  }
  render() {
    return (
      <div className="searchStoresBox">
        <button
          onClick={() => {
            this.handleSearchStore("Search")
          }}
          className="btnSearchStores">
          <Icon />
        </button>
        <input
          type="text"
          id="searchStoreInput"
          placeholder="SEARCH STORES"
          className="searchStoreInput"
        />
        <button
          onClick={() => {
            this.handleShowStoreList()
          }}
          className="btnListStores">
          <Icon />
        </button>
        <button
          onClick={() => {
            this.handleShowStoreMap()
          }}
          className="btnMapStores">
          <Icon />
        </button>
      </div>
    )
  }
}

export default SearchStores
