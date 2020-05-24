import React from "react";
import "./CartSlide.scss";
import CartItem from "../CartItem/CartItem";

// COMPONENTS
// import CartEmpty from "../CartEmpty/CartEmpty";
import HeaderSlideCloseLeft from "../HeaderSlideCloseLeft/HeaderSlideCloseLeft";
import EstimatedTotal from "../EstimatedTotal/EstimatedTotal";
import BtnPromoCode from "../BtnPromoCode/BtnPromoCode";

//CONTEXT
import PageManagerContext from "../../context/pageManager-context";

//ANIMATION
import { Timeline, Back } from "gsap/gsap-core";

//ROUTER
import { Link } from "react-router-dom";

// EASING
const ease = Back.easeInOut;

class CartSlide extends React.Component {
  static contextType = PageManagerContext;

  constructor(props) {
    super(props);
    this.SlideBackground = null;
    this.NavCloseBackground = null;

    this.executeAnimation = this.executeAnimation.bind(this);
  }

  executeAnimation() {
    this.context.leftSlideOutAnimation(
      {
        backgroundRef: this.NavCloseBackground,
        wrapperRef: this.SlideBackground,
      },
      this.context.onSlideBtn
    );
  }

  componentDidMount() {
    const tl = new Timeline({ ease: ease, repeat: 0, repeatDelay: 0 });
    tl.to(this.SlideBackground, { left: 0 });
    tl.to(this.NavCloseBackground, { opacity: 0.8 }, 0.4);
  }

  createList() {
    return (
      <div className='cartItemListBox'>
        <ul className='cartItemList'>
          <li className='cartItemElement'>
            <CartItem onCartItemClick={this.executeAnimation} />
          </li>
          {/* <li className="cartItemElement">
            <CartItem />
          </li> */}
        </ul>
      </div>
    );
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
            {/* <CartEmpty/> */}

            {this.createList()}

            <BtnPromoCode />
            <EstimatedTotal />
            <Link
              to='/checkout'
              className='btnCheckout'
              onClick={() => {
                this.onClickChangeSection();
              }}>
              CHECKOUT
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default CartSlide;
