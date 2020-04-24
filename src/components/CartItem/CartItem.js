import React from "react"
import "./CartItem.scss"
import Icon from "../Icon/Icon"
import itemImg from "../../img/trousers-white1.png"

class CartItem extends React.Component {
  handleAddToWishList(AddToWishList) {
    console.log("Click en el boton:", AddToWishList)
  }
  handleRemoveFromCart(RemoveFromCartList) {
    console.log("Click en el boton:", RemoveFromCartList)
  }

  handleClickOnDropdown(ClickDropdown) {
    console.log("Click en el boton:", ClickDropdown)
  }

  clickDropdownItem(id) {
    console.log("Click en el boton:", id)
  }
  render() {
    return (
      <div className="cartItemBox">
        <div className="column1">
          <a className="cartItemImgBox">
            <img src={itemImg} alt="trousers item" className="cartItemImg" />
          </a>
          <button
            onClick={() => {
              this.handleAddToWishList("AddToWishList")
            }}
            className="btnAddItemWishList">
            <Icon />
          </button>
        </div>
        <div className="column2">
          <button
            onClick={() => {
              this.handleRemoveFromCart("RemoveFromCartList")
            }}
            className="btnRemoveItem">
            <Icon />
          </button>
          <h3 className="cartItemTitle">#ITEM TITLE</h3>
          <div className="cartItemDescription">
            <p className="itemNumber">
              Art N°: <span></span>14575
            </p>
            <p className="itemColor">
              Color: <span></span> Grey
            </p>
            <p className="itemSize">
              Size: <span></span> M
            </p>
            <p className="itemTotal">
              Total: <span></span> €145
            </p>
          </div>

          <div className="dropdownBoxCart">
            <button
              onClick={() => {
                this.handleClickOnDropdown("ClickDropdown")
              }}
              className="dropbtn">
              <p>SIZE</p>
              <Icon className="dropDownIcon" />
            </button>
            <ul className="dropdownContentSize">
              <li>
                <button
                  onClick={() => {
                    this.clickDropdownItem("SMALL")
                  }}>
                  S
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    this.clickDropdownItem("MEDIUM")
                  }}>
                  M
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    this.clickDropdownItem("LARGE")
                  }}>
                  L
                </button>
              </li>
            </ul>
          </div>
          <div className="dropdownBoxCart">
            <button
              onClick={() => {
                this.handleClickOnDropdown("ClickDropdown")
              }}
              className="dropbtn">
              <p>1</p>
              <Icon className="dropDownIcon" />
            </button>
            <ul className="dropdownContentSize">
              <li>
                <button
                  onClick={() => {
                    this.clickDropdownItem("2")
                  }}>
                  2
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    this.clickDropdownItem("3")
                  }}>
                  3
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    this.clickDropdownItem("4")
                  }}>
                  4
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    this.clickDropdownItem("5")
                  }}>
                  5
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    this.clickDropdownItem("6")
                  }}>
                  6
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    this.clickDropdownItem("7")
                  }}>
                  7
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    this.clickDropdownItem("8")
                  }}>
                  8
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    this.clickDropdownItem("9")
                  }}>
                  9
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    this.clickDropdownItem("10")
                  }}>
                  10
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CartItem
