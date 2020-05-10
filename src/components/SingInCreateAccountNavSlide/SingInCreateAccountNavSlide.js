import React from "react";
import "./SingInCreateAccountNavSlide.scss";
import Icon from "../Icon/Icon";
import CreateAnAccountSlide from "./CreateAnAccoutSlide/CreateAnAccoutSlide";
import SingInSlide from "./SingInSlide/SingInSlide";

//ANMATION
import { Timeline, Back } from "gsap/gsap-core";

const ease = Back.easeInOut;

class SingInCreateAccountNavslide extends React.Component {
  constructor(props) {
    super(props);
    this.SlideBackground = null;
    this.NavCloseBackground = null;

    this.state = {
      singinOption: "singIn",
    };
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

  clickCloseNav() {
    this.executeAnimation(null, this.props.onCloseClick);
  }

  handleSinginOption(newSinginOption) {
    console.log("Click en botón que muestra:", newSinginOption);
    this.setState({
      singinOption: newSinginOption,
    });
  }

  componentDidMount() {
    console.log("->>>>>>>>>>>>>>>EMPIEZA");
    const tl = new Timeline({ ease: ease, repeat: 0, repeatDelay: 0 });
    tl.to(this.SlideBackground, { left: 0 });
    tl.to(this.NavCloseBackground, { opacity: "0.8" }, 0.4);
  }

  setSinginOption(optionType) {
    let option;
    switch (optionType) {
      case "singIn":
        option = <SingInSlide />;
        break;
      case "createAccount":
        option = <CreateAnAccountSlide />;
        break;
      default:
        break;
    }
    return option;
  }
  render() {
    console.log("------> CURRENT OPTION:", this.state.singinOption);

    return (
      <div
        ref={(div) => (this.SlideBackground = div)}
        className="singInCreateAccountBackground">
        <div className="singInCreateAccountBoxBackground">
          <button
            onClick={() => {
              this.clickCloseNav();
            }}
            className="BtnCloseNav">
            <Icon className="iconBtnCloseNav" type="arrowRight" />
          </button>
          <div className="headerSingInCreateAccount">
            <button
              onClick={() => {
                this.handleSinginOption("singIn");
              }}
              className="btnSingInSlide">
              <h2>#SING IN /</h2>{" "}
            </button>
            <button
              onClick={() => {
                this.handleSinginOption("createAccount");
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
        ref={(div) => (this.NavCloseBackground = div)}
          onClick={() => {
            this.clickCloseNav();
          }}
          className="singInCreateAccountClosebackground"></div>
      </div>
    );
  }
}

export default SingInCreateAccountNavslide;
