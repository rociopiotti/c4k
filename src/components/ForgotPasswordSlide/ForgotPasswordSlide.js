import React from "react"
import "./ForgotPasswordSlide.scss"
import Icon from "../Icon/Icon"

class ForgotPasswordSlide extends React.Component {
  handleCloseSlide(SumbmitMailSlide) {
    console.log("Click en botón que cierra slide", SumbmitMailSlide)
  }
  handleSubmitMailSlide(SumbmitMailSlide) {
    console.log("Click en botón que envia mail:", SumbmitMailSlide)
  }
  render() {
    return (
      <div className="forgotPasswordSlideBackground">
        <div className="forgotPasswordSlideBox">
          <button
            onClick={() => {
              this.handleCloseSlide("SumbmitMailSlide")
            }}
            className="btnCloseCartSlide">
            <Icon />
          </button>
          <div className="forgotPasswordSlide">
            <h2>FORGOT PASSWORD?</h2>
            <p>WE WILL SEND A PASSWORD RESET LINK TO YOUR EMAIL</p>
            <p>PLEASE ENTER A VALID EMAIL ADDRESS.</p>
            <input
              type="text"
              id="email"
              placeholder="EMAIL"
              className="forgotPasswordSlideEmail"
            />
            <button
              onClick={() => {
                this.handleSubmitMailSlide("SumbmitMailSlide")
              }}
              className="btnSubtmitMail">
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ForgotPasswordSlide
