import React from "react"
import "./Header.scss"
import Icon from "../Icon/Icon"
import Logo from "../Logo/Logo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class Header extends React.Component {
  handleNavSlide() {
    this.props.onMenuClick("navSlide")
  }

  handleHome(Home) {
    console.log("Click en el boton que abre:", Home)
  }

  handleSearchBox(SearchBox) {
    console.log("Click en el boton que abre:", SearchBox)
  }

  handleSingInSlide(SinInSlide) {
    console.log("Click en el boton que abre:", SinInSlide)
  }

  handleCartSlide() {
    this.props.onMenuClick("cartSlide")
  }

  render() {
    return (
      <div className="header">
        <button
          onClick={() => {
            this.handleNavSlide()
          }}
          className="burger">
          <FontAwesomeIcon icon="bars" className="barsIcon" />
        </button>
        <span className="spacer"></span>
        <button
          onClick={() => {
            this.handleHome("Home")
          }}
          className="logo">
          <Logo />
        </button>
        <span></span>
        <button
          onClick={() => {
            this.handleSearchBox("SearchBox")
          }}
          className="searchIcon">
          <Icon />
        </button>
        <button
          onClick={() => {
            this.handleSingInSlide("SingInSlide")
          }}
          className="singInIcon">
          <Icon />
        </button>
        <button
          onClick={() => {
            this.handleCartSlide()
          }}
          className="cartIcon">
          <Icon />
        </button>
      </div>
    )
  }
}

export default Header
