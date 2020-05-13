import React from "react"
import "./CreateAnAccoutSlide.scss"

import { TweenLite } from "gsap";
class CreateAnAccountSlide extends React.Component {
  constructor(props) {
    super(props);
    // reference to the DOM node
    this.myElement = null;
    // reference to the animation
    this.myTween = null;
    this.state = {
      mode: "CLOSE",
    };
  }
  
  toggle() {
    let newMode;
    if (this.state.mode === "CLOSE") {
      newMode = "OPEN";
    } else {
      newMode = "CLOSE";
    }
    this.setState({
      mode: newMode,
    });
  }
  
  componentDidMount() {
    const { mode } = this.state;
    const destY = mode === "CLOSE" ? 1 : 0;
    this.myTween = TweenLite.to(this.myElement, 1, {
      opacity: destY,
    });
    this.myTween.eventCallback("onComplete", () => {
      this.toggle();
     
    });
  }
  handleCreateAccount(CreateAccount) {
    // console.log("Click en botón que muestra:", CreateAccount)
  }
  handleSingInFacebook(SingInFacebook) {
    // console.log("Click en botón que va a API", SingInFacebook)
  }
  handleSingInGoogle(SingInGoogle) {
    // console.log("Click en botón que va a API", SingInGoogle)
  }
  handleInputChange(event) {
    // console.log("Ingreso texto")
  }
  handleCheckboxChange() {
    // console.log("Checked")
  }
  render() {
    return (
      <div  ref={(div) => (this.myElement = div)}  className="createAccountBox">
     
        <input
          type="text"
          id="email"
          placeholder="EMAIL"
          className="createAccountInput"
          onChange={this.handleInputChange}
        />
        <input
          type="text"
          id="passwordCreateAccount"
          placeholder="PASSWORD"
          className="createAccountInput"
          onChange={this.handleInputChange}
        />
        <input
          type="text"
          id="confirmPasswordCreateAccount"
          placeholder="CONFIRM PASSWORD"
          className="createAccountInput"
          onChange={this.handleInputChange}
        />

        <div className="nameAndLastNameCreateAccount">
          <input
            type="text"
            id="firstNameCreateAccount"
            placeholder="FIRST NAME"
            className="createAccountInput smallInput"
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            id="lastNameCreateAccount"
            placeholder="LAST NAME"
            className="createAccountInput smallInput"
            onChange={this.handleInputChange}
          />
        </div>

        <p>BIRTHDAY PROMOS!</p>

        <div className="birthDataCreateAccount">
          <input
            type="text"
            id="monthBirthDate"
            placeholder="MONTH"
            className="createAccountInput smallInput"
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            id="yearBirthDate"
            placeholder="YEAR"
            className="createAccountInput smallInput"
            onChange={this.handleInputChange}
          />
        </div>

        <label className="emailMarketing">
          <input onChange={this.handleCheckboxChange} type="checkbox"></input>{" "}
          REMEMBER ME
        </label>
        <label className="termsAndConditions">
          <input onChange={this.handleCheckboxChange} type="checkbox"></input> I
          AGREE TERMS & CONDITIONS
        </label>
        <button
          onClick={() => {
            this.handleCreateAccount("CreateAccount")
          }}
          className="btnCreateAccount">
          CREATE AN ACCOUNT
        </button>
        <p className="singInWithFaceOrGoogle">
          SING IN WITH
          <a
            onClick={() => {
              this.handleSingInFacebook("SingInFacebook")
            }}
            href="#">
            FACEBOOK
          </a>
          OR
          <a
            onClick={() => {
              this.handleSingInGoogle("SingInGoogle")
            }}
            href="#">
            GOOGLE
          </a>
        </p>
      </div>
    )
  }
}

export default CreateAnAccountSlide
