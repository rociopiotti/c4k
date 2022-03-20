import React, { Component } from "react";
import "./ForgotPasswordSlide.scss";
import { Icon } from "../shared-components";

//CONTEXT
import PageManagerContext from "../../context/pageManager-context";

//ANMATION
import { Timeline, Back } from "gsap/gsap-core";

const ease = Back.easeInOut;

class ForgotPasswordSlide extends Component {
  static contextType = PageManagerContext;

  constructor(props) {
    super(props);
    this.SlideBackground = null;
    this.ContentBackground = null;
    this.NavCloseBackground = null;
  }
  // --------------------------------------------------------

  executeAnimation(value, onCompleteHandler) {
    const tl = new Timeline({
      onComplete: () => onCompleteHandler(value),
      repeat: 0,
      repeatDelay: 0,
      ease: ease,
    });
    tl.to(this.NavCloseBackground, { opacity: 0 });
    tl.to(this.SlideBackground, { left: "-100vw" }, 0.4);
  }
  // --------------------------------------------------------

  handleClose() {
    this.executeAnimation(null, this.context.onSlideBtn);
  }
  handleSubmitMailSlide() {
    // console.log("Click en botón que envia mail:", SumbmitMailSlide)
  }
  componentDidMount() {
    const tl = new Timeline({ ease: ease, repeat: 0, repeatDelay: 0 });
    tl.to(this.ContentBackground, { opacity: "1" }, 0.4);
  }

  render() {
    return (
      <div
        ref={(div) => (this.SlideBackground = div)}
        className='forgotPasswordSlideBackground'>
        <div className='forgotPasswordSlideBox'>
          <button
            onClick={() => {
              this.handleClose();
            }}
            className='btnCloseCartSlide'>
            <Icon type='arrowRight' />
          </button>
          <div
            ref={(div) => (this.ContentBackground = div)}
            className='forgotPasswordSlide'>
            <h2>FORGOT PASSWORD?</h2>
            <p>WE WILL SEND A PASSWORD RESET LINK TO YOUR EMAIL</p>
            <p>PLEASE ENTER A VALID EMAIL ADDRESS.</p>
            <input
              type='text'
              id='email'
              placeholder='EMAIL'
              className='forgotPasswordSlideEmail'
            />
            <button
              onClick={() => {
                this.handleSubmitMailSlide("SumbmitMailSlide");
              }}
              className='btnSubtmitMail'>
              SUBMIT
            </button>
          </div>
        </div>
        <div
          ref={(div) => (this.NavCloseBackground = div)}
          onClick={() => {
            this.handleClose();
          }}
          className='forgotPassCloseBackground'></div>
      </div>
    );
  }
}

export default ForgotPasswordSlide;
