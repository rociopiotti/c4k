import React from "react";
import "./CartSlide.scss";

// COMPONENTS
import HeaderSlideCloseLeft from "../HeaderSlideCloseLeft/HeaderSlideCloseLeft";
import CartList from "../CartList/CartList";

//CONTEXT
import PageManagerContext from "../../context/pageManager-context";

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
    document.body.style.overflowY = "hidden";

    this.context.slideInAnimation({
      backgroundRef: this.NavCloseBackground,
      wrapperRef: this.SlideBackground,
    });
  }
  componentWillUnmount() {
    document.body.style.overflow = "unset";
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
            <CartList onCartItemClick={this.executeAnimation} />
          </div>
        </div>
      </div>
    );
  }
}

export default CartSlide;
