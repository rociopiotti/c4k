import React from "react";
import "./NavSlide.scss";
import Icon from "../Icon/Icon";

import PageManagerContext from "../../context/pageManager-context";

//ANMATION
import { Timeline, Back } from "gsap/gsap-core";

const ease =  Back.easeInOut;

class NavSlide extends React.Component {
  static contextType = PageManagerContext;

  constructor(props) {
    super(props);
    this.NavCloseBackground = null;
    this.SlideBackground = null;
       
  }

  // --------------------------------------------------------
  executeAnimation(value, onCompleteHandler) {
    const tl = new Timeline({
      onComplete: () => onCompleteHandler(value),
      repeat: 0,
      repeatDelay: 0,
      ease: ease,
    });
    tl.to(this.NavCloseBackground, {opacity: 0 });
    tl.to(this.SlideBackground, { left: "-100vw" }, 0.4);
  }
  // --------------------------------------------------------

  clickCloseNav() {
    this.executeAnimation(null, this.context.onCloseClick);
  }

  clickNavLinks(value) {
    this.executeAnimation(value, this.context.onNavItemClick);
  }

  clickMenuNavLinks(value) {
    this.executeAnimation(value, this.context.onMenuNavClick);
  }

  componentDidMount() {    
    const tl = new Timeline({ ease: ease, repeat: 0, repeatDelay: 0 });
    tl.to(this.SlideBackground, { left: 0 });
    tl.to(this.NavCloseBackground, { opacity: "0.8" }, 0.4);
  }

  render() {
    return (
      <div
        className="backgroundSlide"
        ref={(div) => (this.SlideBackground = div)}>
        <div className="navBox">
          <button
            onClick={() => {
              this.clickCloseNav();
            }}
            className="BtnCloseNav">
            <Icon type="arrowRight" />
          </button>
          <nav className="nav">
            <ul className="list">
              <li className="listItem">
                <a
                  onClick={() => {
                    this.clickNavLinks("trousers");
                  }}>
                  #TROUSERS
                </a>
              </li>
              <li className="listItem">
                <a
                  onClick={() => {
                    this.clickNavLinks("tshirts");
                  }}>
                  #T-SHIRT
                </a>
              </li>

              <li className="listItem">
                <a
                  onClick={() => {
                    this.clickNavLinks("bags");
                  }}>
                  #BAGS
                </a>
              </li>
              <li className="listItem">
                <a
                  onClick={() => {
                    this.clickNavLinks("shoes");
                  }}>
                  #SHOES
                </a>
              </li>
              <li className="listItem">
                <a
                  onClick={() => {
                    this.clickNavLinks("newArrivals");
                  }}>
                  #NEW ARRIVALS
                </a>
              </li>
              <hr className="separationLine"></hr>
             
              <li className="listItem ">
                <a
                  onClick={() => {
                    this.clickMenuNavLinks("singInSlide");
                  }}>
                  <Icon type="singIn" />
                  SING IN/ CREATE AN ACCOUNT
                </a>
              </li>
              <li className="listItem ">
                <a
                  onClick={() => {
                    this.clickMenuNavLinks("cartSlide");
                  }}>
                  <Icon type="myBag" /> MY BAG
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div
          className="backgroundClose"
          ref={(div) => (this.NavCloseBackground = div)}
          onClick={() => {
            this.clickCloseNav();
          }}></div>
      </div>
    );
  }
}

export default NavSlide;
