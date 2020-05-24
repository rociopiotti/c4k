import React from "react";
import "./CartItemList.scss";
import CartItem from "../CartItem/CartItem";

class CartItemList extends React.Component {
  render() {
    return (
      <div className="cartItemListBox">
        <ul className="cartItemList">
          <li className="cartItemElement">
            <CartItem onChangeSection = {this.props.onChangeSection} />
          </li>
          {/* <li className="cartItemElement">
            <CartItem />
          </li> */}
        </ul>
      </div>
    );
  }
}

export default CartItemList;
