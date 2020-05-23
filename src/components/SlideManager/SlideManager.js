import React, { Component } from "react";

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

  handleSlide() {
    this.context.onSlideBtn();
  }

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
    console.clear();
    console.log(">SlideManager:", this.context.currentSlide);

    return (
      <div
        style={{
          background: "rgba(255,0,0,0.5)",
          color: "white",
          position: "absolute",
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}>
        {this.setSlide(this.context.currentSlide)}
      </div>
    );
  }
}
export default SlideManager;
