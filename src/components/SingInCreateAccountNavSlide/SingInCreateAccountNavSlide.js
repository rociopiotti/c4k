import React from "react"
import "./SingInCreateAccountNavSlide.scss"
import Icon from "../Icon/Icon"
import CreateAnAccountSlide from "./CreateAnAccoutSlide/CreateAnAccoutSlide"
import SingInSlide from "./SingInSlide/SingInSlide"

class SingInCreateAccountNavslide extends React.Component {
  handleCloseCartSlide(CloseSlide) {
    console.log("Click en botón:", CloseSlide)
  }
  handleShowSingIn(SingIn) {
    console.log("Click en botón que muestra:", SingIn)
  }
  handleShowCreateAccount(CreateAccount) {
    console.log("Click en botón que muestra:", CreateAccount)
  }
  render() {
    return (
      <div className="singInCreateAccountBackground">
        <div className="singInCreateAccountBoxBackground">
          <button
            onClick={() => {
              this.props.onCloseClick(null)
            }}
            className="BtnCloseNav">
            <Icon className="iconBtnCloseNav" />
          </button>
          <div className="headerSingInCreateAccount">
            <button
              onClick={() => {
                this.handleShowSingIn("SingIn")
              }}
              className="btnSingInSlide">
              <h2>#SING IN /</h2>{" "}
            </button>
            <button
              onClick={() => {
                this.handleShowCreateAccount("CreateAccount")
              }}
              className="btnCreateAccountSlide">
              <h2>CREATE AN ACCOUNT</h2>{" "}
            </button>
          </div>
          <div className="singInCreateAccountBox">
            <SingInSlide />
            {/* <CreateAnAccountSlide /> */}
          </div>
        </div>
        <div
          onClick={() => {
            this.props.onCloseClick(null)
          }}
          className="singInCreateAccountClosebackground">
        </div>
      </div>
    )
  }
}

export default SingInCreateAccountNavslide
