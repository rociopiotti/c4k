import React, { Component } from "react";
import "./ForgotPasswordModal.scss";
import { Icon } from "../shared-components";

class ForgotPasswordmodal extends Component {
  handleCloseSlide(SumbmitMailSlide) {
    // console.log("Click en botón que cierra slide", SumbmitMailSlide)
  }
  handleSubmitMailSlide(SumbmitMailSlide) {
    // console.log("Click en botón que envia mail:", SumbmitMailSlide)
  }
  render() {
    return (
      <div className='forgotPasswordBackground'>
        <div className='forgotPasswordBox'>
          <div className='forgotPassword'>
            <button
              onClick={() => {
                this.handleCloseSlide("SumbmitMailSlide");
              }}
              className='btnCloseCartSlide'>
              <Icon className='iconBtnCloseCartSlide' />
            </button>
            <h2>FORGOT PASSWORD?</h2>
            <p>WE WILL SEND A PASSWORD RESET LINK TO YOUR EMAIL</p>
            <p>PLEASE ENTER A VALID EMAIL ADDRESS.</p>
            <input
              type='text'
              id='email'
              placeholder='EMAIL'
              className='forgotPasswordModalEmail'
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
      </div>
    );
  }
}

export default ForgotPasswordmodal;
