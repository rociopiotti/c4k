import React from "react"
import "./SearchBox.scss"
import Icon from "../Icon/Icon"

class SearchBox extends React.Component {
  handleSearchContent(SearchInContent) {
    console.log("Click en el boton que:", SearchInContent)
  }
  handleCloseSearchBox() {
    this.props.onCloseClick(null)
  }
  handleInputChange(event) {
    console.log("Ingreso texto")
  }

  render() {
    return (
      <div className="searchBox">
        <div className="searchIcon">
          <button
            onClick={() => {
              this.handleSearchContent("SearchInContent")
            }}>
            <Icon />
          </button>
        </div>

        <input
          type="text"
          placeholder="SEARCH PRODUCTS"
          className="searchField"
          onChange={this.handleInputChange}></input>
        <button
          onClick={() => {
            this.handleCloseSearchBox("CloseNav")
          }}
          className="closeIcon">
          <Icon />
        </button>
      </div>
    )
  }
}

export default SearchBox
