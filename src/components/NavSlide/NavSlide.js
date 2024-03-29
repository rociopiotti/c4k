import React, { Component } from "react";
import "./NavSlide.scss";
import Icon from "../Icon/Icon";

// CONTEXT
import PageManagerContext from "../../context/pageManager-context";

// ROUTER
import { Link } from "react-router-dom";

//JSONS
const navList = [
  { id: "0", name: "TROUSERS", label: "trousers" },
  { id: "1", name: "T-SHIRT", label: "tshirts" },
  { id: "2", name: "BAGS", label: "bags" },
  { id: "3", name: "SHOES", label: "shoes" },
  { id: "4", name: "NEW ARRIVALS", label: "newarrivals" },
];
const menu = [
  { id: "0", name: "SING IN / CREATE ACCOUNT", label: "singInSlide" },
  { id: "1", name: "MY BAG", label: "cartSlide" },
];

class NavSlide extends Component {
  static contextType = PageManagerContext;

  constructor(props) {
    super(props);
    this.NavCloseBackground = null;
    this.SlideBackground = null;
    this.executeAnimation = this.executeAnimation.bind(this);
  }

  executeAnimation(nextSlide) {
    this.context.slideOutAnimation(
      "left",
      {
        backgroundRef: this.NavCloseBackground,
        wrapperRef: this.SlideBackground,
      },
      this.context.onSlideBtn,
      nextSlide
    );
  }

  componentDidMount() {
    document.body.style.overflow = "hidden";
    this.context.slideInAnimation({
      backgroundRef: this.NavCloseBackground,
      wrapperRef: this.SlideBackground,
    });
  }
  componentWillUnmount() {
    document.body.style.overflow = "unset";
  }
  createList() {
    return navList.map(({ name, label }, i) => {
      return (
        <li key={i} className='listItem'>
          <Link
            key={i}
            to={`/products/${label}`}
            onClick={() => this.executeAnimation(null)}>
            {name}
          </Link>
        </li>
      );
    });
  }

  createMenuList() {
    return menu.map((element) => {
      const { id, name, label } = element;
      return (
        <li className='listItem' key={id}>
          <button onClick={() => this.executeAnimation(label)}>{name}</button>
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
            onClick={() => this.executeAnimation(null)}
            className='BtnCloseNav'>
            <Icon type='arrowRight' />
          </button>
          <nav className='nav'>
            <ul className='list'>{this.createList()}</ul>
            <hr className='separationLine'></hr>
            <ul className='list'>{this.createMenuList()}</ul>
          </nav>
        </div>
        <div
          className='backgroundClose'
          ref={(div) => (this.NavCloseBackground = div)}
          onClick={() => this.executeAnimation(null)}></div>
      </div>
    );
  }
}

export default NavSlide;
