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
  }
  setState(displayModeType) {
    let displayMode
    switch (displayModeType) {
      case "storeAndMap":
        displayMode = (
          <div className="displayModeBox">
            <StoreListItem /> <StoreMap />
          </div>
        )
        break
      case "storeList":
        displayMode = <StoreListItem />

        break
      case "storeMap":
        displayMode = <StoreMap />
        break
      default:
        displayMode = null
        break
    }
    return displayMode
  }
  render() {
    console.log("------> CURRENT MODE:", this.state.currentMode)
    return (
      <div className="storePageBox">
        <h2>#STORES</h2>
        <div className="storePage">
          <SearchStore
            onSearchDisplayClick={this.handleSearchStores.bind(this)}
          />
          {this.setState(this.state.currentMode)}
        </div>
      </div>
    )
  }
}

export default Stores
