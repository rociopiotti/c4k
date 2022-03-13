import React, { Component } from "react";
import "./SingInCreateAccountSlide.scss";
import Icon from "../Icon/Icon";
import CreateAnAccountSlide from "./CreateAnAccoutSlide/CreateAnAccoutSlide";
import SingInSlide from "./SingInSlide/SingInSlide";

//CONTEXT
import PageManagerContext from "../../context/pageManager-context";


class SingInCreateAccountSlide extends Component {
  static contextType = PageManagerContext;

  constructor(props) {
    super(props);
    this.SlideBackground = null;
    this.NavCloseBackground = null;
    this.executeAnimation = this.executeAnimation.bind(this);
    this.state = {
      singinOption: "singIn",
      activeBtn: true,
    };
  }
  
  executeAnimation() {
    this.context.slideOutAnimation(
      "left",
      {
        backgroundRef: this.NavCloseBackground,
        wrapperRef: this.SlideBackground,
      },
      this.context.onSlideBtn
    );
  }

  handleSinginOption(newSinginOption) {
    this.setState({
      singinOption: newSinginOption,
      activeBtn: !this.state.activeBtn,
    });
  }

  componentDidMount() {
    this.context.slideInAnimation({
      backgroundRef: this.NavCloseBackground,
      wrapperRef: this.SlideBackground,
    });
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
    let btn_class1 = this.state.activeBtn ? "underline" : "noneDecoration";
    let btn_class2 = this.state.activeBtn ? "noneDecoration" : "underline";

    return (
      <div
        ref={(div) => (this.SlideBackground = div)}
        className='singInCreateAccountBackground'>
        <div className='singInCreateAccountBoxBackground'>
          <button onClick={this.executeAnimation} className='BtnCloseNav'>
            <Icon className='iconBtnCloseNav' type='arrowRight' />
          </button>
          <div className='headerSingInCreateAccount'>
            <button
              onClick={() => {
                this.handleSinginOption("singIn");
              }}
              className='btnSingInSlide'>
              <h2 className={btn_class1}>#SING IN /</h2>
            </button>
            <button
              onClick={() => {
                this.handleSinginOption("createAccount");
              }}
              className='btnCreateAccountSlide'>
              <h2 className={btn_class2}>CREATE AN ACCOUNT</h2>
            </button>
          </div>
          <div className='singInCreateAccountBox'>
            {this.setSinginOption(this.state.singinOption)}
          </div>
        </div>
        <div
          ref={(div) => (this.NavCloseBackground = div)}
          onClick={this.executeAnimation}
          className='singInCreateAccountClosebackground'></div>
      </div>
    );
  }
}

export default SingInCreateAccountSlide;
