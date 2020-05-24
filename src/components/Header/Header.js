import React from "react";
import "./Header.scss";
import Icon from "../Icon/Icon";
import Logo from "../Logo/Logo";
import SearchBox from "../SearchBox/SeachBox";

// CONTEXT
import PageManagerContext from "../../context/pageManager-context";

// ROUTER
import { Link } from "react-router-dom";

class Header extends React.Component {
  static contextType = PageManagerContext;

  handleNavSlide() {
    this.context.onSlideBtn("navSlide");
  }

  handleHome() {
    this.context.onSectionBtn("home");
  }

  handleSearchBox() {
    this.context.onSlideBtn("searchBox");
  }

  handleSingInSlide() {
    this.context.onSlideBtn("singInSlide");
  }

  handleCartSlide() {
    this.context.onSlideBtn("cartSlide");
  }

  render() {
    return (
      <div className='header'>
        <button
          onClick={() => {
            this.handleNavSlide();
          }}
          className='burger'>
          <Icon type='burger' />
        </button>
        <span className='spacer'></span>

        <Link to='/'>
          <button className='logo'>
            <Logo />
          </button>
        </Link>

        <span></span>
        <SearchBox />
        <button
          onClick={() => {
            this.handleSingInSlide();
          }}
          className='singInIcon'>
          <Icon type='singIn' />
        </button>
        <button
          onClick={() => {
            this.handleCartSlide();
          }}
          className='cartIcon'>
          <Icon type='myBag' />
        </button>
      </div>
    );
  }
}

export default Header;
