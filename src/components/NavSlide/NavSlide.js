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
    this.NavBackground = null;
    this.SlideBackground = null;

    this.state = {
      mode: "CLOSE",
    };
  }
  toggle() {
    const { mode } = this.state;
    const newMode = mode === "CLOSE" ? "OPEN" : "CLOSE";
    this.setState({
      mode: newMode,
    });
    console.log("TOGGLE", mode);
  }
  clickCloseNav() {
    this.props.onCloseClick(null);
  }

  animationNav() {
    const { mode } = this.state;
    const posNav = mode === "CLOSE" ? "-100vw" : "50vw";
    const visibilityNav = mode === "CLOSE" ? "hidden" : "visible";
    const opacityNav = mode === "CLOSE" ? 0 : 1;

    const tl = new Timeline();
    tl.to(this.NavBox, { x: posNav }, 0);
    tl.to(this.NavBackground, { x: posNav, opacity: opacityNav }, 0);
    tl.to(this.SlideBackground, { x: posNav, visibility: visibilityNav }, 0);

    tl.eventCallback("onComplete", () => {
      this.toggle();

      console.log("--------------------->Modo", mode);

      console.log("visibility", visibilityNav);

      console.log("opacity", opacityNav);
    });
  }

  clickNavLinks(value) {
    this.props.onNavItemClick(value);
  }
  clickMenuNavLinks(value) {
    this.props.onMenuNavClick(value);
  }

  render() {
    console.log("start");

    return (
      <div
        className="backgroundSlide"
        ref={(div) => (this.SlideBackground = div)}>
        <div className="navBox" ref={(div) => (this.NavBox = div)}>
          <button
            onClick={() => {
              this.animationNav();
              this.clickNavLinks();
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
                    this.clickNavLinks("trousers");
                  }}>
                  #TROUSERS
                </a>
              </li>
              <li className="listItem">
                <a
                  onClick={() => {
                    this.animationNav();
                    this.clickNavLinks("tshirts");
                  }}>
                  #T-SHIRT
                </a>
              </li>

              <li className="listItem">
                <a
                  onClick={() => {
                    this.animationNav();
                    this.clickNavLinks("bags");
                  }}>
                  #BAGS
                </a>
              </li>
              <li className="listItem">
                <a
                  onClick={() => {
                    this.animationNav("CloseNav");
                    this.clickNavLinks("shoes");
                  }}>
                  #SHOES
                </a>
              </li>
              <li className="listItem">
                <a
                  onClick={() => {
                    this.animationNav();
                    this.clickNavLinks("newArrivals");
                  }}>
                  #NEW ARRIVALS
                </a>
              </li>
              <hr className="separationLine"></hr>
              <li className="listItem ">
                <a
                  onClick={() => {
                    this.animationNav();
                    this.clickMenuNavLinks("searchBox");
                  }}>
                  <Icon type="search" />
                  SEARCH
                </a>
              </li>
              <li className="listItem ">
                <a
                  onClick={() => {
                    this.animationNav();
                    this.clickMenuNavLinks("singInSlide");
                  }}>
                  <Icon type="singIn" />
                  SING IN/ CREATE AN ACCOUNT
                </a>
              </li>
              <li className="listItem ">
                <a
                  onClick={() => {
                    this.animationNav();
                    this.clickMenuNavLinks("cartSlide");
                  }}>
                  <Icon type="myBag" /> MY BAG
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div
          ref={(div) => (this.NavBackground = div)}
          onClick={() => {
            this.animationNav();
          }}
          className="backgroundClose"></div>
      </div>
    );
  }
}

export default NavSlide;
