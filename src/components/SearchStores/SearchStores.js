import React from "react"
import "./SearchStores.scss"
import Icon from "../Icon/Icon"

class SearchStores extends React.Component {
  handleSearchStore(Search) {
    console.log("Click en el boton que busca la tienda:", Search)
  }
  handleShowStoreList(List) {
    console.log("Click en el boton que muestra en pantalla:", List)
  }
  handleShowStoreMap(Map) {
    console.log("Click en el boton que muestra en pantalla:", Map)
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
            this.handleShowStoreList("List")
          }}
          className="btnListStores">
          <Icon />
        </button>
        <button
          onClick={() => {
            this.handleShowStoreMap("Map")
          }}
          className="btnMapStores">
          <Icon />
        </button>
      </div>
    )
  }
}

export default SearchStores
