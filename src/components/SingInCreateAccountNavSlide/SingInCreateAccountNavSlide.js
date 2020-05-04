import React from "react"
import "./SingInCreateAccountNavSlide.scss"
import Icon from "../Icon/Icon"
import CreateAnAccountSlide from "./CreateAnAccoutSlide/CreateAnAccoutSlide"
import SingInSlide from "./SingInSlide/SingInSlide"

class SingInCreateAccountNavslide extends React.Component {
  state = {
    singinOption: "singIn",
  }
  handleSinginOption(newSinginOption) {
    console.log("Click en botón que muestra:", newSinginOption)
    this.setState({
      singinOption: newSinginOption,
    })
  }
  setSinginOption(optionType) {
    let option
    switch (optionType) {
      case "singIn":
        option = <SingInSlide />
        break
      case "createAccount":
        option = <CreateAnAccountSlide />
        break
      default:
        break
    }
    return option
  }
  render() {
     console.log("------> CURRENT OPTION:", this.state.singinOption)

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
                this.handleSinginOption("singIn")
              }}
              className="btnSingInSlide">
              <h2>#SING IN /</h2>{" "}
            </button>
            <button
              onClick={() => {
                this.handleSinginOption("createAccount")
              }}
              className="btnCreateAccountSlide">
              <h2>CREATE AN ACCOUNT</h2>{" "}
            </button>
          </div>
          <div className="singInCreateAccountBox">
            {this.setSinginOption(this.state.singinOption)}
          </div>
        </div>
        <div
          onClick={() => {
            this.props.onCloseClick(null)
          }}
          className="singInCreateAccountClosebackground"></div>
      </div>
    )
  }
}

export default SingInCreateAccountNavslide
