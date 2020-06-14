import React, { Component } from "react";
import "./CartSlide.scss";
import { TweenMax } from "gsap";

// COMPONENTS
import HeaderSlideCloseLeft from "../HeaderSlideCloseLeft/HeaderSlideCloseLeft";
import CartList from "../CartList/CartList";

//CONTEXT
import PageManagerContext from "../../context/pageManager-context";

const STEP = 120;

class CartSlide extends Component {
  static contextType = PageManagerContext;

  constructor(props) {
    super(props);
    this.SlideBackground = null;
    this.NavCloseBackground = null;
    this.CartSlideRef = null;
    this.executeAnimation = this.executeAnimation.bind(this);
    this.isAnimating = false;

    this.initialY = null;
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

  scroll(deltaY) {
    if (this.isAnimating) {
      return;
    }

    const step = deltaY < 0 ? STEP : STEP * -1;
    const currentTop = this.CartSlideRef.offsetTop;

    if (deltaY > 0) {
      if (
        window.innerHeight - this.CartSlideRef.clientHeight >=
        currentTop - STEP
      ) {
        return;
      }
    }

    if (deltaY < 0) {
      if (currentTop >= 0) {
        return;
      }
    }

    const finalTop = currentTop + step;

    this.isAnimating = true;
    TweenMax.to(this.CartSlideRef, 0.2, {
      top: finalTop,
      onComplete: () => {
        this.isAnimating = false;
      },
    });
  }

  handleTouchStart(e) {
    this.clientY = e.touches[0].clientY;
  }

  handleTouchMove(e) {
    if (this.clientY === null) {
      return;
    }
    const currentY = e.touches[0].clientY;

    const diffY = this.clientY - currentY;

    this.scroll(diffY);
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
        ref={(div) => (this.SlideBackground = div)}
        onWheel={(event) => this.scroll(event.deltaY)}
        onTouchStart={this.handleTouchStart.bind(this)}
        onTouchMove={this.handleTouchMove.bind(this)}>
        <div
          ref={(div) => (this.NavCloseBackground = div)}
          className='cartCloseBackground'
          onClick={this.executeAnimation}
        />

        <div className='cartSlide' ref={(div) => (this.CartSlideRef = div)}>
          <div className='cartSlideBox'>
            <HeaderSlideCloseLeft onCloseArrow={this.executeAnimation} />
            <h2 className='cartSlideTitle'>#MY BAG</h2>
            <CartList
              showCheckoutButton={true}
              onCartItemClick={this.executeAnimation}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default CartSlide;
