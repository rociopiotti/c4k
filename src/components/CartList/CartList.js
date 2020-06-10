import React, { Component } from "react";
import "./CartList.scss";

// COMPONENTS
import CartItem from "../CartItem/CartItem";
import CartEmpty from "../CartEmpty/CartEmpty";
import EstimatedTotal from "../EstimatedTotal/EstimatedTotal";
import BtnPromoCode from "../BtnPromoCode/BtnPromoCode";

//ROUTER
import { Link } from "react-router-dom";

//CONTEXT
import PageManagerContext from "../../context/pageManager-context";

class CartList extends Component {
  static contextType = PageManagerContext;

  state = {
    items: [],
    quantity: [],
  };

  handleQuantity(value, userSelection) {
    return value;
  }

  createList() {
    const listItems = this.state.items.map((item, index) => (
      <li key={item.id} className='cartItemElement'>
        <CartItem
          data={item}
          index={index}
          handleQuantity={this.handleQuantity}
          onCartItemClick={this.props.onCartItemClick}
        />
      </li>
    ));

    return <ul className='cartItemList'>{listItems}</ul>;
  }

  setItems() {
    const { cart, handleDataBase } = this.context;

    const cartIds = cart.map((cartEl) => {
      return cartEl.id;
    });

    const cartListItems = handleDataBase.filter((product) => {
      return cartIds.includes(product.id);
    });

    const items = cartListItems.map((element, index) => {
      return {
        ...element,
        userSelection: {
          size: cart[index].size,
          color: cart[index].colors,
          quantity: cart[index].quantity,
        },
      };
    });

    this.setState({
      items,
    });
  }

  componentDidMount() {
    this.setItems();
  }

  componentDidUpdate(nextProps, nextState) {
    if (this.context.cart.length !== this.state.items.length) {
      this.setItems();
    }
  }

  render() {
    const { items } = this.state;
    const { showCheckoutButton } = this.props;

    if (items.length === 0) {
      return <CartEmpty />;
    }

    const checkoutButton = showCheckoutButton ? (
      <Link
        to='/checkout'
        className='btnCheckout'
        onClick={this.props.onCartItemClick}>
        CHECKOUT
      </Link>
    ) : null;

    return (
      <>
        <div className='cartItemListBox'>
          {this.createList()}
          <BtnPromoCode />
          <EstimatedTotal items={items} />
          {checkoutButton}
        </div>
      </>
    );
  }
}
export default CartList;
