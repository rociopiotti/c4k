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

  animationNav() {
    console.log("Entro a Animation");

    const { mode } = this.state;
    const posNav = mode === "CLOSE" ? "-100vw" : "50vw";
    const visibilityNav = mode === "CLOSE" ? "hidden" : "visible";
    const opacityNav = mode === "CLOSE" ? 0 : 1;
    console.log("Paso por condicionales",  posNav,
    visibilityNav,
    opacityNav);

    const tl = new Timeline();
    tl.to(this.NavBox, { x: posNav }, 0);
    console.log("Paso por posicion nav");

    tl.to(this.NavBackground, { x: posNav, opacity: opacityNav }, 0);
    console.log("Paso por posiscion nac background");

    tl.to(
      this.SlideBackground,
      { width: "+100vw", visibility: visibilityNav },
      0
    );
    console.log("Paso por tñ.to posicion slide background");

    tl.from(this.SlideBackground, {
      width: "0vw",
      visibility: "hidden",
    });
    console.log(
      "Paso por posicion tl.from background",
      posNav,
      visibilityNav,
      opacityNav
    );

    tl.reverse();
    console.log("Paso por posicion reverse");

    tl.eventCallback("onComplete", () => {
      console.log("Entro a final");

      this.toggle();
      // console.log("--------------------->Modo", mode);
      // console.log("visibility", visibilityNav);
      // console.log("opacity", opacityNav);
      console.log("Termino animar");
    });
  }
  clickCloseNav() {
    console.log("entro a CLOSE");
    this.props.onCloseClick(null);
    console.log("SALGO DE CLOSE");
  }

  clickNavLinks(value) {
    console.log("entro a Nav", value);

    this.props.onNavItemClick(value);
    console.log("salgo de Nav", value);
  }
  clickMenuNavLinks() {
    this.props.onMenuNavClick(null);
  }

  render() {
    // console.clear();
    console.log("Empieza");
    return (
      <div
        className="backgroundSlide"
        ref={(div) => (this.SlideBackground = div)}>
        <div className="navBox" ref={(div) => (this.NavBox = div)}>
          <button
            onClick={() => {
              this.animationNav();
              this.clickCloseNav("home");
            }}
            className="BtnCloseNav">
            <Icon type="arrowRight" />
          </button>
          <nav className="nav">
            <ul className="list">
              <li className="listItem">
                <a
                  onClick={() => {
                    this.animationNav();
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
                    this.animationNav();
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

            this.clickCloseNav(null);
          }}
          className="backgroundClose"></div>
      </div>
    );
  }
}

export default NavSlide;
