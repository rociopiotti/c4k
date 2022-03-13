import React, { Component } from "react";
import "./BtnBackToTop.scss";

class BtnBackToTop extends Component {
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  render() {
    return (
      <button
        onClick={() => {
          this.scrollToTop();
        }}
        className='btnBackToTop'>
        BACK TO TOP
      </button>
    );
  }
}

export default BtnBackToTop;
