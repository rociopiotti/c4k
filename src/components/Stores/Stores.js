import React from "react"
import "./Stores.scss"
import SearchStore from "../SearchStores/SearchStores"
import StoreListItem from "../StoreListItem/StoreListItem"
import StoreMap from "../StoreMap/StoreMap"

class Stores extends React.Component {
  state = {
    currentMode: "storeAndMap",
  }

  handleSearchStores(newState) {
    console.log("click en:", newState)
    this.setState({
      currentMode: newState,
    })
    console.log("Nuevo estado:", newState)
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
  render() {
    console.log("----> CURRENT MODE:", this.state.currentMode)
    console.log("----> CURRENT DISPLAY:", this.state.displayMode)

    return (
      <div className="storePageBox">
        <h2>#STORES</h2>
        <div className="storePage">
          <SearchStore
            onSearchDisplayClick={this.handleSearchStores.bind(this)}
          />
          {this.setMode(this.state.currentMode)}
        </div>
      </div>
    )
  }
}

export default Stores
