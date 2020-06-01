import React, { Component } from "react";
import "./CartList.scss";

// COMPONENTS
import CartItem from "../CartItem/CartItem";
import CartEmpty from "../CartEmpty/CartEmpty";

//CONTEXT
import PageManagerContext from "../../context/pageManager-context";

class CartList extends Component {
  static contextType = PageManagerContext;
  handleCartData() {
    const { cart } = this.context;

    if (cart.length === 0) {
      return <CartEmpty />;
    }

    //--------------------------------------------------------
    const cartIds = cart.map((cartEl) => {
      return cartEl.id;
    });

    const { handleDataBase } = this.context;

    // 2.1. Buscar coincidedncias y guardalas.
    const cartListItems = handleDataBase.filter((product) => {
      return cartIds.includes(product.id);
    });

    //--------------------------------------------------------
    const listItems = cartListItems.map((item) => (
      <li key={item.id} className='cartItemElement'>
        <CartItem data={item} onCartItemClick={this.props.onCartItemClick} />
      </li>
    ));

    return <ul className='cartItemList'>{listItems}</ul>;
  }
  render() {
    return <div className='cartItemListBox'>{this.handleCartData()}</div>;
  }
}
export default CartList;
