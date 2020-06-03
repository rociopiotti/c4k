import React, { Component } from "react";
import "./CartList.scss";

// COMPONENTS
import CartItem from "../CartItem/CartItem";
import CartEmpty from "../CartEmpty/CartEmpty";

//CONTEXT
import PageManagerContext from "../../context/pageManager-context";

class CartList extends Component {
  static contextType = PageManagerContext;

  createList() {
    const { cart, handleDataBase } = this.context;

    if (cart.length === 0) {
      return <CartEmpty />;
    }

    const cartIds = cart.map((cartEl) => {
      return cartEl.id;
    });

    const cartListItems = handleDataBase.filter((product) => {
      return cartIds.includes(product.id);
    });

    const finalItems = cartListItems.map((element, index) => {
      return {
        ...element,
        userSelection: {
          size: cart[index].size,
          color: cart[index].colors,
          quantity: cart[index].quantity,
        },
      };
    });

    const listItems = finalItems.map((item) => (
      <li key={item.id} className='cartItemElement'>
        <CartItem
          data={item}
          onCartItemClick={this.props.onCartItemClick}
          onRemoveClick={this.handleRemoveFromCart.bind(this)}
          onAddClick={this.handleAddToWishList.bind(this)}
        />
      </li>
    ));

    return <ul className='cartItemList'>{listItems}</ul>;
  }

  render() {
    console.log("-----ADD TO WISH LIST", this.state.wishList);

    console.log("-----REMOVE FROM LIST", this.state.removeFromCart);

    return <div className='cartItemListBox'>{this.createList()}</div>;
  }
}
export default CartList;
