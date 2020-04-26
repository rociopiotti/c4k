import React from "react"
import "./NavSlide.scss"
import Icon from "../Icon/Icon"

class NavSlide extends React.Component {
  clickCloseNav() {
    this.props.onCloseClick(null)
  }
  clickNavLinks(url) {
    console.log("Click en botón muestra página:", url)
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
                    this.clickNavLinks("tshirt.html")
                  }}>
                  #T-SHIRT
                </a>
              </li>
              <li className="listItem">
                <a
                  onClick={() => {
                    this.clickNavLinks("trousers.html")
                  }}>
                  #TROUSERS
                </a>
              </li>
              <li className="listItem">
                <a
                  onClick={() => {
                    this.clickNavLinks("bags.html")
                  }}>
                  #BAGS
                </a>
              </li>
              <li className="listItem">
                <a
                  onClick={() => {
                    this.clickNavLinks("shoes.html")
                  }}>
                  #SHOES
                </a>
              </li>
              <li className="listItem">
                <a
                  onClick={() => {
                    this.clickNavLinks("newarrivals.html")
                  }}>
                  #NEW ARRIVALS
                </a>
              </li>
              <hr className="separationLine"></hr>
              <li className="listItem ">
                <a
                  onClick={() => {
                    this.clickNavLinks("homeWithSearchComponent.html")
                  }}>
                  <Icon className="searchNavIcon" />
                  SEARCH
                </a>
              </li>
              <li className="listItem ">
                <a
                  onClick={() => {
                    this.clickNavLinks("signInCreateAccount.html")
                  }}>
                  <Icon className="signInNavIcon" />
                  SING IN/ CREATE AN ACCOUNT
                </a>
              </li>
              <li className="listItem ">
                <a
                  onClick={() => {
                    this.clickNavLinks("cartSlide.html")
                  }}>
                  <Icon className="cartNavIcon" /> MY BAG
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    )
  }
}

export default NavSlide
