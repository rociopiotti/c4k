import React from "react";
import "./CartSlide.scss";
import HeaderSlideCloseLeft from "../HeaderSlideCloseLeft/HeaderSlideCloseLeft";
import EstimatedTotal from "../EstimatedTotal/EstimatedTotal";
import CartItemList from "../CartItemList/CartItemList";
import BtnPromoCode from "../BtnPromoCode/BtnPromoCode";
// import CartEmpty from "../CartEmpty/CartEmpty";

//CONTEXT
import PageManagerContext from "../../context/pageManager-context";

//ANMATION
import { Timeline, Back } from "gsap/gsap-core";

// EASING
const ease = Back.easeInOut;

class CartSlide extends React.Component {
  static contextType = PageManagerContext;

  constructor(props) {
    super(props);
    this.SlideBackground = null;
    this.NavCloseBackground = null;
  }

  // --------------------------------------------------------
  executeAnimation(value, onCompleteHandler) {
    const tl = new Timeline({
      onComplete: () => onCompleteHandler(value),
      ease: ease,
    });
    tl.to(this.NavCloseBackground, { opacity: 0 });
    tl.to(this.SlideBackground, { left: "100vw" }, 0.4);
  }
  // --------------------------------------------------------

  clickCloseNav() {
    this.executeAnimation(null, this.context.onSlideBtn);
  }

  handleCheckoutPage(value) {
    this.executeAnimation(value, this.context.onSectionBtn);
  }

  componentDidMount() {
    // console.log("->>>>>>>>>>>>>>>EMPIEZA");
    const tl = new Timeline({ ease: ease, repeat: 0, repeatDelay: 0 });
    tl.to(this.SlideBackground, { left: 0 });
    tl.to(this.NavCloseBackground, { opacity: 0.8 }, 0.4);
  }
  render() {
    return (
      <div
        className='cartSlideBackground'
        ref={(div) => (this.SlideBackground = div)}>
        <div
          ref={(div) => (this.NavCloseBackground = div)}
          className='cartCloseBackground'
          onClick={() => {
            this.clickCloseNav();
          }}></div>
        <div className='cartSlide'>
          <div className='cartSlideBox'>
            <HeaderSlideCloseLeft />
            <h2 className='cartSlideTitle'>#MY BAG</h2>
            {/* <CartEmpty/> */}
            <CartItemList />
            <BtnPromoCode />
            <EstimatedTotal />
            <button
              onClick={() => {
                this.handleCheckoutPage("checkout");
              }}
              className='btnCheckout'>
              CHECKOUT
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CartSlide;
