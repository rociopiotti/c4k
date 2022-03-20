import React, { Component } from "react";
import "./HeaderSlideCloseLeft.scss";
import { Icon, Logo } from "../shared-components";

// CONTEXT
import PageManagerContext from "../../context/pageManager-context";

class HeaderSlideCloseLeft extends Component {
  static contextType = PageManagerContext;

  render() {
    return (
      <div className='headerSlideCloseLeftBox'>
        <button onClick={this.props.onCloseArrow} className='btnCloseCartSlide'>
          <Icon className='iconBtnCloseCartSlide' type='arrowLeft' />
        </button>
        <span></span>
        <Logo className='logo' />
      </div>
    );
  }
}

export default HeaderSlideCloseLeft;
