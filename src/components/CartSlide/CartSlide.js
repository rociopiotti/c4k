import React from "react";
import "./CartSlide.scss";

// COMPONENTS
import HeaderSlideCloseLeft from "../HeaderSlideCloseLeft/HeaderSlideCloseLeft";
import EstimatedTotal from "../EstimatedTotal/EstimatedTotal";
import CartItemList from "../CartItemList/CartItemList";
import BtnPromoCode from "../BtnPromoCode/BtnPromoCode";
// import CartEmpty from "../CartEmpty/CartEmpty";

//CONTEXT
import PageManagerContext from "../../context/pageManager-context";

//ANMATION
import { Timeline, Back } from "gsap/gsap-core";
import { Link } from "react-router-dom";

// EASING
const ease = Back.easeInOut;

class CartSlide extends React.Component {
  static contextType = PageManagerContext;

  constructor(props) {
    super(props);
    this.SlideBackground = null;
    this.NavCloseBackground = null;

    // this.onClickChangeSection = this.onClickChangeSection.bind(this);
  }

  // ANIMATION -----------------------------------------------
  executeAnimation(value, onCompleteHandler) {
    const tl = new Timeline({
      onComplete: () => onCompleteHandler(value),
      ease: ease,
    });
    tl.to(this.NavCloseBackground, { opacity: 0 });
    tl.to(this.SlideBackground, { left: "100vw" }, 0.4);
  }

  // ANIMATION -----------------------------------------------

  onClickChangeSection() {
    this.executeAnimation(null, this.context.onSlideBtn);
  }

  componentDidMount() {
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
            this.onClickChangeSection();
          }}></div>
        <div className='cartSlide'>
          <div className='cartSlideBox'>
            <HeaderSlideCloseLeft />
            <h2 className='cartSlideTitle'>#MY BAG</h2>
            {/* <CartEmpty/> */}
            <CartItemList onChangeSection = {this.onClickChangeSection}  />
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
