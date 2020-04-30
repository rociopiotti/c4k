import React from "react"
import "./Stores.scss"
import SearchStore from "../SearchStores/SearchStores"
import StoreListItem from "../StoreListItem/StoreListItem"
import StoreMap from "../StoreMap/StoreMap"

class Stores extends React.Component {
  state = {
    currentMode: "storeAndMap",
    currentSearchState: false
  }

  handleSearchStores(newState) {
    this.setState({
      currentMode: newState,
    })
  }
  setMode(displayModeType) {
    let modeDisplay
    switch (displayModeType) {
      case "storeAndMap":
        modeDisplay = (
          <div className="displayModeBox">
            <StoreListItem /> <StoreMap />
          </div>
        )
        break
      case "storeList":
        modeDisplay = (
          <div className="displayListBox">
            <StoreListItem />
          </div>
        )
        break
      case "storeMap":
        modeDisplay = (
          <div className="displayMapBox">
            <StoreMap />
          </div>
        )
        break
      default:
        modeDisplay = null
        break
    }
    return modeDisplay
  }
  handleSearchBtnStores(newSearchState) {
    this.setState({
      currentSearchState: true,
    })
  }
  render() {
    console.log("----> CURRENT MODE:", this.state.currentMode)
    console.log("----> CURRENT DISPLAY:", this.state.displayMode)
    console.log("-----> CURRENT STATE SEARCH:", this.state.currentSearchState)

    return (
      <div className="storePageBox">
        <h2>#STORES</h2>
        <div className="storePage">
          <SearchStore
            onSearchDisplayClick={this.handleSearchStores.bind(this)}
            onSearcBtnClick={this.handleSearchBtnStores.bind(this)}
          />
          {this.setMode(this.state.currentMode)}
        </div>
      </div>
    )
  }
}

export default Stores
