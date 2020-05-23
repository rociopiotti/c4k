import React from "react";
import "./NavSlide.scss";
import Icon from "../Icon/Icon";

// CONTEXT
import PageManagerContext from "../../context/pageManager-context";

// ROUTER
import { BrowserRouter, Link } from "react-router-dom";

//ANMATION
import { Timeline, Back } from "gsap/gsap-core";

// EASING
const ease = Back.easeInOut;

//JSONS
const navList = [
  { id: "0", name: "TROUSERS", label: "trousers" },
  { id: "1", name: "T-SHIRT", label: "t-shirts" },
  { id: "2", name: "BAGS", label: "bags" },
  { id: "3", name: "SHOES", label: "shoes" },
  { id: "4", name: "NEW ARRIVALS", label: "newArrivals" },
];
const menu = [
  { id: "0", name: "SING IN / CREATE ACCOUNT", label: "singInSlide" },
  { id: "1", name: "MY BAG", label: "cartSlide" },
];

class NavSlide extends React.Component {
  static contextType = PageManagerContext;

  constructor(props) {
    super(props);
    this.NavCloseBackground = null;
    this.SlideBackground = null;
  }

  // --------------------------------------------------------
  executeAnimation(value) {
    const tl = new Timeline({
      onComplete: () => this.context.onSlideBtn(value),
      repeat: 0,
      repeatDelay: 0,
      ease: ease,
    });
    tl.to(this.NavCloseBackground, { opacity: 0 });
    tl.to(this.SlideBackground, { left: "-100vw" }, 0.4);
  }

  // --------------------------------------------------------

  clickChangeSection() {
    this.executeAnimation(null);
  }

  clickMenuNavLinks(value) {
    this.executeAnimation(value);
  }

  componentDidMount() {
    const tl = new Timeline({ ease: ease, repeat: 0, repeatDelay: 0 });
    tl.to(this.SlideBackground, { left: 0 });
    tl.to(this.NavCloseBackground, { opacity: "0.8" }, 0.4);
  }

  ////////////////////////////////////////////////////// ROUTER
  createList() {
    return navList.map((element, i) => {
      const { id, name, label } = element;
      return (
        <li key={i} className='listItem'>
          <Link
            key={i}
            to={`/products/${label}`}
            onClick={() => {
              this.clickChangeSection(label);
            }}>
            {name}
          </Link>
        </li>
      );
    });
  }

  createMenuList() {
    return menu.map((element, index) => {
      const { id, name, label } = element;
      return (
        <li className='listItem' key={id}>
          <a
            onClick={() => {
              this.clickMenuNavLinks(label);
            }}>
            {name}
          </a>
        </li>
      );
    });
  }

  render() {
    return (
      <div
        className='backgroundSlide'
        ref={(div) => (this.SlideBackground = div)}>
        <div className='navBox'>
          <button
            onClick={() => {
              this.clickCloseNav();
            }}
            className='BtnCloseNav'>
            <Icon type='arrowRight' />
          </button>
          <nav className='nav'>
            {/*/////////////////////////////////////////////////// ANTERIOR
            <ul className="list">{this.createList()}</ul> 
            //////////////////////////////////////////////////////*/}

            <ul className='list'>{this.createList()}</ul>

            <hr className='separationLine'></hr>
            <ul className='list'>{this.createMenuList()}</ul>
          </nav>
        </div>
        <div
          className='backgroundClose'
          ref={(div) => (this.NavCloseBackground = div)}
          onClick={() => {
            this.clickCloseNav();
          }}></div>
      </div>
    );
  }
}

export default NavSlide;
