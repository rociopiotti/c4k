import React from "react"
import "./CartItem.scss"
import Icon from "../Icon/Icon"
import itemImg from "../../img/trousers-white1.png"

class CartItem extends React.Component {
  state = {
    currentSize: "SIZE",
    currentQuantity: "1",
    wishList: false,
    removeFromCart: false,
  }
  handleSeeProductBox() {
    console.log("Click en Imagen. Cerrar Nav. Mostrar Product Box")
  }
  handleAddToWishList() {
    this.setState({
      wishList: true,
    })
  }
  handleRemoveFromCart() {
    this.setState({
      removeFromCart: true,
    })
  }
  handleDropwnSize(newSize) {
    this.setState({
      currentSize: newSize,
    })
  }
  setSize(sizeType) {
    let itemSize
    switch (sizeType) {
      case "SIZE":
        itemSize = "SIZE"
        break
      case "SMALL":
        itemSize = "SMALL"
        break
      case "MEDIUM":
        itemSize = "MEDIUM"
        break
      case "LARGE":
        itemSize = "LARGE"
        break
    }
    return itemSize
  }
  handleDropwnQuantity(newQuantity) {
    this.setState({
      currentQuantity: newQuantity,
    })
  }
  setQuantity(quantityType) {
    let itemQuantity
    switch (quantityType) {
      case "1":
        itemQuantity = "1"
        break
      case "2":
        itemQuantity = "2"
        break
      case "3":
        itemQuantity = "3"
        break
      case "4":
        itemQuantity = "4"
        break
      case "5":
        itemQuantity = "5"
        break
      case "6":
        itemQuantity = "6"
        break
      case "7":
        itemQuantity = "7"
        break
      case "8":
        itemQuantity = "8"
        break
      case "9":
        itemQuantity = "9"
        break
      case "10":
        itemQuantity = "10"
        break
    }
    return itemQuantity
  }
  render() {
    console.log("-->CURRENT SIZE:", this.state.currentSize)
    console.log("--->CURRENT QUANTITY:", this.state.currentQuantity)
    console.log("---->WISHLIST BTN", this.state.wishList)
    console.log("----->REMOVE FROM CART BTN", this.state.removeFromCart)

    const itemSize = this.setSize(this.state.currentSize)
    const itemQuantity =this.setQuantity(this.state.currentQuantity)
    
    return (
      <div className="cartItemBox">
        <div className="column1">
          <a
            onClick={() => {
              this.handleSeeProductBox()
            }}
            className="cartItemImgBox">
            <img src={itemImg} alt="trousers item" className="cartItemImg" />
          </a>
          <button
            onClick={() => {
              this.handleAddToWishList()
            }}
            className="btnAddItemWishList">
            <Icon type="heart"/>
          </button>
        </div>
        <div className="column2">
          <button
            onClick={() => {
              this.handleRemoveFromCart()
            }}
            className="btnRemoveItem">
            <Icon type="remove" />
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
            <button className="dropbtn">
              <p>{itemSize}</p>
              <Icon className="dropDownIcon" />
            </button>
            <ul className="dropdownContentSize">
              <li>
                <button
                  onClick={() => {
                    this.handleDropwnSize("SMALL")
                  }}>
                  S
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    this.handleDropwnSize("MEDIUM")
                  }}>
                  M
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    this.handleDropwnSize("LARGE")
                  }}>
                  L
                </button>
              </li>
            </ul>
          </div>
          <div className="dropdownBoxCart">
            <button className="dropbtn">
              <p>{itemQuantity}</p>
              <Icon className="dropDownIcon" />
            </button>
            <ul className="dropdownContentSize">
              <li>
                <button
                  onClick={() => {
                    this.handleDropwnQuantity("1")
                  }}>
                  1
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    this.handleDropwnQuantity("2")
                  }}>
                  2
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    this.handleDropwnQuantity("3")
                  }}>
                  3
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    this.handleDropwnQuantity("4")
                  }}>
                  4
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    this.handleDropwnQuantity("5")
                  }}>
                  5
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    this.handleDropwnQuantity("6")
                  }}>
                  6
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    this.handleDropwnQuantity("7")
                  }}>
                  7
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    this.handleDropwnQuantity("8")
                  }}>
                  8
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    this.handleDropwnQuantity("9")
                  }}>
                  9
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    this.handleDropwnQuantity("10")
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
