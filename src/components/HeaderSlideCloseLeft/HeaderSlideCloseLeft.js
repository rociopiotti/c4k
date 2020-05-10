import React from "react"
import "./HeaderSlideCloseLeft.scss"
import Icon from "../Icon/Icon"

import Logo from "../Logo/Logo"

class HeaderSlideCloseLeft extends React.Component {
  handleCloseCartSlide(CloseSlide) {
    this.props.onCloseClick();
  }

  render() {
    return (
      <div className="headerSlideCloseLeftBox">
        <button
          onClick={() => {
            // this.handleCloseCartSlide("CloseSlide")
            this.handleCloseCartSlide()
          }}
          className="btnCloseCartSlide">
          <Icon className="iconBtnCloseCartSlide" type="arrowLeft"/>
        </button>
        <span></span>
        <Logo className="logo" />
      </div>
    )
  }
}

export default HeaderSlideCloseLeft
