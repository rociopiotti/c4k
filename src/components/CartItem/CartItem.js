import React from "react";
import "./CartItem.scss";
import Icon from "../Icon/Icon";
import DropdownSize from "../DropdownSize/DropdownSize";
import itemImg from "../../img/trousers-white1.png";
import DropdownQuantity from "../DropdownQuantity/DropdownQuantity";

class CartItem extends React.Component {
  state = {
    wishList: false,
    removeFromCart: false,
  };

  handleSeeProductBox() {
    // console.log("Click en Imagen. Cerrar Nav. Mostrar Product Box");
  }

  handleAddToWishList() {
    this.setState({
      wishList: true,
    });
  }

  handleRemoveFromCart() {
    this.setState({
      removeFromCart: true,
    });
  }

  handleDropwnQuantity(newQuantity) {
    this.setState({
      currentQuantity: newQuantity,
    });
  }

  setQuantity(quantityType) {
    let itemQuantity;
    switch (quantityType) {
      case "1":
        itemQuantity = "1";
        break;
      case "2":
        itemQuantity = "2";
        break;
      case "3":
        itemQuantity = "3";
        break;
      case "4":
        itemQuantity = "4";
        break;
      case "5":
        itemQuantity = "5";
        break;
      case "6":
        itemQuantity = "6";
        break;
      case "7":
        itemQuantity = "7";
        break;
      case "8":
        itemQuantity = "8";
        break;
      case "9":
        itemQuantity = "9";
        break;
      case "10":
        itemQuantity = "10";
        break;
    }
    return itemQuantity;
  }
  render() {
    // console.log("---->WISHLIST BTN", this.state.wishList);
    // console.log("----->REMOVE FROM CART BTN", this.state.removeFromCart);

    return (
      <div className="cartItemBox">
        <div className="column1">
          <a
            onClick={() => {
              this.handleSeeProductBox();
            }}
            className="cartItemImgBox">
            <img src={itemImg} alt="trousers item" className="cartItemImg" />
          </a>
          <button
            onClick={() => {
              this.handleAddToWishList();
            }}
            className="btnAddItemWishList">
            <Icon type="heart" />
          </button>
        </div>
        <div className="column2">
          <button
            onClick={() => {
              this.handleRemoveFromCart();
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
          {/* TO DO: CORREGIR SUPERPOSICION DE DROPDOWNS */}
          <DropdownSize />
          <DropdownQuantity />
        </div>
      </div>
    );
  }
}

export default CartItem;
