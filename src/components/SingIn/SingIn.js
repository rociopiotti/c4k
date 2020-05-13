import React from "react";
import "./SingIn.scss";
import BtnSingIn from "../BtnSingIn/BtnSingIn";

// CONTEXT
import PageManagerContext from "../../context/pageManager-context";

class SingIn extends React.Component {
  static contextType = PageManagerContext;

  handleForgotPassword() {
    this.context.onSlideBtn("forgotPassworSlide");
  }
  handleCheckboxChange() {
    // console.log("Checked")
  }

  handleInputChange(event) {
    // console.log("Ingreso texto")
  }
  render() {
    return (
      <div className="signInBox">
        <div className="singIn">
          <h3>C-4K MEMBERS</h3>
          <hr className="separationLineSingIn"></hr>
          <input
            type="text"
            id="email"
            placeholder="EMAIL"
            className="signInInput"
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            id="signInPassword"
            placeholder="PASSWORD"
            className="signInInput"
            onChange={this.handleInputChange}
          />
          <br></br>
          <div className="passSettingsBox">
            <label className="rememberMe">
              <input
                onChange={this.handleCheckboxChange}
                type="checkbox"></input>{" "}
              REMEMBER ME
            </label>

            <a
              onClick={() => {
                this.handleForgotPassword("ForgotPassword");
              }}
              href="#"
              className="forgotPasswordLink">
              FORGOT PASSWORD?
            </a>
          </div>

          <BtnSingIn />
        </div>
      </div>
    );
  }
}

export default SingIn;
