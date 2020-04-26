import React from "react"
import "./HeaderSlideCloseLeft.scss"
import Icon from "../Icon/Icon"

import Logo from "../Logo/Logo"

class HeaderSlideCloseLeft extends React.Component {
  // handleCloseCartSlide(CloseSlide) {
  //   console.log("Click en botón:", CloseSlide)
  // }

  render() {
    return (
      <div className="headerSlideCloseLeftBox">
        <button
          onClick={() => {
            // this.handleCloseCartSlide("CloseSlide")
            this.props.onCloseClick(null)
          }}
          className="btnCloseCartSlide">
          <Icon className="iconBtnCloseCartSlide" />
        </button>
        <span></span>
        <Logo className="logo" />
      </div>
    )
  }
}

export default HeaderSlideCloseLeft
