import React, { Component } from "react";
import "./SingIn.scss";

// ROUTER
import { Link } from "react-router-dom";

// CONTEXT
import PageManagerContext from "../../context/pageManager-context";

class SingIn extends Component {
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
    const { redirection } = this.props;

    return (
      <div className='signInBox'>
        <div className='singIn'>
          <h3>C-4K MEMBERS</h3>
          <hr className='separationLineSingIn'></hr>
          <input
            type='text'
            id='email'
            placeholder='EMAIL'
            className='signInInput'
            onChange={this.handleInputChange}
          />
          <input
            type='text'
            id='signInPassword'
            placeholder='PASSWORD'
            className='signInInput'
            onChange={this.handleInputChange}
          />
          <br></br>
          <div className='passSettingsBox'>
            <label className='rememberMe'>
              <input
                onChange={this.handleCheckboxChange}
                type='checkbox'></input>{" "}
              REMEMBER ME
            </label>

            <button
              onClick={() => {
                this.handleForgotPassword("ForgotPassword");
              }}
              href='#'
              className='forgotPasswordLink'>
              FORGOT PASSWORD?
            </button>
          </div>
          <Link className='btnSingIn' to={redirection}>
            SING IN
          </Link>
        </div>
      </div>
    );
  }
}

export default SingIn;
