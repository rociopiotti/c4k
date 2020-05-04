import React from "react"
import "./SearchStores.scss"
import Icon from "../Icon/Icon"

class SearchStores extends React.Component {
  handleSearchStore() {
    this.props.onSearcBtnClick()
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
            this.handleSearchStore()
          }}
          className="btnSearchStores">
          <Icon  type="search"/>
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
          <Icon type="list" />
        </button>
        <button
          onClick={() => {
            this.handleShowStoreMap()
          }}
          className="btnMapStores">
          <Icon type="map"/>
        </button>
      </div>
    )
  }
}

export default SearchStores
