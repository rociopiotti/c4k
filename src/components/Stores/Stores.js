import React from "react"
import "./Stores.scss"
import SearchStore from "../SearchStores/SearchStores"
import StoreListItem from "../StoreListItem/StoreListItem"
import StoreMap from "../StoreMap/StoreMap"

class Stores extends React.Component {
  render() {
    return (
      <div className="storePageBox">
        <h2>#STORES</h2>
        <div className="storePage">
          <SearchStore />
          <StoreListItem />
          <StoreMap/>
        </div>
      </div>
    )
  }
}

export default Stores
