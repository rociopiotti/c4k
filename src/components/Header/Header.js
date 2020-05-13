import React from "react";
import "./Header.scss";
import Icon from "../Icon/Icon";
import Logo from "../Logo/Logo";
import SearchBox from "../SearchBox/SeachBox";
import PageManagerContext from "../../context/pageManager-context";

class Header extends React.Component {
  static contextType = PageManagerContext;
  handleNavSlide() {
    this.context.onMenuClick("navSlide");
  }

  handleHome() {
    this.context.onHomeMenuClick("home");
  }

  handleSearchBox() {
    this.context.onMenuClick("searchBox");
  }

  handleSingInSlide() {
    this.context.onMenuClick("singInSlide");
  }

  handleCartSlide() {
    this.context.onMenuClick("cartSlide");
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
        <SearchBox />
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
