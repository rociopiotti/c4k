import React from "react"
import "./Header.scss"
import Icon from "../Icon/Icon"
import Logo from "../Logo/Logo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

class Header extends React.Component {
   handleNavSlide (NavSlide)  {
    console.log("Click en el boton que abre:", NavSlide)
  }

  handleHome (Home)  {
    console.log("Click en el boton que abre:", Home)
  }

   handleSearchBox  (SearchBox)  {
    console.log("Click en el boton que abre:", SearchBox)
  }

  handleSingInSlide (SinInSlide) {
    console.log("Click en el boton que abre:", SinInSlide)
  }

  handleCartSlide (CartSlide)  {
    console.log("Click en el boton que abre:", CartSlide)
  }
  render() {

    return (
      <div className="header">
        <button
          onClick={() => {
            this.handleNavSlide("NavSlide")
          }}
          className="burger">
          <FontAwesomeIcon icon="bars" className="barsIcon" />
        </button>
        <span></span>
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
            this.handleCartSlide("CartSlide")
          }}
          className="cartIcon">
          <Icon />
        </button>
      </div>
    )
  }
}

export default Header
