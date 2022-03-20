import React, {Component} from "react"
import "./StoreListItem.scss"
import { Item } from "./childs"

export class StoreListItem extends Component {
  handleShowStore (ID)  {
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
              <Item />
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                this.handleShowStore("ID 2")
              }}
              className="btnStoreItem">
              <Item />
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                this.handleShowStore("ID 3")
              }}
              className="btnStoreItem">
              <Item />
            </button>
          </li>
        </ul>
      </div>
    )
  }
};

