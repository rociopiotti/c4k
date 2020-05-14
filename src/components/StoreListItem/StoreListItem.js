import React from "react"
import "./StoreListItem.scss"
import StoreItem from "../StoreItem/StoreItem"
import SectionTransition from "../SectionTransition/SectionTransition"

class StoreListItem extends React.Component {
  handleShowStore (ID)  {
    // console.log("Click en el boton que muestra en mapa store con n°:", ID)
  }
  render() {
    return (
      <div className="storeListBox">
        <ul className="storeList">
          <li>
            <button
              onClick={() => {
                this.handleShowStore("ID 1")
              }}
              className="btnStoreItem">
              <StoreItem />
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                this.handleShowStore("ID 2")
              }}
              className="btnStoreItem">
              <StoreItem />
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                this.handleShowStore("ID 3")
              }}
              className="btnStoreItem">
              <StoreItem />
            </button>
          </li>
        </ul>
      </div>
    )
  }
}

export default StoreListItem
