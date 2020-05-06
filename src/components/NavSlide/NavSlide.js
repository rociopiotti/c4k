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

    this.state = {
      mode: "CLOSE",
    };
  }

  animationNav() {
    const { mode } = this.state;
    const tl = new Timeline();
    tl.to(this.NavBox, { x: "-50vw" },0);
    tl.to(this.NavBackground, { opacity: 0 }, 0);

    console.clear();
    console.log("cierra nav", this.state.mode);
  }

  clickCloseNav() {
    this.props.onCloseClick(null);
  }
  clickMenuNavLinks(value) {
    this.props.onMenuNavClick(value);
  }
  clickNavLinks(value) {
    this.props.onNavItemClick(value);
  }
  render() {
    return (
      <div className="backgroundSlide">
        <div className="navBox" ref={(div) => (this.NavBox = div)}>
          <button
            onClick={() => {
              this.animationNav("CloseNav");
            }}
            className="BtnCloseNav">
            <Icon type="arrowRight" />
          </button>
          <nav className="nav">
            <ul className="list">
              <li className="listItem">
                <a
                  onClick={() => {
                    this.clickCloseNav("CloseNav");
                    this.clickNavLinks("trousers");
                  }}>
                  #TROUSERS
                </a>
              </li>
              <li className="listItem">
                <a
                  onClick={() => {
                    this.clickCloseNav("CloseNav");
                    this.clickNavLinks("tshirts");
                  }}>
                  #T-SHIRT
                </a>
              </li>

              <li className="listItem">
                <a
                  onClick={() => {
                    this.clickCloseNav("CloseNav");
                    this.clickNavLinks("bags");
                  }}>
                  #BAGS
                </a>
              </li>
              <li className="listItem">
                <a
                  onClick={() => {
                    this.clickCloseNav("CloseNav");
                    this.clickNavLinks("shoes");
                  }}>
                  #SHOES
                </a>
              </li>
              <li className="listItem">
                <a
                  onClick={() => {
                    this.clickCloseNav("CloseNav");
                    this.clickNavLinks("newArrivals");
                  }}>
                  #NEW ARRIVALS
                </a>
              </li>
              <hr className="separationLine"></hr>
              <li className="listItem ">
                <a
                  onClick={() => {
                    this.clickCloseNav("CloseNav");
                    this.clickMenuNavLinks("searchBox");
                  }}>
                  <Icon type="search" />
                  SEARCH
                </a>
              </li>
              <li className="listItem ">
                <a
                  onClick={() => {
                    this.clickCloseNav("CloseNav");
                    this.clickMenuNavLinks("singInSlide");
                  }}>
                  <Icon type="singIn" />
                  SING IN/ CREATE AN ACCOUNT
                </a>
              </li>
              <li className="listItem ">
                <a
                  onClick={() => {
                    this.clickCloseNav("CloseNav");
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
            this.clickCloseNav("CloseNav");
          }}
          className="backgroundClose"></div>
      </div>
    );
  }
}

export default NavSlide;
