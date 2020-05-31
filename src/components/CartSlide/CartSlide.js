import React from "react";
import "./CartSlide.scss";
import CartItem from "../CartItem/CartItem";

// COMPONENTS
import CartEmpty from "../CartEmpty/CartEmpty";
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

    this.state = {
      cartList: []
    }
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

  createList() {
    const { cart, itemsData } = this.context;       
    

    if (cart.length === 0) {
      return <CartEmpty />;
    }

    // let newCartList = [];

    // for ( let key in itemsData){
    //   newCartList = [...newCartList, itemsData[key]];
    // }


    // const cartList = newCartList.filter((product)=>{
    //   return cart[].cartList.includes(product.id);
    // })
    
    // console.log(itemData)


    const listItems = cart.map((item) => (
      <li key={item.id} className='cartItemElement'>
        <CartItem onCartItemClick={this.executeAnimation} />
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
            <div className='cartItemListBox'>{this.createList()}</div>
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
