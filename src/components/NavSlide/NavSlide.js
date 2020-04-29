import React from "react"
import "./NavSlide.scss"
import Icon from "../Icon/Icon"

class NavSlide extends React.Component {
  clickCloseNav() {
    this.props.onCloseClick(null)
  }
  clickMenuNavLinks(value) {
    this.props.onMenuNavClick(value)
  }
  clickNavLinks(value) {
    this.props.onNavItemClick(value)
  }
  render() {
    return (
      <div className="backgroundSlide">
        <div className="navBox">
          <button
            onClick={() => {
              this.clickCloseNav("CloseNav")
            }}
            className="BtnCloseNav">
            <Icon className="iconBtnCloseNav" />
          </button>
          <nav className="nav">
            <ul className="list">
              <li className="listItem">
                <a
                  onClick={() => {
                    this.clickCloseNav("CloseNav")
                    this.clickNavLinks("trousers")
                  }}>
                  #TROUSERS
                </a>
              </li>
              <li className="listItem">
                <a
                  onClick={() => {
                    this.clickCloseNav("CloseNav")
                    this.clickNavLinks("tshirts")
                  }}>
                  #T-SHIRT
                </a>
              </li>

              <li className="listItem">
                <a
                  onClick={() => {
                    this.clickCloseNav("CloseNav")
                    this.clickNavLinks("bags")
                  }}>
                  #BAGS
                </a>
              </li>
              <li className="listItem">
                <a
                  onClick={() => {
                    this.clickCloseNav("CloseNav")
                    this.clickNavLinks("shoes")
                  }}>
                  #SHOES
                </a>
              </li>
              <li className="listItem">
                <a
                  onClick={() => {
                    this.clickCloseNav("CloseNav")
                    this.clickNavLinks("newArrivals")
                  }}>
                  #NEW ARRIVALS
                </a>
              </li>
              <hr className="separationLine"></hr>
              <li className="listItem ">
                <a
                  onClick={() => {
                    this.clickCloseNav("CloseNav")                    
                    this.clickMenuNavLinks("searchBox")
                  }}>
                  <Icon className="searchNavIcon" />
                  SEARCH
                </a>
              </li>
              <li className="listItem ">
                <a
                  onClick={() => {
                    this.clickCloseNav("CloseNav")                                     
                    this.clickMenuNavLinks("singInSlide")
                  }}>
                  <Icon className="signInNavIcon" />
                  SING IN/ CREATE AN ACCOUNT
                </a>
              </li>
              <li className="listItem ">
                <a
                  onClick={() => {
                    this.clickCloseNav("CloseNav")                                     
                    this.clickMenuNavLinks("cartSlide")
                  }}>
                  <Icon className="cartNavIcon" /> MY BAG
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div
          onClick={() => {
            this.clickCloseNav("CloseNav")
          }}
          className="backgroundClose"></div>
      </div>
    )
  }
}

export default NavSlide
