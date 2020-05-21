import React from "react";
import "./HeaderSlideCloseLeft.scss";
import Icon from "../Icon/Icon";
import Logo from "../Logo/Logo";

// CONTEXT
import PageManagerContext from "../../context/pageManager-context";

class HeaderSlideCloseLeft extends React.Component {
  static contextType = PageManagerContext;

  handleCloseCartSlide(CloseSlide) {
    this.context.onSlideBtn();
  }

  render() {
    return (
      <div className='headerSlideCloseLeftBox'>
        <button
          onClick={() => {
            this.handleCloseCartSlide();
          }}
          className='btnCloseCartSlide'>
          <Icon className='iconBtnCloseCartSlide' type='arrowLeft' />
        </button>
        <span></span>
        <Logo className='logo' />
      </div>
    );
  }
}

export default HeaderSlideCloseLeft;
