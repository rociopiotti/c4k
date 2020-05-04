import React from "react";
import "./Header.scss";
import Icon from "../Icon/Icon";
import Logo from "../Logo/Logo";

class Header extends React.Component {
  handleNavSlide() {
    this.props.onMenuClick("navSlide");
  }

  handleHome() {
    this.props.onHomeMenuClick("home");
  }

  handleSearchBox() {
    this.props.onMenuClick("searchBox");
  }

  handleSingInSlide() {
    this.props.onMenuClick("singInSlide");
  }

  handleCartSlide() {
    this.props.onMenuClick("cartSlide");
  }

  render() {
    return (
      <div className="header">
        <button
          onClick={() => {
            this.handleNavSlide();
          }}
          className="burger">
          <Icon type="burger" />
        </button>
        <span className="spacer"></span>
        <button
          onClick={() => {
            this.handleHome();
          }}
          className="logo">
          <Logo />
        </button>
        <span></span>
        <button
          onClick={() => {
            this.handleSearchBox();
          }}
          className="searchIcon">
          <Icon type="search" />
        </button>
        <button
          onClick={() => {
            this.handleSingInSlide();
          }}
          className="singInIcon">
          <Icon type="singIn" />
        </button>
        <button
          onClick={() => {
            this.handleCartSlide();
          }}
          className="cartIcon">
          <Icon type="myBag" />
        </button>
      </div>
    );
  }
}

export default Header;
