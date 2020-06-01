import React from "react";
import "./CartSlide.scss";

// COMPONENTS
import CartItem from "../CartItem/CartItem";
import CartEmpty from "../CartEmpty/CartEmpty";
import HeaderSlideCloseLeft from "../HeaderSlideCloseLeft/HeaderSlideCloseLeft";
import EstimatedTotal from "../EstimatedTotal/EstimatedTotal";
import BtnPromoCode from "../BtnPromoCode/BtnPromoCode";

//CONTEXT
import PageManagerContext from "../../context/pageManager-context";

//ROUTER
import { Link } from "react-router-dom";

class CartSlide extends React.Component {
  static contextType = PageManagerContext;

  constructor(props) {
    super(props);
    this.SlideBackground = null;
    this.NavCloseBackground = null;
    this.executeAnimation = this.executeAnimation.bind(this);
  }

  executeAnimation() {
    this.context.slideOutAnimation(
      "right",
      {
        backgroundRef: this.NavCloseBackground,
        wrapperRef: this.SlideBackground,
      },
      this.context.onSlideBtn
    );
  }

  componentDidMount() {
    this.context.slideInAnimation({
      backgroundRef: this.NavCloseBackground,
      wrapperRef: this.SlideBackground,
    });
  }

  handleCartData() {
    const { cart, itemsData } = this.context;

    if (cart.length === 0) {
      return <CartEmpty />;
    }

    //--------------------------------------------------------
    const cartIds = cart.map((cartEl) => {
      return cartEl.id;
    });

    //--------------------------------------------------------
    let allProducts = [];

    // 1. Iterar sobre el objecto database completo.
    // 2. Iterar sobre el array de cada categoria.
    for (let key in itemsData) {
      // base de datos > ingresar en bags > extraer el array
      // mergearlos en un nuevo array:
      allProducts = [...allProducts, ...itemsData[key]];
    }

    // 2.1. Buscar coincidedncias y guardalas.
    const cartListItems = allProducts.filter((product) => {
      return cartIds.includes(product.id);
    });

    //--------------------------------------------------------
    const listItems = cartListItems.map((item) => (
      <li key={item.id} className='cartItemElement'>
        <CartItem data={item} onCartItemClick={this.executeAnimation} />
      </li>
    ));

    return <ul className='cartItemList'>{listItems}</ul>;
  }

  render() {
    return (
      <div
        className='cartSlideBackground'
        ref={(div) => (this.SlideBackground = div)}>
        <div
          ref={(div) => (this.NavCloseBackground = div)}
          className='cartCloseBackground'
          onClick={this.executeAnimation}></div>
        <div className='cartSlide'>
          <div className='cartSlideBox'>
            <HeaderSlideCloseLeft onCloseArrow={this.executeAnimation} />
            <h2 className='cartSlideTitle'>#MY BAG</h2>
            <div className='cartItemListBox'>{this.handleCartData()}</div>
            <BtnPromoCode />
            <EstimatedTotal />
            <Link
              to='/checkout'
              className='btnCheckout'
              onClick={this.executeAnimation}>
              CHECKOUT
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default CartSlide;
