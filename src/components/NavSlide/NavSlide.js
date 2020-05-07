import React from "react";
import "./NavSlide.scss";
import Icon from "../Icon/Icon";

//ANMATION
import { TweenLite } from "gsap";
import { Timeline } from "gsap/gsap-core";

class NavSlide extends React.Component {
  constructor(props) {
    super(props);
    this.NavBox = null;
    this.NavCloseBackground = null;
    this.SlideBackground = null;

    this.state = {
      mode: "CLOSE",
    };
  }

  clickCloseNav() {
    console.log("SALGO DE close");
    this.props.onCloseClick(null);
  }

  clickNavLinks(value) {
    this.props.onNavItemClick(value);
  }

  clickMenuNavLinks(value) {
    this.props.onMenuNavClick(value);
  }
  animationNav(value) {
    const { mode } = this.state;
    const delayAnimation = 0;

    const tl = new Timeline();

    this.clickNavLinks(value);

    tl.to(this.SlideBackground, { width: "-=100vw" }, delayAnimation);
    tl.to(this.NavCloseBackground, { visibility: "hidden" });

    tl.eventCallback("onComplete", () => {
      this.clickMenuNavLinks(value);
      console.log("SALGO DE ANIMATION");
    });
  }

  render() {
    return (
      <div
        className="backgroundSlide"
        ref={(div) => (this.SlideBackground = div)}>
        <div className="navBox">
          <button
            onClick={() => {
              this.animationNav(null);
            }}
            className="BtnCloseNav">
            <Icon type="arrowRight" />
          </button>
          <nav className="nav">
            <ul className="list">
              <li className="listItem">
                <a
                  onClick={() => {
                    this.animationNav("trousers");
                    // this.clickCloseNav();
                    // this.clickNavLinks("trousers");
                  }}>
                  #TROUSERS
                </a>
              </li>
              <li className="listItem">
                <a
                  onClick={() => {
                    this.animationNav("tshirts");
                    // this.clickNavLinks("tshirts");
                  }}>
                  #T-SHIRT
                </a>
              </li>

              <li className="listItem">
                <a
                  onClick={() => {
                    this.animationNav("bags");
                    // this.clickNavLinks("bags");
                  }}>
                  #BAGS
                </a>
              </li>
              <li className="listItem">
                <a
                  onClick={() => {
                    this.animationNav("shoes");
                    // this.clickNavLinks("shoes");
                  }}>
                  #SHOES
                </a>
              </li>
              <li className="listItem">
                <a
                  onClick={() => {
                    this.animationNav("newArrivals");
                    // this.clickNavLinks("newArrivals");
                  }}>
                  #NEW ARRIVALS
                </a>
              </li>
              <hr className="separationLine"></hr>
              <li className="listItem ">
                <a
                  onClick={() => {
                    this.animationNav("searchBox");
                    // this.clickMenuNavLinks("searchBox");
                  }}>
                  <Icon type="search" />
                  SEARCH
                </a>
              </li>
              <li className="listItem ">
                <a
                  onClick={() => {
                    this.animationNav("singInSlide");
                    // this.clickMenuNavLinks("singInSlide");
                  }}>
                  <Icon type="singIn" />
                  SING IN/ CREATE AN ACCOUNT
                </a>
              </li>
              <li className="listItem ">
                <a
                  onClick={() => {
                    this.animationNav("cartSlide");
                    // this.clickMenuNavLinks("cartSlide");
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
            this.animationNav(null);
          }}></div>
      </div>
    );
  }
}

export default NavSlide;
