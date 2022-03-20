import React, { Component } from "react";
import "./BtnBackToTop.scss";

export class BtnBackToTop extends Component {
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
