import React, { Component } from "react";
import "./SlideManager.scss";

// CONTEXT
import PageManagerContext from "../../context/pageManager-context";

// SLIDES
import NavSlide from "../NavSlide/NavSlide";
import CartSlide from "../CartSlide/CartSlide";
import FilterSlide from "../FilterSlide/FilterSlide";
import SortSlide from "../SortSlide/SortSlide";
import SingInCreateAccountNavslide from "../SingInCreateAccountNavSlide/SingInCreateAccountNavSlide";
import ForgotPasswordSlide from "../ForgotPasswordSlide/ForgotPasswordSlide";
import ForgotPasswordModal from "../ForgotPasswordModal/ForgotPasswordModal";

class SlideManager extends Component {
  static contextType = PageManagerContext;

  // RECEIVES FUNCTION
  handleSlide() {
    this.context.onSlideBtn();
  }
  // SETS SLIDE TYPE
  setSlide(slideType) {
    let slide;

    switch (slideType) {
      case "navSlide":
        slide = <NavSlide />;
        break;
      case "cartSlide":
        slide = <CartSlide />;
        break;
      case "singInSlide":
        slide = <SingInCreateAccountNavslide />;
        break;
      case "filter":
        slide = <FilterSlide />;
        break;
      case "sort":
        slide = <SortSlide />;
        break;
      case "forgotPassworSlide":
        slide = <ForgotPasswordSlide />;
        break;
      // TODO: HACER QUE APAREZCA CUANDO SING IN ESTA EN CHECKOUT
      case "forgotPassworModal":
        slide = <ForgotPasswordModal />;
        break;
      default:
        slide = null;
        break;
    }
    return slide;
  }

  render() {
    /// CHECK CUREENT SLIDE STATE
    console.clear();
    console.log(">SlideManager:", this.context.currentSlide);

    return (
      <div className='slideManagerBox'>
        {this.setSlide(this.context.currentSlide)}
      </div>
    );
  }
}
export default SlideManager;
